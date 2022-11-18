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

export default function Frontend() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button ref={btnRef} variant="outline-success" onClick={onOpen} >
        Frontend web developer
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
                src='https://img.freepik.com/free-vector/frontend-developer-typographic-header-website-interface-design-improvement-web-page-programming-coding-testing-it-profession-isolated-flat-vector-illustration_613284-304.jpg?w=2000'
                alt='graphic image of a programming languages frontend developer'
            />
           </Center>
           
          <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
          margin='2%'>The Role of a Front-End Developer</DrawerHeader>

          <DrawerBody padding='2.5em' overflow={'auto'}>
            <Text>
               <p>
A front-end developer ensures your users can seamlessly interact with your product, whether you’re in software development, mobile app development, or web development.
                </p> 

What does a front-end developer do? Here are the main responsibilities:
<UnorderedList>
  <ListItem>In cooperation with a web designer, turning design concepts into reality</ListItem>
  <ListItem>Creating and maintaining your UI/UX</ListItem>
  <ListItem>Implementing design changes</ListItem>
  <ListItem>Developing smooth user interactions</ListItem>
  <ListItem>Managing your app workflow</ListItem>
  <ListItem>Testing for usability and handling bugs</ListItem>
  <ListItem>Focus on clean and safe coding practices</ListItem>
  <ListItem>Website optimization due to SEO principles</ListItem>
</UnorderedList>
            </Text>
            <p>The majority of front end developers work as a part of a much bigger team. This is because developing and delivering a website or application as a sole developer is a time-consuming and challenging task. When developers work together, it can provide significant advantages. Teamwork includes designating projects to individuals best suited to the task and ensuring that workloads remain balanced throughout the duration of the project. Teamwork ensures that the front end of the product runs effectively and assures client satisfaction.</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}