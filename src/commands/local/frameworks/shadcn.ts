import * as path from "path";
import { updatedJsonFile } from "../../../utils/file";

export async function updateShadCnConfig(appName: string) {
  let rootPath = "";
  if (process.cwd().includes(appName)) {
    rootPath = path.resolve(process.cwd());
  } else {
    rootPath = path.resolve(process.cwd(), appName);
  }
  const data = {
    compilerOptions: {
      baseUrl: ".",
      paths: {
        "@/*": ["./src/*"],
      },
    },
  };

  // Update the tsconfig.json file
  await updatedJsonFile(path.join(rootPath, "tsconfig.json"), data);

  // Update the tsconfig.app.json file
  await updatedJsonFile(path.join(rootPath, "tsconfig.app.json"), data);
}
