function palindrome(str) {
  // Paso el string a lowercase y quito los caracteres no alfanuméricos
  str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  // Le doy la vuelta
  const reversedStr = str.split("").reverse().join("");
  // Verifico que son iguales
  return str === reversedStr;
}

palindrome("eye");
