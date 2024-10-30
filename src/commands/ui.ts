import { blue, green } from "colorette";
import { Framework } from "../types/frameworks";

export const showFinalMessage = (projectName: string, framework: Framework) => {
  switch (framework) {
    case "ReactJS":
      console.log(
        green(
          `Your ReactJS project ${projectName} has been created successfully! \u{1F389}`,
        ),
      );
      console.log(green("\u{1F680} To start the project, run the following commands \u{1F680}:"));
      console.log(blue(`   cd ${projectName}`));
      console.log(blue(`   npm run dev`));
      console.log("");
  }
};
