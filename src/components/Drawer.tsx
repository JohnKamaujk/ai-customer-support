import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Button,
  Typography,
} from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

const SidebarDrawer = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      sx={{ width: 300}}
      PaperProps={{ sx: { width: 300 } }}
    >
      <List>
        <ListItem>
          <ListItemText
            primary={
              <Typography variant="h6" fontWeight="bold" color="primary">
                Chat
              </Typography>
            }
          />
        </ListItem>
        <ListItem>
          <Button
            onClick={handleSignOut}
            variant="contained"
            color="primary"
            sx={{ fontWeight: "bold", textTransform: "uppercase" }}
          >
            Sign Out
          </Button>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidebarDrawer;
