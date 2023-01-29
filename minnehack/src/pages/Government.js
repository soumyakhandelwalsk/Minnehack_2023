import React from 'react'
import Navbar from "../components/Navbar.js";
import ProposalCard from '../components/ProposalCard.js';

function Government() {

  let proposals = [
    {
      id: 11,
      causeTitle: "Drain Lake Froghorn to make way for community development project.",
      description: "Divert the lake's water sources to nearby Lake Grenjy so the eyesore can finally be cleaned and drained. Will be replaced by community rec center.",
      imageURL: "https://images.unsplash.com/photo-1558371274-c34e2d371073?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
    {
      id: 2,
      causeTitle: "Improving recycling program ",
      description: "Implementing a recycling program in order to reduce the amount of waste in landfills and promote environmental sustainability in Minneapolis, Minnesota",
      imageURL: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVjeWNsaW5nfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      causeTitle: "Afforable Housing Programs",
      description: "Developing affordable housing programs to address the issue of homelessness and lack of affordable housing for our local community in St.Paul, Minnesota",
      imageURL: "https://images.unsplash.com/photo-1513880989635-6eb491ce7f5b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aG91c2luZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      causeTitle: "Unblocking public transportation",
      description: "Increasing funding for public transportation to improve accessibility and reduce traffic congestion to build new lightrail routes, bus stops, and roads in the state of Minnesota",
      imageURL: "https://media.istockphoto.com/id/1395217190/photo/a-country-road-evening-blur-background.jpg?b=1&s=170667a&w=0&k=20&c=1Zzf4hWnO9NZAMpT74Zv6VxWjZkioj_srKuDH61xjoY=",
    },
    {
      id: 5,
      causeTitle: "Implement additional community gardens",
      description: "Developing community gardens and urban agriculture projects to promote healthy eating and improve access to fresh fruits and vegetables for low-income residents",
      imageURL: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY3ljbGluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
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