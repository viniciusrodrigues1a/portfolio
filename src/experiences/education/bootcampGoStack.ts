import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getBootcampGoStackExperience: () => ExperienceProps = () => ({
  title: t("experience.education.bootcampGoStackTitle"),
  formattedDate: t("experience.education.bootcampGoStackDate"),
  description: t("experience.education.bootcampGoStackDescription"),
});
