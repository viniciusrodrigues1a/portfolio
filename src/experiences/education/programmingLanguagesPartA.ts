import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getProgrammingLanguagesPartAExperience: () => ExperienceProps =
  () => ({
    title: t("experience.education.programmingLanguagesPartATitle"),
    formattedDate: t("experience.education.programmingLanguagesPartADate"),
    description: t("experience.education.programmingLanguagesPartADescription"),
  });
