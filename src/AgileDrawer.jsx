import React from "react";
import { useDisclosure } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Text,
  OrderedList,
  ListItem,
  Center,
  Image
} from '@chakra-ui/react';

export default function OffCanvasDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <div>
      <Button _first={{fontSize: '.9rem'}} ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Click for my reseach 
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
                maxW='360px'
                className="img-fluid" // < notice how bootstrap class used inside Chakra Image for image responsiveness
                src='https://i0.wp.com/www.geneca.com/wp-content/uploads/2020/08/4-key-agile-values.png?w=1080&ssl=1'
                alt='Graphic image of 4 key note agile values'
            />
           </Center>
           
          <DrawerHeader color='red.400' textAlign='center' fontSize='1.5em'
          margin='2%' >The Twelve Agile Manifesto Principles</DrawerHeader>

          <DrawerBody padding='2.5em' overflow={'auto'}>
            <Text>
               <p>
            The Twelve Principles are the guiding principles for the methodologies that are included under the title “The Agile Movement.” They describe a culture in which change is welcome, and the customer is the focus of the work. They also demonstrate the movement’s intent as described by Alistair Cockburn, one of the signatories to the Agile Manifesto, which is to bring development into alignment with business needs.
                            </p> 

            The twelve principles of agile development include:
            <OrderedList>
              <ListItem>Customer satisfaction through early and continuous software delivery - Customers are happier when they receive working software at regular intervals, rather than waiting extended periods of time between releases.</ListItem>
              <ListItem>Accommodate changing requirements throughout the development process - The ability to avoid delays when a requirement or feature request changes.</ListItem>
              <ListItem>Frequent delivery of working software - Scrum accommodates this principle since the team operates in software sprints or iterations that ensure regular delivery of working software.</ListItem>
              <ListItem>Collaboration between the business stakeholders and developers throughout the project - Better decisions are made when the business and technical team are aligned.</ListItem>
              <ListItem>Support, trust, and motivate the people involved – Motivated teams are more likely to deliver their best work than unhappy teams.</ListItem>
              <ListItem>Enable face-to-face interactions – Communication is more successful when development teams are co-located.</ListItem>
              <ListItem>Working software is the primary measure of progress – Delivering functional software to the customer is the ultimate factor that measures progress.</ListItem>
              <ListItem>Agile processes to support a consistent development pace – Teams establish a repeatable and maintainable speed at which they can deliver working software, and they repeat it with each release.</ListItem>
              <ListItem>Attention to technical detail and design enhances agility – The right skills and good design ensures the team can maintain the pace, constantly improve the product, and sustain change.</ListItem>
              <ListItem>Simplicity – Develop just enough to get the job done for right now.</ListItem>
              <ListItem>Self-organizing teams encourage great architectures, requirements, and designs – Skilled and motivated team members who have decision-making power, take ownership, communicate regularly with other team members, and share ideas that deliver quality products.</ListItem>
              <ListItem>Regular reflections on how to become more effective – Self-improvement, process improvement, advancing skills, and techniques help team members work more efficiently.</ListItem>
            </OrderedList>
            </Text>          
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}