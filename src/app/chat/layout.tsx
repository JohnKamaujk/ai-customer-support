"use client";

import { useState } from "react";
import { Box, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SidebarDrawer from "../../components/Drawer";
import AuthGuard from "@/components/AuthGuard";

const ChatLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <AuthGuard>
      <Box>
        <IconButton
          size="large"
          edge="start"
          color="primary"
          aria-label="logo"
          onClick={toggleDrawer}
        >
          <MenuIcon />
        </IconButton>
        <SidebarDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
        <main>{children}</main>
      </Box>
    </AuthGuard>
  );
};

export default ChatLayout;
