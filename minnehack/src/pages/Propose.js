import React from "react";
import Navbar from "../components/Navbar.js";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function Propose() {
  return (
    <>
      {/* <Navbar transparent /> */}
      {/* <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"></div>
        <div
          className="absolute top-0 w-full h-full bg-center bg-cover"
          style={{
            backgroundImage: "url('')",
          }}
        >
          <span
            id="blackOverlay"
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div>Proposal</div>
      </main> */}
      <Paper>
        <Box sx={{ width: "100%", maxWidth: 500 }}>
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
              label="Required"
              defaultValue="Hello World"
            />
          </div>
          <div>
            <Button
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
              label="Multiline"
              multiline
              rows={4}
              defaultValue="Default Value"
            />
          </div>
          <div>
            <Button variant="contained">Submit</Button>
          </div>
        </Box>
      </Paper>
    </>
  );
}

export default Propose;
