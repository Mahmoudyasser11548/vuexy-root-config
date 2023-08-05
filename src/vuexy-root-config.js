import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@navbar/vuexy-navbar",
  app: () => System.import("@navbar/vuexy-navbar"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
  timeout: 10000,
});
