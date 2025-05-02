import { Layout } from "antd";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Outlet } from "react-router-dom";
import useBreakPoint from "../../hooks/useBreakPoint";
import LayoutDrawer from "../components/LayoutDrawer/LayoutDrawer";
import LayoutFooter from "../components/LayoutFooter/LayoutFooter";
import LayoutHeader from "../components/LayoutHeader/LayoutHeader";
import LayoutMenu from "../components/LayoutMenu/LayoutMenu";
import ResizableSidebar from "../utilities/ResizableSidebar";

enum SidebarWidth {
  EXPANDED = 256,
  COLLAPSED = 80,
  ZERO = 0,
}

const RootLayout: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [width, setWidth] = useState<SidebarWidth>(SidebarWidth.EXPANDED);
  const { mobile, tablet, desktop } = useBreakPoint();

  const handleCollapsed = useCallback(() => {
    setCollapsed((prev) => {
      setWidth(prev ? SidebarWidth.EXPANDED : SidebarWidth.COLLAPSED);
      return !prev;
    });
  }, []);

  const handleOpen = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    const shouldCollapse = !desktop;
    setCollapsed(shouldCollapse);
    setWidth(shouldCollapse ? SidebarWidth.COLLAPSED : SidebarWidth.EXPANDED);
  }, [desktop, mobile, tablet]);

  const marginLeft = useMemo(() => {
    if (desktop) return width;
    if (tablet) return width;
    if (mobile) return SidebarWidth.ZERO;
    return SidebarWidth.ZERO;
  }, [desktop, mobile, tablet, width]);

  return (
    <Layout hasSider style={{ minHeight: "100vh" }}>
      <Layout.Sider
        width={width}
        style={{
          position: "fixed",
          userSelect: "none",
          inset: "0 auto 0 0",
          zIndex: "auto",
          overflowY: "auto",
          scrollbarWidth: "thin",
          scrollBehavior: "smooth",
        }}
        breakpoint="lg"
        trigger={null}
        collapsedWidth={mobile ? SidebarWidth.ZERO : SidebarWidth.COLLAPSED}
        collapsible
        collapsed={collapsed}
      >
        <LayoutMenu collapsed={collapsed} tablet={tablet} />
        <LayoutDrawer
          open={open}
          setOpen={setOpen}
          siderWidth={SidebarWidth.EXPANDED}
          collapsed={collapsed}
        />
        {desktop && !collapsed && (
          <ResizableSidebar onResize={(width: number) => setWidth(width)} />
        )}
      </Layout.Sider>
      <Layout
        style={{
          marginLeft: marginLeft,
          transition: "margin-left 0.2s ease",
        }}
      >
        <LayoutHeader
          mobile={mobile}
          collapsed={collapsed}
          handleCollapsed={handleCollapsed}
          handleOpen={handleOpen}
        />

        <Layout.Content style={{ padding: "1rem" }}>
          <Outlet />
        </Layout.Content>

        <LayoutFooter />
      </Layout>
    </Layout>
  );
};

export default RootLayout;
