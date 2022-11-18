import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from '@chakra-ui/react';
export default function ProjectPlan(){
    return(
        <div>
            <br />
            <h3><b className="text-warning">Project Plan:</b> <br></br></h3>
            <p><b className="text-primary">Stage 1 Discovery :</b></p>
            <ol>
                <li>You must discuss your strengths and weaknesses and discuss how you will work
                together as a team. </li>
                <li>You must discuss all of the possible ways your group could have conflicts and
                discuss what you will do to overcome your conflicts as a team. </li>
                <li>You must make a plan </li>
            </ol>

            <p>
            Do you understand the challenge? What is being asked of you? What else do you need to
            know to get started? Who might you need to talk to? How will you work together as a team?
            How will you work together ? How will you plan? Now that you understand your problem and
            have more information, what will you do next? What sort of ideas would you like to try? What
            would benefit you as a learner?
            </p>
            <Accordion allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'green', color: 'white', fontSize: 'medium' }}>
                <Box flex='1' textAlign='left' padding= '.1em'>
                Answer
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className="bg-success p-3">
            It is a solo project, so I did discover some of my weakness and strengths as I have been doing this project. My streangth is I can style well using frontend libraries and I can make any site responsive with less effort preplaned. My weakness is I tend to spend too much time on frontend styling. <br /> <br />
            Only conflict I had with my self to keep up good time with busy week schedule and illness. I planned to fininsh this project in 1 week, But I fell ill with tonsilities and fever. So struggle to start the project as planned. <br /> <br />
            I had difficulties to understand the project because there is no UX design and no example of what to created. And the Pdf file that I have been given by CYF is for group mini project not solo. I called Cyf's regional mangager (Mariana) to understand what is expected from me. But she kept repeating that all instructions are in this pdf file. That made me even more confused because firstly its a group mini project brifing and secondly there is no UX design that I could follow.
            So I used my initiative and creativity to make an example website version of that pdf brief. I have applied some react libraries to make it nicer which is good practice for my technical side as I didn't use them before.
            </AccordionPanel>
            </AccordionItem>
            </Accordion> 
            <br />
            <p><b className="text-primary">Stage 2 Design & Develop - </b>
                 You now have some ideas you think may work. How do you
            decide the best one? Have you met all the requirements? How will you create an MVP?
            </p>
            <Accordion allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'green', color: 'white', fontSize: 'medium' }}>
                <Box flex='1' textAlign='left' padding= '.1em'>
                Answer
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className="bg-success p-3">
            A minimum viable product, or MVP, is a product with enough features to attract early-adopter customers and validate a product idea early in the product development cycle.
            I have used my creativity to UX desing, then developed it with React and its libraries, react is the best and fasted programming language to create a site. This version is my imaginition of my MVP.
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <br />
            <p><b className="text-primary">Stage 3 Develop/ test - </b>
                 You now have some ideas you think may work. How do you decide
            the best one? Have you met all the requirements? How will you create an MVP?
            </p>
            <Accordion allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'green', color: 'white', fontSize: 'medium' }}>
                <Box flex='1' textAlign='left' padding= '.1em'>
                Answer
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className="bg-success p-3">
            I have met all requirements and done tests using lighthouse, for bugs and post upload test on Github. tests. After turning my imaginition in to reality I have tested this app on other devices to test its responsiveness and it works perfectly. But I will welcome any new idea's and productive critisism.
             MVP is delivered.
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <br />
            <p><b className="text-primary">Stage 4 Delivery - </b>
                 You will also need to prepare a presentation of your . How will you structure your
            presentations? Who will do what? How will you ensure your team’s idea will be chosen?
            </p> 
            <Accordion allowMultiple>
            <AccordionItem>
            <h2>
            <AccordionButton _first={{fontSize: '1rem'}} _expanded={{ bg: 'green', color: 'white', fontSize: 'medium' }}>
                <Box flex='1' textAlign='left' padding= '.1em'>
                Answer
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel className="bg-success p-3">
            I will create a google slide presentation, but things will be repetative becuase all research and tasks are here in this webpage.
            </AccordionPanel>
            </AccordionItem>
            </Accordion>
            <br />
            <hr style={{backgroundColor:'red'}} />
            <p>You have your plan and you are ready to present to a small group of interested people. <br /> <br />
            Retrospective on the project - you will have some time to discuss what your experience was
            like during the project.</p>
        </div>
    )
}