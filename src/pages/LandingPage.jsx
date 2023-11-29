import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { selectBooks, selectBooksListFilters, selectBooksisLoading, selectRecentBooks, selectRecentBooksisLoading } from '../store/books/selectors'
import { getAuthors, getBooks, getCategories, getRecentBooks } from '../store/books/actions'

import Carousel from '../components/general/Carousel'
import Container from '../components/general/Container'
import Filters from '../components/filters'
import Books from '../components/general/Books'

const LandingPage = () => {
  const dispatch = useDispatch()
  const recentBooks = useSelector(selectRecentBooks)
  const isRecentBooksLoading = useSelector(selectRecentBooksisLoading)
  const books = useSelector(selectBooks)
  const isBooksLoading = useSelector(selectBooksisLoading)
  const filters = useSelector(selectBooksListFilters)

  const handleGetBooks = () => {
    dispatch(getBooks(filters))
  }
  useEffect(() => {
    dispatch(getRecentBooks())
    handleGetBooks()
    dispatch(getCategories())
    dispatch(getAuthors())
  }, [])

  useEffect(() => {
    handleGetBooks()
  }, [filters])

  return (
    <div className='p-8'>
        <Container className='mt-8' titleText='New Available Books'>
            <Carousel data={recentBooks} isLoading={isRecentBooksLoading}/>
        </Container>
        <Container>
            <Filters/>
            <Books data={books} isLoading={isBooksLoading}/>
        </Container>
    </div>
  )
}

export default LandingPage