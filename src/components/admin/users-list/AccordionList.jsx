import React from 'react'
import Arrow from '../../icons/Arrow';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const AccordionList = ({body, id, handleOpen, isOpen, title}) => {
  return (
    <Accordion 
        className='bg-white pl-3 pr-3 max-w-xl mt-2 rounded'
        key={id} 
        open={isOpen} 
        icon={<Arrow id={id} open={isOpen}/>}>
    <AccordionHeader onClick={() => handleOpen(id)}>{title}</AccordionHeader>
    <AccordionBody>
      {body}
    </AccordionBody>
  </Accordion>
  )
}

export default AccordionList