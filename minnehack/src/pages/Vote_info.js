import React from 'react'
import Navbar from "../components/Navbar.js";
import ProposalInfo from '../components/ProposalInfo.js';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useParams } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      // red
      main: '#8e1600',
    },
    secondary: {
      // green
      main: '#0c3823',
    },
  },
});

function VoteInfo() {
  const { id } = useParams();
  console.log("!!!!!!", id)
  let proposals = [
    {
      id: 1,
      causeTitle: "Allow UMN Class of 2023 to Walk at Graduation",
      description: "As students of the 2023 graduating class, we should be outraged by administrators' decision on the commencement ceremonies",
      imageURL: "https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    },
    {
      id: 2,
      causeTitle: "Save the Greendale Park",
      description: "We should not need to remove a pre-existing park when there's so much undeveloped land in the area that could be used for projects instead.",
      imageURL: "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      causeTitle: "Increase funding at local hospitals for childhood cancer",
      description: "Parents shouldn't have financial hardship and deliver bad news to my daughter, neighbors, and friends. Let's raise the local funding for childhood cancer research from 4% to 8%",
      imageURL: "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 4,
      causeTitle: "Stop sign at the intersection of Franklin and 8th.",
      description: "Too many almost accidents have occured at this intersection. There needs to be a proper system in place.",
      imageURL: "https://images.unsplash.com/photo-1572670014853-1d3a3f22b40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },
    
    {
      id: 5,
      causeTitle: "Cause5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    }
  ]

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
  )
}

export default VoteInfo;