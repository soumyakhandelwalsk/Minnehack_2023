import React from 'react'
import Navbar from "../components/Navbar.js";
import ProposalCard from '../components/ProposalCard.js';

function Government() {

  let proposals = [
    {
      id: 11,
      causeTitle: "Drain Lake Froghorn to make way for community development project.",
      description: "Divert the lake's water sources to nearby Lake Grenjy so the eyesore can finally be cleaned and drained. Will be replaced by community rec center.",
      imageURL: "../images/greendale-park.jpg",
    },
    {
      id: 22,
      causeTitle: "Cause2",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    },
    {
      id: 32,
      causeTitle: "Casue3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    },
    {
      id: 42,
      causeTitle: "Cause4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    },
    {
      id: 52,
      causeTitle: "Cause5",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    }
  ]

  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-4 flex content-center items-center justify-center">
        </div>
        <div className="container mx-auto">
          {
            proposals.map(proposal => (
              <ProposalCard
                key={proposal.id}
                id={proposal.id}
                causeTitle={proposal.causeTitle}
                description={proposal.description}
                imageURL={proposal.imageURL}
              />
            ))
          }
        </div>
      </main>
    </>
  )
}

export default Government