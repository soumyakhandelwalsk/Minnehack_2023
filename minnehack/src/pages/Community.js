import React from 'react'
import Navbar from "../components/Navbar.js";
import ProposalCard from '../components/ProposalCard.js';

function Community() {
  let proposals = [
    {
      id: 1,
      causeTitle: "Allow UMN Class of 2023 to Walk at Graduation",
      description: "As students of the 2023 graduating class, we should be outraged by administrators' decision on the commencement ceremonies",
      imageURL: "",
    },
    {
      id: 2,
      causeTitle: "Increase federal funding for childhood cancer",
      description: " Parents shouldn't have financial hardship and deliver bad news to my daughter, neighbors, and friends. Let's raise the federal funding for childhood cancer research from 4% to 8%",
      imageURL: "",
    },
    {
      id: 3,
      causeTitle: "Casue3",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    },
    {
      id: 4,
      causeTitle: "Cause4",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequatLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      imageURL: "",
    },
    {
      id: 5,
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

export default Community