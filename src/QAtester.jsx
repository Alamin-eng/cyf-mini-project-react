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

export default function Qatester() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button ref={btnRef} variant="outline-success" onClick={onOpen} >
        QA Tester
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
                src='https://blog.bydrec.com/hubfs/3%20Benefits%20of%20Outsourcing%20the%20QA%20and%20Testing%20of%20Your%20New%20Programming%20Software.jpg'
                alt='graphic image of a quality assurance tester'
            />
           </Center>
           
          <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
          margin='2%' >The Role of a Quality Assurance tester </DrawerHeader>

          <DrawerBody padding='2.5em' overflow={'auto'}>
            <Text>
               <p>
            Testing is typically considered the last step of an SDLC before the software is finally deployed to production. Before doing so, the software needs to be tested to ensure that it is functional, behaves as expected, does not contain security vulnerabilities, and meets business requirements. Quality Assurance Leads or Software Testers are responsible for testing the application through multiple stages of the software's lifecycle with the intent of finding failures and verifying that the product is fit to use. 

            Along with the functional aspect, some other aspects are also included in the testing phase which includes the response time of the application, portability of the application to make sure the application can be deployed seamlessly on different platforms, along with testing the efficiency and ability of the application to work fine under exceptional circumstances. 
                </p> 
    
            Some common responsibilities of a QA Assurance Lead/Tester include:
            <UnorderedList>
                <ListItem>Reviewing requirements to perform impact analysis

            </ListItem>
                <ListItem>Reviewing requirements to perform impact analysis</ListItem>
                <ListItem>Developing a strategic test plan including multiple test scenarios </ListItem>
                <ListItem>Developing positive and negative test cases for each scenario to test</ListItem>
                <ListItem>Carrying out functional tests to ascertain software usability</ListItem>
                <ListItem>Performing integration tests to ensure that components of the software work together as expected</ListItem>
                <ListItem>Perform regression test cases to ascertain any new change does not break the application</ListItem>
                <ListItem>Analyzing test results and providing feedback to the software development team</ListItem>
                <ListItem>Maintaining defect log and tracking defects to closure. Retest and verifying defects once fixed</ListItem>
            </UnorderedList>
            <p>A QA specialist is a crucial member of the development team. A QA is responsible for ensuring quality standards are consistently met before the final version of the product reaches the target user.

            But why would you need a separate person to do quality testing? Having a QA offers businesses a lot of benefits like increased productivity, reduced costs (since you can detect and fix issues early), improved app security, and measured progress.</p>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}