import { Framework } from "./frameworks";
import { Stylesheet } from "./global";
import { Library } from "./libraries";
import { UIFrameworks } from "./ui";

export type Answer = {
  projectName: string;
  framework: Framework;
  libraries: Library[];
  ui: UIFrameworks;
  typescript: boolean;
  stylesheet: Stylesheet
  ssr: boolean;
};
