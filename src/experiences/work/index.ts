import { getDenvxExperience } from "./denvx";
import { getGlobalsysExperience } from "./globalsys";
import { getVizziamExperience } from "./vizziam";

export const getWorkExperiences = () => [
  getGlobalsysExperience(),
  getVizziamExperience(),
  getDenvxExperience(),
];
