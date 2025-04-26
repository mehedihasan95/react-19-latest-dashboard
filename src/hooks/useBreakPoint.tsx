import { Grid } from "antd";

export default function useBreakPoint() {
  const { xs, md, lg } = Grid.useBreakpoint();

  return { mobile: xs, tablet: md, desktop: lg };
}
