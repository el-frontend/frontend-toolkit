import { Framework } from "../types/frameworks";

export function generateViteApp(
  appName: string,
  typescript: boolean,
  framework: Extract<Framework, "ReactJS" | "VueJS">,
) {
  const baseCommand = `npm create vite@latest ${appName} -- --template`;

  switch (framework) {
    case "ReactJS":
      return `${baseCommand} react${typescript ? "-ts" : ""}`;
    case "VueJS":
      return `${baseCommand} vue${typescript ? "-ts" : ""}`;
    default:
      throw new Error("Invalid framework");
  }
}

// export function generateNextConfig(typescript: boolean) {
//   const baseCommand = "npm create next-app@latest my-next-app -- --typescript";
//   return baseCommand;
// }

export function generateApp(
  appName: string,
  typescript: boolean,
  framework: Framework,
) {
  switch (framework) {
    case "ReactJS":
      return generateViteApp(appName, typescript, "ReactJS");
    case "VueJS":
      return generateViteApp(appName, typescript, "VueJS");
    default:
      throw new Error("Invalid framework");
  }
}
