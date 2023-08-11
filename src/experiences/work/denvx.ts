import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getDenvxExperience: () => ExperienceProps = () => ({
  title: t("experience.work.denvxRole"),
  formattedDate: t("experience.work.denvxDate"),
  company: t("experience.work.denvxCompany"),
  companyLink: "https://denvx.com/",
  description: t("experience.work.denvxDescription"),
});
