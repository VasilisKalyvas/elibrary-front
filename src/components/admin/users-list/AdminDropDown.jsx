import React, { useState, useRef, useEffect } from 'react';
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import { Link } from 'react-router-dom';

const AdminDropDown = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    const handleOnclick = () => {
        setIsOpen(!isOpen);
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    return (
        <div className='relative' ref={dropdownRef}>
            <MdOutlineAdminPanelSettings 
                onClick={handleOnclick} 
                size={24} 
                className='cursor-pointer hover:text-[#febd69]'
            />

            {isOpen && (
                <div className='flex flex-col whitespace-nowrap top-[40px] left-[-25px] absolute  bg-[#131a22] text-white p-4 rounded'>
                    <Link to={'/admin/users'} onClick={handleLinkClick} className='p-1 hover:text-[#febd69]'>
                        Users List
                    </Link>
                    <Link to={'/admin/rents'} onClick={handleLinkClick} className='p-1 hover:text-[#febd69]'>
                        Rents List
                    </Link>
                    <Link to={'/admin/books'} onClick={handleLinkClick} className='p-1 hover:text-[#febd69]'>
                        Book List
                    </Link>
                </div>
            )}
        </div>
    );
};

export default AdminDropDown;
