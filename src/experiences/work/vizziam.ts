import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getVizziamExperience: () => ExperienceProps = () => ({
  title: t("experience.work.vizziamRole"),
  formattedDate: t("experience.work.vizziamDate"),
  company: t("experience.work.vizziamCompany"),
  companyLink: "https://vizziam.com.br/eventos",
  description: t("experience.work.vizziamDescription"),
});
