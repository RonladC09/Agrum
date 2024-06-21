export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function stringHasNumbers(string) {
  return /\d/.test(string);
}
