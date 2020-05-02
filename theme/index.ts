import { theme } from "@chakra-ui/core";
import breakpoints from "./breakpoints";
import space from "./spaces";
export default {
  ...theme,
  breakpoints,
  space,
  fonts: {
    body: "system-ui, sans-serif",
    heading: "sans-serif, serif",
    mono: "Menlo, monospace",
  },
};
