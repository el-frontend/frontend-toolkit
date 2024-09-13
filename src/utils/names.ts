export function getProjectName(name: string) {
  return name.toLowerCase().replace(/\s+/g, "-");
}
