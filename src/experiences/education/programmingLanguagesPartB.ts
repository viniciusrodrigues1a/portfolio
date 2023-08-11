import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getProgrammingLanguagesPartBExperience: () => ExperienceProps =
  () => ({
    title: t("experience.education.programmingLanguagesPartBTitle"),
    formattedDate: t("experience.education.programmingLanguagesPartBDate"),
    description: t("experience.education.programmingLanguagesPartBDescription"),
  });
