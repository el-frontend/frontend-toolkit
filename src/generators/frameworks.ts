import { Answer } from "../types/answer";
import { Framework } from "../types/frameworks";
import { Stylesheet } from "../types/global";

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
  return `npx --yes create-next-app@latest ${appName} ${typescript ? "--ts" : "--js"} --app --eslint --src-dir --import-alias '@/*' --no-tailwind --skip-install --turbopack`;
}

export function generateAstroApp(appName: string, typescript: boolean) {
  return `npm create astro@latest ${appName} -- --template minimal --typescript ${typescript ? "strict" : "strictest"} --no-install --no`;
}

export function generateNuxtApp(appName: string) {
  return `npx --yes nuxi@latest init ${appName} --no-install --package-manager 'npm' --no-git-init`;
}

export function generateAngularApp(appName: string, typscript: boolean, ssr: boolean, stylesheet: Stylesheet) {
  // TODO Add ssr config option
  return `npm install -g @angular/cli && ng new ${appName} ${typscript ? "--strict" : ""} --skip-install --skip-git ${ssr ? "--ssr" : ""} --style ${stylesheet.toLowerCase()}`;
}

export function generateApp(
  appName: string,
  answer: Answer
) {
  switch (answer.framework) {
    case "ReactJS":
      return generateViteApp(appName, answer.typescript, "ReactJS");
    case "Vue":
      return generateViteApp(appName, answer.typescript, "Vue");
    case "NextJS":
      return generateNextJsApp(appName, answer.typescript);
    case "Astro":
      return generateAstroApp(appName, answer.typescript);
    case "Nuxt":
      return generateNuxtApp(appName);
    case "Angular":
      return generateAngularApp(appName, answer.typescript, answer.ssr, answer.stylesheet);
    default:
      throw new Error("Invalid framework");
  }
}
