import "i18next";

import rootNamespace from "../../public/locales/pt-BR/root.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "root";
    resources: {
      root: typeof rootNamespace;
    };
  }
}
