function isValid(bracket) {
  while (
    bracket.includes("()") ||
    bracket.includes("{}") ||
    bracket.includes("[]")
  ) {
    bracket = bracket.replace("()", "").replace("{}", "").replace("[]", "");
  }
  if (bracket === "") return true;
  else return false;
}

console.log(isValid("{([(())]()[])}"));
