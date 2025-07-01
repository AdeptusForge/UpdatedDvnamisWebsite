// @ts-ignore

export function bold(strings, ...expressions) {
  let finalString = "";

  // Loop through all expressions
  expressions.forEach((value, i) => {
    finalString += `${strings[i]}<strong>${value}</strong>`;
  });

  // Add the last string literal
  finalString += strings[strings.length - 1];
  return finalString;
}