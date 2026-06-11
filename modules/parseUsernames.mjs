export function parseUsernames(input) {
  return input
    .split(",")
    .map(name => name.trim())
    .filter(Boolean);
}