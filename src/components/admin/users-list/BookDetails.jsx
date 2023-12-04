import React from 'react';

const BookDetails = ({ book }) => {
  return (
    <div className='flex flex-col gap-1'>
      <div>Id: {book?.id}</div>
      <div>Title: {book?.title}</div>
      <div>Author: {book?.author?.name}</div>
      {/* Other book details rendering */}
    </div>
  );
};

export default BookDetails;