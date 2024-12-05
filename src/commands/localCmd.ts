// the command defined must be the next
// localCmd <command> <args>
// Example: localCmd tailwind-config <appName> <framework>

import { Framework } from "../types/frameworks";
import { updateShadCnConfig } from "./local/frameworks/shadcn";
import { updateTailwindConfig } from "./local/frameworks/tailwind";

export const executeLocalCommand = async (command: string) => {
  const [, cmdVariant, ...rest] = command.split(" ");

  switch (cmdVariant) {
    case "tailwind-config": {
      const [appName, framework] = rest;
      await updateTailwindConfig(appName, framework as Framework);
      break;
    }
    case "shadcn-config": {
      const [appName] = rest;
      await updateShadCnConfig(appName);
      break;
    }
  }
};
