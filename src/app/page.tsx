"use client";

import { Box, Button, Typography, Container } from "@mui/material";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/signin");
  };

  const handleSignup = () => {
    router.push("/signup");
  };

  return (
    <Container
      maxWidth={false}
      disableGutters
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        bgcolor: "var(--primary-bg)",
        p: 3,
      }}
    >
      <Typography
        variant="h3"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: "bold",
          color: "text.primary",
        }}
      >
        Welcome to Headstarter!
      </Typography>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          mb: 4,
          color: "text.secondary",
        }}
      >
        Your AI customer support assistant is here to help.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          sx={{
            width: 150,
            fontSize: "16px",
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Login
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSignup}
          sx={{
            width: 150,
            fontSize: "16px",
            py: 1.5,
            borderRadius: 2,
          }}
        >
          Sign Up
        </Button>
      </Box>
    </Container>
  );
}
