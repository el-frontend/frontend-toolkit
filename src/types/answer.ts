import { Framework } from "./frameworks";
import { Stylesheet } from "./global";
import { Library } from "./libraries";

export type Answer = {
  projectName: string;
  framework: Framework;
  libraries: Library[];
  ui: string;
  typescript: boolean;
  stylesheet: Stylesheet
  ssr: boolean;
};
