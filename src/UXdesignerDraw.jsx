import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  UnorderedList,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react';

import { Button } from "react-bootstrap";

export default function UxDesigner() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
          <Button ref={btnRef} variant="outline-success" onClick={onOpen} >
            UX/UI designer
          </Button>
          <Drawer
            isOpen={isOpen}
            placement='right'
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent className="drawer">
              <DrawerCloseButton/>
                <Center marginTop='1%'>
                <Image    
                    objectFit='cover'
                    maxW='380px'
                    className="img-fluid rounded" // < notice how bootstrap class used inside Chakra Image for image responsiveness
                    src='https://www.keenesystems.com/hubfs/blog-images/ux-ui.jpg'
                    alt='graphic image of a ux wireframing'
                />
              </Center>
              
              <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
              margin='2%' >The Role of a UX/UI designer</DrawerHeader>

              <DrawerBody padding='2.5em' overflow={'auto'}>
                <Text>
                  <p>
                UX design stands for user experience design, while UI design stands for user interface design. Both are important facets of the custom software development process, and both involve working closely with users to create interfaces that are both effective and easy to use.
                    </p> 
                    <p>User interface design is all about how a web application looks and feels. It’s the part of the software design process that focuses on making sure that the user interface is both effective and easy to use. A good UI designer will consider things like color scheme, typography, and layout when creating a web user interface. An offshoot of UI design is accessibility design, which ensures that individuals with disabilities (such as those who cannot see or hear) can also use a web application.
                    </p>
                The UX design process typically involves the following steps:
                  <UnorderedList>
                    <ListItem>Research: The first step in the UX design process is to research the needs and goals of your users. This can be done through interviews, surveys, and focus groups. This is usually conducted by a seasoned business analyst.</ListItem>
                    <ListItem>Planning: Once you have a good understanding of your users, you can start planning the overall structure and navigation of the web application.</ListItem>
                    <ListItem>Design: The next step is to design the user interface. This is where you’ll focus on things like color scheme, typography, and layout. Mockups of the design are critical at this stage so stakeholders can see the designer’s vision.</ListItem>
                    <ListItem>Testing: Once the interface is designed, it’s important to test it out with real users. This will help you catch any errors or problems with the design.</ListItem>
                    <ListItem>Launch: Once the web application is finalized, it’s time to launch it!</ListItem>
                    <ListItem>Refinement: Seldom is a complex web application perfect right out of the gate. Actions that appear to be fine in testing may turn out to be quite tedious if done all day long every day. A user interface can be streamlined even more after receiving real world feedback from users.</ListItem>
                  </UnorderedList>
                  <p>Of course, this may be a little different if development proceeds under an Agile or DevOps methodology. Under these strategies of development, the UX designer may be called upon to make incremental changes between the design, testing, and launch steps. New and more active methodologies for software releases have made UX designers a critical and constant part of the process.</p>
                </Text>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
    </div>
  )
}