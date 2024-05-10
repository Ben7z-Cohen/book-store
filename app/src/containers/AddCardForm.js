import {useDispatch} from 'react-redux';
import React, {useState} from 'react';
import { addBook } from '../redux/books-slice';

const AddCardForm = ({id, title, description, author, publicationDate, 
    genre, price, closeModal }) => {

    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        author: '',
        genre: '',
        price: ''
      });

      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevState => ({
          ...prevState,
          [name]: value
        }));
      };

      const handleOnSubmit = () => {
        dispatch(addBook(formData));
        closeModal(false);
      }

  return (
    <div className='tc bg-blue br3 pa3 ma2 dib bw2 shadow-5' id={id}>
        <div className='flex flex-column'>
            <div className='pa3'>
                Title <input
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />
            </div>
            <div className='pa3' >
               Descr <input
                name="description"
                value={formData.description}
                onChange={handleInputChange}
               />
            </div>
            <div className='pa3'>
                Author <input
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                />
            </div>
            <div className='pa3'>
                Genre <input
                name="genre"
                value={formData.genre}
                onChange={handleInputChange}
                />
            </div>    
            <div className='pa3'>
                Price <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                />
            </div> 
        </div>
        <div>
                <button className='bg-blue' onClick={handleOnSubmit}>
                    Submit
                </button>
            </div>
    </div>
  );
}

export default AddCardForm;