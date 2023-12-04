import React from 'react';
import dayjs from 'dayjs';
import AccordionList from './AccordionList';
import AccordionBody from './AccordionBody'; 
import { useAccordion } from '../../../hooks/useAccordion';
import RentDetails from './RentDetails';

const UserDetails = ({ user }) => {
  const { opened, handleOpen } = useAccordion();

  return (
    <div className='flex flex-col gap-1'>
      <div>Email: {user?.email}</div>
      <div>Role: {user?.role.toUpperCase()}</div>
      <div>Registration date: {dayjs(user?.createdAt).format('DD-MM-YYYY')}</div>
      Rents:
      {user?.rents?.length ? (
        <div>
          {user?.rents?.map((rent, index) => (
            <AccordionList
              key={index}
              id={rent?.id}
              title={dayjs(rent?.createdAt).format('DD-MM-YYYY')}
              isOpen={!!opened?.find((openId) => openId === rent?.id)}
              handleOpen={() => handleOpen(rent?.id)}
              body={<AccordionBody body={<RentDetails rent={rent} />} />}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserDetails;