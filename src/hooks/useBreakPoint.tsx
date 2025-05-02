import { Grid } from "antd";

export default function useBreakpoint() {
  const { xs, sm, md, lg } = Grid.useBreakpoint();

  return {
    mobile: Boolean(xs),
    tablet: Boolean(sm || md),
    desktop: Boolean(lg),
  };
}
