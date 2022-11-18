import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box,
} from '@chakra-ui/react';
import { AddIcon, MinusIcon } from '@chakra-ui/icons';

export default function CollaborativeTask(){
    return (
    <div className="collaborativeTask">
            <p>
                <b className="text-warning">Collaborative task :</b>
            </p>
            <div className="border border-danger mb-2 p-2">
                <p>In small groups your challenge is to collaborate and work on a product and pitch your
                product to a fictional client after you build it.</p>

                <Accordion allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                <>
                <h2>
                <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'tomato', color: 'white', fontSize: 'medium' }}>
                    
                    <Box flex='1' textAlign='left' padding= '.1em'>
                    Answer
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel className="bg-info p-3">
                I did this mini project by myself, so I didn't have the collaborative oppertunity. I did collaborate with my regional manager from CYF to confirm what is expected from me in this mini project.
                </AccordionPanel>
                </>
                    )}
                </AccordionItem>
                </Accordion>
                </div>

                <div className="border border-danger mb-2 p-2">
                        <p>You must collaborate with your team on a simple website with no back end. Working
                together you will build a minimal viable product (MVP).</p>
                <Accordion allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                <>
                <h2>
                <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'tomato', color: 'white', fontSize: 'medium' }}>
                    
                    <Box flex='1' textAlign='left' padding= '.1em'>
                    Answer
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel className="bg-info p-3">
                This project used no Backend database. A minimum viable product, or MVP, is a product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle. The MVP is delivered.
                </AccordionPanel>
            
                </>)}
                </AccordionItem>
                </Accordion>
                </div>
                <div className="border border-danger mb-2 p-2">
                    <p>Your product must have a positive impact in the world or solve a global challenge, for
                example you might choose to build a website that provides information on how to grow your
                own food.</p>
                <Accordion allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                <>
                <h2>
                <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'tomato', color: 'white', fontSize: 'medium' }}>
                    
                    <Box flex='1' textAlign='left' padding= '.1em'>
                    Answer
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel className="bg-info p-3">
                I was little bit confused about what website to make that would have a possitive impact in the world. I could have gone for 'how to grow your own vegitable' type of site. Then I thought why not re-create an example version of mini project. Because when I asked my regional manager (Mariana) what she expected me to create and is there an example of what how should I create it, like UX design or any other example, but she couldn't show me an example version of this mini project. So I re-created an example version with possible answers. I belive this product will have positive impact on CYF students.
                </AccordionPanel>
                </>)}
                </AccordionItem>
                </Accordion>
                </div>      
                <div className="border border-danger mb-2 p-2">
                    <p>Before you get started with your project you will need to decide as a group what roles you
                will take up. You will work together to allocate roles to each other based on your strengths
                and development areas.</p>
                <Accordion allowMultiple>
                <AccordionItem>
                {({ isExpanded }) => (
                <>
                <h2>
                <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'tomato', color: 'white', fontSize: 'medium' }}>
                    
                    <Box flex='1' textAlign='left' padding= '.1em'>
                    Answer
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
                <AccordionPanel className="bg-info p-3">
                Not applicable to me as I did solo project.
                </AccordionPanel>
                </>)}
                </AccordionItem>
                </Accordion>
        </div> 

        <div className="border border-danger mb-2 p-2">
            <p>Once you have built your product as a group, you will need to make a group presentation
        and discuss how the roles you have researched will contribute to the product. I.e a UX/UI
        designer would think about how a user would interact with the product or the back end
        developer would work with the data.</p>
        <Accordion allowMultiple>
        <AccordionItem>
                {({ isExpanded }) => (
                <>
                <h2>
                <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'tomato', color: 'white', fontSize: 'medium' }}>
                    
                    <Box flex='1' textAlign='left' padding= '.1em'>
                    Answer
                    </Box>
                    {isExpanded ? (
                    <MinusIcon fontSize='12px' />
                    ) : (
                    <AddIcon fontSize='12px' />
                    )}
                </AccordionButton>
                </h2>
            <AccordionPanel className="bg-info p-3">
            I will make a seperate google slide of how each roles of software development contribute to the product. But things will be repetative becuase all research and tasks are here in this webpage 
            </AccordionPanel>
                </>)}
                </AccordionItem>
                </Accordion>
        </div>  
        <div className="mt-4">
             <p>You will have roughly 12 hours to complete this project. You can decide to do this over 4
            weeks, 2 weeks or 1 week. <br></br> <br></br>
            Stage 1 Discovery and team planning <br></br>
            Stage 2 Product Development <br></br>
            Stage 3 Product testing <br></br>
            Stage 4 Presentation preparation <br></br>
            </p>
            <p className="p-2 border border-info rounded">All of the above stages explained in details in Project plan section below</p>
            <br />
            
            <b className="text-primary">Requirements :</b> <br></br>
        <p>
            Groups will be made up of trainees with : <br></br>
            A mix of technical skills/levels <br></br>
            At least 1 native English speaker <br></br>
            A mix of genders <br></br>
            Groups can be max size of 5 <br></br>
            Tech and PD support are available for max 2 hours during this project <br></br>
            <br></br>

            <b className="text-primary">Things to consider :</b> <br></br>
            How will you communicate as a group? <br></br>
            How will you plan as a group? <br></br>
            How will you assign technical tasks ? <br></br>
            How will you manage conflict? <br></br>
            How will you present your pitch? <br></br>
            How will you research your role? <br></br>
            How will you allocate enough time ? <br></br>
        </p>
        </div>    
    </div>
    )
}