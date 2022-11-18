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

export default function Backend() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button ref={btnRef} variant="outline-success" onClick={onOpen} >
        Backend web developer
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
                src='http://ddi-dev.com/uploads/media/news/0001/01/f2da1c598e2ff9bc29b229773a189d33d38e0252.jpeg'
                alt='graphic image of a backend programming big ice under the sea water'
            />
           </Center>
           
          <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
          margin='2%' >The Role of a Back-End Developer</DrawerHeader>

          <DrawerBody padding='2.5em' overflow={'auto'}>
            <Text>
               <p>
            The behind-the-scenes functionality of a website is referred to as the 'back-end'. It is a combination of technology and programming that powers a website, consisting of three parts that a user never sees: a server, an application, and a database.

            The back-end runs a website — the user doesn't see it or interact with it, but it is always running in the background, delivering functionality and a desktop-like experience. Back-end developers play a critical role in web development teams, and make sure that data or services requested by the front-end system or software are delivered.
                </p> 

            What does a back-end developer do? Here are the main responsibilities:
            <UnorderedList>
              <ListItem>Database creation, integration, and management</ListItem>
              <ListItem>Back-end frameworks to build server-side software</ListItem>
              <ListItem>Cloud computing integration, Server-side programming</ListItem>
              <ListItem>Content management system development, deployment, and maintenance</ListItem>
              <ListItem>Security settings and hack prevents</ListItem>
              <ListItem>Reporting — generating analytics and statistics</ListItem>
              <ListItem>Backing up and restoring technologies for a website's files and DB</ListItem>
            </UnorderedList>
                <p>Even though backend developers work 'behind the scenes', their contribution to a web application's success is decisive. To provide a functional and logical social network, website, app, marketplace, etc. the developer must establish good communication with all the web development team members, from the UX/UI designers to the frontend developers. Moreover, understanding the clients' and stakeholders' needs and wants can help create a successful system architecture and provide valuable solutions.</p>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}