import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getPython3Experience: () => ExperienceProps = () => ({
  title: t("experience.education.python3Title"),
  formattedDate: t("experience.education.python3Date"),
  description: t("experience.education.python3Description"),
});
