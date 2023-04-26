function telephoneCheck(str) {
  // Expresion regular para validar numeros de telefono
  const phoneRegex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;
  return phoneRegex.test(str);
}

telephoneCheck("555-555-5555");
