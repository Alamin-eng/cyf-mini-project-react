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

export default function ProductManager() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button ref={btnRef} variant="outline-success" onClick={onOpen} >
        Product Manager
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
                src='https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/07/product-manager-data-science.jpeg'
                alt='graphic image of a product manager'
            />
           </Center>
           
          <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
          margin='2%' >The Role of a Product manager </DrawerHeader>

          <DrawerBody padding='2.5em' overflow={'auto'}>
            <Text>
               <p>
          A product manager is the person who identifies the customer need and the larger business objectives that a product or feature will fulfill, articulates what success looks like for a product, and rallies a team to turn that vision into a reality. 
                </p> 
    
          The key responsibility of a software product manager is to successfully represent the software development team's interests to the stakeholders and customers. In addition, the software product manager is responsible for:
          <UnorderedList>
              <ListItem>Translating business goals into specific software requirements </ListItem>
              <ListItem>Prioritizing software features based on market need analyses and company strategies</ListItem>
              <ListItem>Managing software project scope by making tradeoffs between competing software requirements, such as time vs. cost and software security vs. speed </ListItem>
              <ListItem>Prioritizing feature requests from software development teams</ListItem>
              <ListItem>Crystallizing the product vision and working closely with software engineers/the technical team to define its specifications</ListItem>
              <ListItem>Tracking progress against plan and resolving any variances as soon as they are identified</ListItem>
              <ListItem>Making tradeoffs between features, schedule, and costs based on their relationship to business goals, company policies, software architecture constraints, and software development team capabilities</ListItem>
          </UnorderedList>
            <p>The software product manager is a critical position in an organization. They are responsible for managing how customers use and interact with the product, including UX design, marketing strategy, customer insights research, pricing decisions, and more.</p>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}