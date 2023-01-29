import React from "react";
import Navbar from "../components/Navbar.js";
import ProposalCard from "../components/ProposalCard.js";

function Victories() {
  let proposals = [
    {
      id: 6,
      causeTitle:
        "Drain Lake Froghorn to make way for community development project.",
      description:
        "Divert the lake's water sources to nearby Lake Grenjy so the eyesore can finally be cleaned and drained. Will be replaced by community rec center.",
      imageURL:
        "https://images.unsplash.com/photo-1558371274-c34e2d371073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
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
              buttonText={"Results"}
              urlPart={"/ResultInfo/"}
            />
          ))}
        </div>
      </main>
    </>
  );
}

export default Victories;
