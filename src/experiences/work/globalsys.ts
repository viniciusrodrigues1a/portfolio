import { t } from "i18next";
import type { ExperienceProps } from "../../components/Experience/types";

export const getGlobalsysExperience: () => ExperienceProps = () => ({
  title: t("experience.work.globalsysRole"),
  formattedDate: t("experience.work.globalsysDate"),
  company: t("experience.work.globalsysCompany"),
  companyLink: "https://www.linkedin.com/company/soumaisglobalsys/",
  description: t("experience.work.globalsysDescription"),
});
