import { Framework } from "./frameworks";
import { Library } from "./libraries";

export type Answer = {
  projectName: string;
  framework: Framework;
  libraries: Library[];
  ui: string;
  typescript: boolean;
};
