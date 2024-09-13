import { generateInstallCommand } from "../generators/dependencies";
import { generateApp } from "../generators/frameworks";
import { Answer } from "../types/answer";
import { Library } from "../types/libraries";
import { getProjectName } from "../utils/names";

export const executor = async (args: Answer) => {
  const { projectName, framework, libraries, ui, typescript } = args;

  const appCommand = generateApp(
    getProjectName(projectName),
    typescript,
    framework,
  );

  console.log(appCommand);
};

export function installDependencies(dependencies: Array<Library>) {
  const installCommand = generateInstallCommand(dependencies);
  console.log(installCommand);
}
