import { Framework } from "../types/frameworks";

export function generateViteApp(
  appName: string,
  typescript: boolean,
  framework: Extract<Framework, "ReactJS" | "Vue">,
) {
  const baseCommand = `npm create vite@latest ${appName} -- --template`;

  switch (framework) {
    case "ReactJS":
      return `${baseCommand} react${typescript ? "-ts" : ""}`;
    case "Vue":
      return `${baseCommand} vue${typescript ? "-ts" : ""}`;
    default:
      throw new Error("Invalid framework");
  }
}

// export function generateNextConfig(typescript: boolean) {
//   const baseCommand = "npm create next-app@latest my-next-app -- --typescript";
//   return baseCommand;
// }

export function generateNextJsApp(appName: string, typescript: boolean) {
  return `npx --yes create-next-app@latest ${appName} ${typescript ? "--ts" : "--js"} --app --eslint --src-dir --import-alias '@/*' --no-tailwind --skip-install`;
}

export function generateAstroApp(appName: string, typescript: boolean) {
  return `npm create astro@latest ${appName} -- --template minimal --typescript ${typescript ? "strict" : "strictest"} --no-install --no`;
}

export function generateApp(
  appName: string,
  typescript: boolean,
  framework: Framework,
) {
  switch (framework) {
    case "ReactJS":
      return generateViteApp(appName, typescript, "ReactJS");
    case "Vue":
      return generateViteApp(appName, typescript, "Vue");
    case "NextJS":
      return generateNextJsApp(appName, typescript);
    case "Astro":
      return generateAstroApp(appName, typescript);
    default:
      throw new Error("Invalid framework");
  }
}
