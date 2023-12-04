import { useState } from 'react';

export const useAccordion = () => {
  const [opened, setOpened] = useState([]);

  const handleOpen = (id) => {
    if (opened?.find((openId) => openId === id)) {
      const updatedOpened = opened?.filter((openId) => openId !== id);
      setOpened(updatedOpened);
    } else {
      setOpened([...opened, id]);
    }
  };

  return { opened, handleOpen };
};
