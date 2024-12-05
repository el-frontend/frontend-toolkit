import * as fs from "fs";
import * as path from "path";
import { Framework } from "../../../types/frameworks";

export async function updateTailwindConfig(
  appName: string,
  framework: Framework,
) {
  let rootPath = "";
  if (process.cwd().includes(appName)) {
    rootPath = path.resolve(process.cwd());
  } else {
    rootPath = path.resolve(process.cwd(), appName);
  }

  // Get the tailwind.config.js file path
  const configPath = path.resolve(rootPath, `tailwind.config.js`);
  console.log(configPath);
  if (!fs.existsSync(configPath)) {
    throw new Error(`File not found: ${configPath}`);
  }

  try {
    // Import the configPath json and add the content key
    const configText = await fs.promises.readFile(configPath, "utf8");
    const config = configText.replace(
      /content: \[\]/,
      'content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,mdx}"]',
    );

    // Write the updated config back to the file
    await fs.promises.writeFile(configPath, config, "utf8");
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`Failed to import config: ${error.message}`);
    } else {
      throw new Error(`Failed to import config: ${String(error)}`);
    }
  }

  // Update the css file to import tailwindcss
  let cssPath = "";
  if (framework === "ReactJS") {
    cssPath = path.resolve(rootPath, `src/index.css`);
  } else if (framework === "NextJS") {
    cssPath = path.resolve(rootPath, `src/globals.css`);
  } else {
    throw new Error(`Framework not supported: ${framework}`);
  }

  // Tailwind directives to add
  const tailwindDirectives = `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n`;

  try {
    // Read the existing content of the CSS file
    const data = await fs.promises.readFile(cssPath, "utf8");

    // Combine Tailwind directives with the existing content
    const updatedContent = `${tailwindDirectives}${data}`;

    // Write the updated content back to the file
    await fs.promises.writeFile(cssPath, updatedContent, "utf8");
    console.log("Tailwind directives added successfully!");
  } catch (err) {
    console.error("Error processing file:", err);
  }
}
