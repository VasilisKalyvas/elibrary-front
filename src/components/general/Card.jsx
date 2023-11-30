import React from 'react';
import { FaCartPlus, FaHeart } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

const Card = ({item}) => {
  const navigate = useNavigate()

  const handleRentBook = (item) => {
    navigate(`/rent/${item?.id}`)
  }

  const handleAddToFavorites = () => {

  }
  return (
      <div className="
        max-w-[250px] min-w-[250px] 
        md:max-w-[380px] md:min-w-[380px] 
        max-h-[450px] min-h-[450px] 
        md:max-h-[408px] md:min-h-[408px]
        mx-auto bg-white 
        rounded overflow-hidden shadow-lg"
      >
        <img className="w-full h-48 object-contain" src={item.image} alt="Book Cover" />
        <div className="px-6 py-4">
          <div className="font-bold text-lg text-[#37475a] mb-2">{item.title}</div>
          <p className="text-gray-700 text-base">Author: {item.author.name}</p>
          <p className="text-gray-700 text-base mt-2">Published Year: {item.year}</p>
        </div>
        <div className="flex items-center justify-end gap-2 px-6 py-4">
          {
            item?.isAvailable
            ?
              <>
                <button className="bg-[#37475a] hover:bg-[#febd69] text-white font-bold py-2 px-2 rounded-lg">
                  <FaHeart/>
                </button>
                <button
                  onClick={() => handleRentBook(item)} 
                  className="bg-[#37475a] hover:bg-[#febd69] text-white font-bold py-2 px-2 rounded-lg">
                  <FaCartPlus/>
                </button>
              </>

            : <div>Not Available!</div>
          }
        </div>
      </div>
  );
};

export default Card;


