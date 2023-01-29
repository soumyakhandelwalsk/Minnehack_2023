import React from 'react'
import Navbar from "../components/Navbar.js";
import ProposalCard from '../components/ProposalCard.js';

function Community() {
  return (
    <>
      <Navbar />
      <main>
        <div className="relative pt-16 pb-4 flex content-center items-center justify-center">
        </div>
        <div className="container mx-auto">
          <ProposalCard />
          <ProposalCard />
          <ProposalCard />
        </div>
      </main>
    </>
  )
}

export default Community