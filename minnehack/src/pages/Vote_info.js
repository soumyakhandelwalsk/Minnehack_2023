import React from "react";
import Navbar from "../components/Navbar.js";
import ProposalInfo from "../components/ProposalInfo.js";
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

function VoteInfo() {
  const { id } = useParams();
  let proposals = {
    1: {
      causeTitle: "Allow UMN Class of 2023 to Walk at Graduation",
      description:
        "As students of the 2023 graduating class, we should be outraged by administrators' decision on the commencement ceremonies",
      imageURL:
        "https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    },
    2: {
      causeTitle: "Save the Greendale Park",
      description:
        "We should not need to remove a pre-existing park when there's so much undeveloped land in the area that could be used for projects instead.",
      imageURL:
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    3: {
      causeTitle: "Increase funding at local hospitals for childhood cancer",
      description:
        "Parents shouldn't have financial hardship and deliver bad news to my daughter, neighbors, and friends. Let's raise the local funding for childhood cancer research from 4% to 8%",
      imageURL:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    4: {
      causeTitle: "Stop sign at the intersection of Franklin and 8th.",
      description:
        "Too many almost accidents have occured at this intersection. There needs to be a proper system in place.",
      imageURL:
        "https://images.unsplash.com/photo-1572670014853-1d3a3f22b40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    5: {
      causeTitle: "Change the library hours to close later in the evening.",
      description:
        "Current public library hours are from 10am to 3pm on weekdays. This means that no students or working people have a proper time to use its services.",
      imageURL:
        "https://images.unsplash.com/photo-1618707663064-2a2a2aa8f118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
    12: {
      causeTitle:
        "Drain Lake Froghorn to make way for community development project.",
      description:
        "Divert the lake's water sources to nearby Lake Grenjy so the eyesore can finally be cleaned and drained. Will be replaced by community rec center.",
      imageURL:
        "https://images.unsplash.com/photo-1558371274-c34e2d371073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    22: {
      causeTitle: "Improving recycling program ",
      description:
        "Implementing a recycling program in order to reduce the amount of waste in landfills and promote environmental sustainability in Minneapolis, Minnesota",
      imageURL:
        "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjeWNsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    32: {
      causeTitle: "Afforable Housing Programs",
      description:
        "Developing affordable housing programs to address the issue of homelessness and lack of affordable housing for our local community in St.Paul, Minnesota",
      imageURL:
        "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    42: {
      causeTitle: "Unblocking public transportation",
      description:
        "Increasing funding for public transportation to improve accessibility and reduce traffic congestion to build new lightrail routes, bus stops, and roads in the state of Minnesota",
      imageURL:
        "https://media.istockphoto.com/id/1395217190/photo/a-country-road-evening-blur-background.jpg?b=1&s=170667a&w=0&k=20&c=1Zzf4hWnO9NZAMpT74Zv6VxWjZkioj_srKuDH61xjoY=",
    },
    52: {
      causeTitle: "Implement additional community gardens",
      description:
        "Developing community gardens and urban agriculture projects to promote healthy eating and improve access to fresh fruits and vegetables for low-income residents",
      imageURL:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
  };

  const current_proposal = proposals[id];

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <div className="container mx-auto">
        {
          <ProposalInfo
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

export default VoteInfo;
