const splitByCapitals = (str: string) => {
  return str.replace(/(?<=[A-Z])(?=[A-Z][a-z])|(?<=[^A-Z])(?=[A-Z])|(?<=[A-Za-z])(?=[^A-Za-z])/g, ' ').split(' ');
}

export function getCssBlockName(className: string) {
  return splitByCapitals(className).map(i => i.toLowerCase()).join('-');
}
