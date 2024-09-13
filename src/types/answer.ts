import { Framework } from "./frameworks";

export type Answer = {
  projectName: string;
  framework: Framework;
  libraries: string[];
  ui: string;
  typescript: boolean;
};
