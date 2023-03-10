import React from "react";
import Navbar from "../components/Navbar.js";
import ProposalCard from "../components/ProposalCard.js";

function Community() {
  let proposals = [
    {
      id: 1,
      causeTitle: "Allow UMN Class of 2023 to Walk at Graduation",
      description:
        "As students of the 2023 graduating class, we should be outraged by administrators' decision on the commencement ceremonies",
      imageURL:
        "https://images.unsplash.com/photo-1607013407627-6ee814329547?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    },
    {
      id: 2,
      causeTitle: "Save the Greendale Park",
      description:
        "We should not need to remove a pre-existing park when there's so much undeveloped land in the area that could be used for projects instead.",
      imageURL:
        "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: 3,
      causeTitle: "Increase funding at local hospitals for childhood cancer",
      description:
        "Parents shouldn't have financial hardship and deliver bad news to my daughter, neighbors, and friends. Let's raise the local funding for childhood cancer research from 4% to 8%",
      imageURL:
        "https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80",
    },
    {
      id: 4,
      causeTitle: "Stop sign at the intersection of Franklin and 8th.",
      description:
        "Too many almost accidents have occured at this intersection. There needs to be a proper system in place.",
      imageURL:
        "https://images.unsplash.com/photo-1572670014853-1d3a3f22b40f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    },

    {
      id: 5,
      causeTitle: "Change the library hours to close later in the evening.",
      description:
        "Current public library hours are from 10am to 3pm on weekdays. This means that no students or working people have a proper time to use its services.",
      imageURL:
        "https://images.unsplash.com/photo-1618707663064-2a2a2aa8f118?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
    },
  ];

  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-4 flex content-center items-center justify-center"></div>
        <div className="container mx-auto">
          {proposals.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              id={proposal.id}
              causeTitle={proposal.causeTitle}
              description={proposal.description}
              imageURL={proposal.imageURL}
              buttonText={"Vote"}
              urlPart={"/VoteInfo/"}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Community;
