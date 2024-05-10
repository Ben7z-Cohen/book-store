import React from 'react';
import {useDispatch } from 'react-redux'
import { deleteBook } from '../redux/books-slice';
const Card = ({id, title, description, author, publicationDate, genre, price }) => {

  const dispatch = useDispatch();

  const handleRemoveBook = (id) => {
    dispatch(deleteBook(id))
  }
  //Todo: need to fix alignment for price
  return (
    <div className='tc bg-blue br3 pa3 ma2 dib bw2 shadow-5' id={id}>
    <button className='flex flex-start br3 bg-blue' style={{cursor: 'pointer'}}
     onClick={() => handleRemoveBook(id)}>
    Remove
    </button>
      <h2>{`${title} by ${author}`}</h2>
      <img alt='books' style= {{width: '300px', height: '300px'}} src={`https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1715350895~exp=1715354495~hmac=f37cafbfeda73960c969fa32d8a92a6fc451174c5a1ca82ed6528e242e33ea19&w=996`} />
      <div>
        <h3>{genre}</h3>
      </div>
      <div className='pb4'>
        <text>{description}</text>
      </div>
      <div className='flex'>
      <text className='content-start-l'>
        {new Date(publicationDate).toDateString()}
      </text>
      <text className='content-end-m pl7'> 
        {`${price} $`}
      </text>
      </div>
    </div>
  );
}

export default Card;