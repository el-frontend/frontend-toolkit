import { cmd } from "./cmd";
import { executeLocalCommand } from "./localCmd";

export async function run(command: string, showOutput = true) {
  if (command.includes("localCmd")) {
    return await executeLocalCommand(command);
  } else {
    return await cmd(command, showOutput);
  }
}
