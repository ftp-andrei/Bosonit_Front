function checkCashRegister(price, cash, cid) {
  // Creo un array con los valores
  const unitValues = {
    PENNY: 0.01,
    NICKEL: 0.05,
    DIME: 0.1,
    QUARTER: 0.25,
    ONE: 1,
    FIVE: 5,
    TEN: 10,
    TWENTY: 20,
    "ONE HUNDRED": 100,
  };

  // Calculo el cambio debido y el efectivo total
  let changeDue = cash - price;
  let totalCID = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCID += cid[i][1];
  }
  totalCID = Math.round(totalCID * 100) / 100; // Redondeo a 2 decimales

  // Comprueba si hay suficiente efectivo para dar el cambio adeudado
  if (totalCID < changeDue) {
    return { status: "INSUFFICIENT_FUNDS", change: [] };
  } else if (totalCID === changeDue) {
    return { status: "CLOSED", change: cid };
  } else {
    // Calculo el cambio a entregar y actualizo el cid
    let changeArr = [];
    for (let i = cid.length - 1; i >= 0; i--) {
      let currValue = unitValues[cid[i][0]];
      let currAmount = cid[i][1];
      let currChange = 0;
      while (changeDue >= currValue && currAmount > 0) {
        currChange += currValue;
        changeDue -= currValue;
        currAmount -= currValue;
        // Redondeo a 2 decimales
        currAmount = Math.round(currAmount * 100) / 100;
        changeDue = Math.round(changeDue * 100) / 100;
      }
      if (currChange > 0) {
        changeArr.push([cid[i][0], currChange]);
      }
    }

    // Si el cambio es >0 devolverá una cosa u otra
    if (changeDue > 0) {
      return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else {
      return { status: "OPEN", change: changeArr };
    }
  }
}

checkCashRegister(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);
