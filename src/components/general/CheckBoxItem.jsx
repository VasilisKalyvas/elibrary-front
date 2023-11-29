import React from 'react';
import CheckBoxInput from '../inputs/CheckBoxInput';
import Arrow from '../icons/Arrow';
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CheckBoxItem = ({ id, title, type, data, isOpen, filters, handleFilterSelect, handleOpen }) => (
  <Accordion key={id} open={isOpen} icon={<Arrow id={id} open={isOpen} />}>
    <AccordionHeader onClick={() => handleOpen(id)}>{title}</AccordionHeader>
    <AccordionBody className='p-0'>
      <CheckBoxInput options={data} type={type} filters={filters} handleOnChange={handleFilterSelect} />
    </AccordionBody>
  </Accordion>
);

export default CheckBoxItem;