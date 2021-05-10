function lindenmayer(string) {
  let outputstring = '';

  for (let symbol of string) {
    for (let [axiom, rule] of rules.entries()) {
      if (symbol == axiom) {
        outputstring += rule; 
        ismatch = 1; 
        break; 
      }
      else outputstring += symbol;
    }
  }
  return outputstring; 
}