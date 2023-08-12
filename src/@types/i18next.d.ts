import "i18next";

import homeNamespace from "../../public/locales/pt-BR/home.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "home";
    resources: {
      home: typeof homeNamespace;
    };
  }
}
