import { run } from "../commands/run";
import { Framework } from "../types/frameworks";
import { UIFrameworks } from "../types/ui";

export const addTailwindCSS = (appName: string, framework: Framework) => {
  switch (framework) {
    case "ReactJS":
      return [
        "npm install -D tailwindcss postcss autoprefixer",
        "npx tailwindcss init -p",
        "npm i -D @types/node",
        `localCmd tailwind-config ${appName} ${framework}`,
      ];
    case "NextJS":
      return [
        "npm install -D tailwindcss postcss autoprefixer",
        "npx tailwindcss init -p",
        `localCmd tailwind-config ${appName} ${framework}`,
      ];
    default:
      return [];
  }
};

export const addShadcnUI = (
  appName: string,
  framework: Framework,
): string[] => {
  switch (framework) {
    case "ReactJS":
      // fix the interactivity issue, to interact with the npx command
      return [
        ...addTailwindCSS(appName, framework),
        `localCmd shadcn-config ${appName}`,
        "npx shadcn@latest init -d",
      ];
    case "NextJS":
      return [
        ...addTailwindCSS(appName, framework),
        "npx shadcn@latest init -d",
      ];
  }
  return [];
};

const addMUI = () => {
  return ["npm install @mui/material @emotion/react @emotion/styled"];
};

const addAntDesign = () => {
  return ["npm install antd --save"];
};

export const addUIFrameworks = (
  appName: string,
  ui: UIFrameworks,
  framework: Framework,
): string[] => {
  switch (ui) {
    case "shadcn/ui":
      return addShadcnUI(appName, framework);
    case "mui":
      return addMUI();
    case "tailwindcss":
      return addTailwindCSS(appName, framework);
    case "ant-design":
      return addAntDesign();
    default:
      return [];
  }
};

export const executeAddUiFrameworks = async (
  appName: string,
  ui: UIFrameworks,
  framework: Framework,
) => {
  const commands = addUIFrameworks(appName, ui, framework);
  for (const command of commands) {
    await run(command);
  }
};
