import { green } from "colorette";
import { generateInstallCommand } from "../generators/dependencies";
import { generateApp } from "../generators/frameworks";
import { Answer } from "../types/answer";
import { Library } from "../types/libraries";
import { getProjectName } from "../utils/names";
import { cmd } from "./cmd";

const dynamicImportOra = async () => {
  const { default: ora } = await import("ora");
  return ora;
};

export const executor = async (args: Answer) => {
  const ora = await dynamicImportOra();
  const { projectName } = args;

  const appCommand = generateApp(getProjectName(projectName), args);

  try {
    const cpLoader = ora({
      text: `Creating project ${projectName}...`,
    }).start();

    await cmd(appCommand, false);
    cpLoader.succeed(green(`Project ${projectName} created successfully!`));

    // move to the project directory
    console.log(`Moving to ${getProjectName(projectName)}...`);
    process.chdir(getProjectName(projectName));

    // install dependencies
    const diLoader = ora(`Instaling dependencies...`).start();
    // TODO uncomment this line
    // installDependencies(libraries);
    diLoader.succeed(green(`Dependencies installed successfully!`));

    // generate UI views
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
};

export const installDependencies = async (dependencies: Array<Library>) => {
  const installCommand = generateInstallCommand(dependencies);
  try {
    await cmd(installCommand);
  } catch (error) {
    console.log(error);
  }
};
