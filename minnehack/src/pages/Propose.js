import React from "react";
import Navbar from "../components/Navbar.js";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#8e1600",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#0c3823",
    },
  },
});

function Propose() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container maxWidth="sm">
        <Paper
          sx={{
            justifyContent: "center",
            padding: "10%",
          }}
        >
          <Box sx={{ width: "100%", maxWidth: 500, textAlign: "center" }}>
            <Typography variant="h4" gutterBottom>
              Create a proposal
            </Typography>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div>
              <TextField
                required
                id="outlined-required"
                label="Proposal Title"
                defaultValue=""
              />
            </div>
            <div>
              <Button
                sx={{ m: 1 }}
                variant="outlined"
                component="label"
                endIcon={<PhotoCamera />}
              >
                Upload
                <input hidden accept="image/*" multiple type="file" />
              </Button>
            </div>
            <div>
              <TextField
                id="outlined-multiline-static"
                label="Background/Details"
                multiline
                rows={4}
                defaultValue=""
              />
            </div>
            <div>
              <Button variant="contained" sx={{ m: 1 }}>
                Submit
              </Button>
            </div>
          </Box>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Propose;
