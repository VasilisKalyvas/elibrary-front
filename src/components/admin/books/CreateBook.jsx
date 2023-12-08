import React, { useEffect, useState } from 'react'
import { IoIosAddCircle } from "react-icons/io";
import SideDrawer from '../../drawer';
import CreateBookForm from './CreateBookForm';
import axios from 'axios';
import { defaultToastProps } from '../../../helpers/toastProps';
import { toast } from 'react-toastify'
import { selectCurrentUserIsLoggedIn } from '../../../store/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../../store/books/actions';

const CreateBook = () => {
    const [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [year, setYear] = useState('')
    const [author, setAuthor] = useState({})
    const [image, setImage] = useState('')
    const [categories, setCategories] = useState([])
    const dispatch = useDispatch()
    const token = useSelector(selectCurrentUserIsLoggedIn)

    const handleOpen = () => {
        setOpen(!open)
    }

    const [authorOptions, setAuthorOptions] = useState([])
    const [categoriesOptions, setCategoriesOptions] = useState([])

    const getAuthorsOptions = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/author')

            const data = res.data.map((author) => {
                return {value: author.id, label: author.name}
            })
            setAuthorOptions(data)
        } catch (error) {
            throw error
        }
    }

    const getCategoriesOptions = async () => {
        try {
            const res = await axios.get('http://localhost:4000/api/category')

            const data = res.data.map((cat) => {
                return {value: cat.id, label: cat.title}
            })
            setCategoriesOptions(data)
        } catch (error) {
            throw error
        }
    }

    const handleAply = async () => {

        try {
            if(!title || !description || !year || !author || !categories?.length || !image){
                toast('Missing Field', defaultToastProps)
            }

            const params = {
                title,
                description,
                year,
                authorId: author?.value,
                categories : categories?.map(categories => categories?.value),
                image
            }

            await axios.post('http://localhost:4000/api/books/create/many',
                {
                  "books": [params]  
                },
                {
                    headers: {
                        Authorization: `${token}`,
                        'Content-Type': 'application/json',
                    },
                }
            )
            dispatch(getBooks())
            toast('Book Created', defaultToastProps)
            handleOpen()
        } catch (error) {
            toast(`error: ${error}`, defaultToastProps)
        }
    }

    useEffect(() => {
        getAuthorsOptions();
        getCategoriesOptions();
    }, [])

  return (
    <div className='flex align-items pt-6 pb-3 pl-2'>
        <IoIosAddCircle
            className='text-white cursor-pointer'
            size={32}
            onClick={handleOpen}
        />
        {
            open
            ?
                <SideDrawer
                    onClose={handleOpen}
                    header={'Add New Book'}
                    body={<CreateBookForm
                            setCategories={setCategories}
                            setImage={setImage}
                            setAuthor={setAuthor}
                            setYear={setYear}
                            setDescription={setDescription}
                            setTitle={setTitle} 
                            categoriesOptions={categoriesOptions} 
                            authorOptions={authorOptions}
                        />}
                    onApply={handleAply}
                />
            : null
        }
    </div>
  )
}

export default CreateBook