import { Library } from "../types/libraries";

export const librariesMap: Record<Library, { dependencies: Array<string> }> = {
  "react-router-dom": {
    dependencies: ["react-router-dom"],
  },
  "react-query": {
    dependencies: ["@tanstack/react-query"],
  },
  "react-hook-form": {
    dependencies: ["react-hook-form"],
  },
  zod: {
    dependencies: ["zod"],
  },
  dayjs: {
    dependencies: ["dayjs"],
  },
  "data-fns": {
    dependencies: ["data-fns"],
  },
  tempo: {
    dependencies: ["tempo"],
  },
};

export function getDependencies(library: Library) {
  return librariesMap[library].dependencies;
}


export function generateInstallCommand(dependencies: Array<Library>) {
  return `npm install ${dependencies.map(getDependencies).join(" ")}`;
}
