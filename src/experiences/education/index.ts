import { getBootcampGoStackExperience } from "./bootcampGoStack";
import { getProgrammingLanguagesPartAExperience } from "./programmingLanguagesPartA";
import { getProgrammingLanguagesPartBExperience } from "./programmingLanguagesPartB";
import { getPython3Experience } from "./python3";

export const getEducationalExperiences = () => [
  getProgrammingLanguagesPartAExperience(),
  getProgrammingLanguagesPartBExperience(),
  getBootcampGoStackExperience(),
  getPython3Experience(),
];
