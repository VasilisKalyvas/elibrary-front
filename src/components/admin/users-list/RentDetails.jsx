import React from 'react';
import dayjs from 'dayjs';
import AccordionList from './AccordionList';
import AccordionBody from './AccordionBody'
import { useAccordion } from '../../../hooks/useAccordion';
import BookDetails from './BookDetails';

const RentDetails = ({ rent }) => {
  const { opened, handleOpen } = useAccordion();

  return (
    <div className='flex flex-col gap-1'>
      <div>Id: {rent?.id}</div>
      <div>From: {dayjs(rent?.from).format('DD-MM-YYYY')}</div>
      <div>Until: {dayjs(rent?.until).format('DD-MM-YYYY')}</div>
      <div>Status: {rent?.status.toUpperCase()}</div>
      Book: 
      {rent?.book ? (
        <AccordionList
          id={`${rent.book?.id} + book`}
          title={rent.book?.title}
          isOpen={!!opened?.find((openId) => openId === `${rent.book?.id} + book`)}
          handleOpen={() => handleOpen(`${rent.book?.id} + book`)}
          body={<AccordionBody body={<BookDetails book={rent.book} />} />}
        />
      ) : null}
    </div>
  );
};

export default RentDetails;
