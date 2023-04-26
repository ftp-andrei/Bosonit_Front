function rot13(str) {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let decoded = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (!/[A-Z]/.test(char)) {
      decoded += char;
      continue;
    }
    const charIndex = alphabet.indexOf(char);
    const decodedIndex = (charIndex + 13) % 26;
    decoded += alphabet[decodedIndex];
  }
  return decoded;
}

rot13("SERR PBQR PNZC");
