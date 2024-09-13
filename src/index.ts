#!/usr/bin/env node

import {
  black,
  blue,
  green,
  greenBright,
  magenta,
  red,
  yellow,
} from "colorette";
import { program } from "commander";
import figlet from "figlet";
import inquirer from "inquirer";
import { executor } from "./commands/executor";

program.version("1.0.0").description("Frontend CLI");

console.log(
  magenta(
    "--------------------------------------------------------------------------------",
  ),
);

console.log(
  magenta(figlet.textSync("Frontend CLI", { horizontalLayout: "full" })),
);

console.log(
  magenta(
    "--------------------------------------------------------------------------------",
  ),
);

console.log(
  "Welcome to the Frontend CLI. This CLI will help you get started with your project.",
);

console.log("It will ask you a few questions to get you started.");

program.action(() => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "projectName",
        message: blue("What is the name of your project?"),
      },
      {
        type: "confirm",
        name: "typescript",
        message: "Do you want to use TypeScript?",
        default: true,
        transformer: (answer) => (answer ? "Yes" : "No"),
      },
      {
        type: "list",
        name: "framework",
        message: blue("What framework do you want to use?"),
        choices: [
          { name: blue("ReactJS"), value: "ReactJS" },
          { name: black("NextJS"), value: "NextJS" },
          { name: yellow("Astro"), value: "Astro" },
          { name: green("Vue"), value: "Vue" },
          { name: greenBright("Nuxt"), value: "Nuxt" },
          { name: red("Angular"), value: "Angular" },
        ],
      },
      {
        type: "checkbox",
        name: "libraries",
        message: blue("What libraries do you want to include?"),
        choices: [
          "react-router-dom",
          "react-query",
          "react-hook-form",
          "zod",
          "dayjs",
          "data-fns",
          "tempo",
        ],
        validate(value) {
          if (value.length < 1) {
            return "You must choose at least one library.";
          }
          return true;
        },
        when(answers) {
          return answers.framework.includes("ReactJS");
        },
      },
      {
        type: "list",
        name: "ui",
        message: blue("What UI library do you want to include?"),
        choices: ["shadcn/ui", "tailwind", "MUI", "Ant Design"],
        when(answers) {
          return answers.framework === "ReactJS";
        },
      },
    ])
    .then((answers) => {
      console.log(`Response: ${JSON.stringify(answers)}`);
      console.log(`Hey there, ${answers.projectName}!`);
      executor(answers);
    });
});

program.parse(process.argv);
