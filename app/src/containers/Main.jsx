import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import {requestBooks} from '../redux/books-slice';
import AddCardForm from './AddCardForm';


const Main = () => {

    const dispatch = useDispatch();
    const books = useSelector(state => state.booksReducer.books)
    const isPending = useSelector(state => state.booksReducer.isPending)
    const [searchValue, setSearchValue] = useState('')
    const [filteredBooks, setFilteredBooks] = useState([])
    const [open, setOpen] = useState(false);
    const onSearchChange = (event) => {
        setSearchValue(event.target.value)
    }
    useEffect(() => {
        dispatch(requestBooks());
    }, [])

    useEffect(() => {
        if(books && books.length > 0 ) {
            setFilteredBooks(books.filter(book => {
                return book.title.toLowerCase().includes(searchValue.toLowerCase());
                }))
        }
    }, [searchValue, books])

        return (
        <div className='tc'>
            <h1 className='f1'>Book Store</h1>
            <SearchBox searchChange={onSearchChange} />
            <button className='flex flex-start br3 bg-blue w3-ns ' style={{cursor: 'pointer',
             paddingRight: '5px', margin: '5px'}} onClick= {() => setOpen(!open)}>
                Add
            </button>
            {open && <AddCardForm closeModal={setOpen} />}
            <Scroll>
                {isPending ? <h1>Loading</h1> :
                    <ErrorBoundry>
                        <CardList books={filteredBooks} />
                    </ErrorBoundry>
                }
            </Scroll>
        </div>
    )
}

export default Main;
