import { green } from "colorette";
import { generateInstallCommand } from "../generators/dependencies";
import { generateApp } from "../generators/frameworks";
import { executeAddUiFrameworks } from "../generators/ui";
import { Answer } from "../types/answer";
import { Library } from "../types/libraries";
import { getProjectName } from "../utils/names";
import { run } from "./run";
import { showFinalMessage } from "./ui";

const dynamicImportOra = async () => {
  const { default: ora } = await import("ora");
  return ora;
};

export const executor = async (args: Answer) => {
  const ora = await dynamicImportOra();
  const { projectName, libraries, framework, ui } = args;

  const appCommand = generateApp(getProjectName(projectName), args);

  try {
    const cpLoader = ora({
      text: `Creating project "${projectName}" this can take a while...`,
    }).start();

    await run(appCommand, false);
    cpLoader.succeed(green(`Project ${projectName} created successfully!`));

    // move to the project directory
    console.log(`Moving to ${getProjectName(projectName)}...`);
    process.chdir(getProjectName(projectName));

    // install dependencies
    if (libraries && libraries.length > 0) {
      const diLoader = ora(`Instaling dependencies...`).start();
      await installDependencies(libraries);
      diLoader.succeed(green(`Dependencies installed successfully!`));
    }

    // generate UI views
    const diLoaderUI = ora(`Adding UI elements...`).start();
    await executeAddUiFrameworks(projectName, ui, framework);
    diLoaderUI.succeed(green(`UI dependencies added successfully!`));

    // show final message
    showFinalMessage(projectName, framework);
  } catch (error) {
    console.log(`An error occurred: ${error}`);
  }
};

export const installDependencies = async (dependencies: Array<Library>) => {
  if (!dependencies || dependencies.length === 0) return;
  const installCommand = generateInstallCommand(dependencies);
  try {
    await run(installCommand);
  } catch (error) {
    console.log(error);
  }
};
