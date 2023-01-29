import React from "react";
import Navbar from "../components/Navbar.js";
import ResultInfoPage from "../components/ResultsInfo.js";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useParams } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      // red
      main: "#8e1600",
    },
    secondary: {
      // green
      main: "#0c3823",
    },
  },
});

function ResultInfo() {
  const { id } = useParams();
  let proposals = {
    6: {
      causeTitle:
        "Drain Lake Froghorn to make way for community development project.",
      description:
        "Divert the lake's water sources to nearby Lake Grenjy so the eyesore can finally be cleaned and drained. Will be replaced by community rec center.",
      imageURL: "../images/greendale-park.jpg",
    },
  };

  const current_proposal = proposals[id];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="container mx-auto">
        {
          <ResultInfoPage
            key={current_proposal.id}
            causeTitle={current_proposal.causeTitle}
            longDescription={current_proposal.description}
            imageURL={current_proposal.imageURL}
            comments={null}
          />
        }
      </div>
    </ThemeProvider>
  );
}

export default ResultInfo;
