import { createSlice } from "@reduxjs/toolkit";
import { getCall, deleteCall, updateCall } from '../api/api'

const initialState = {
    isPending: false,
    books: [],
}

const bookSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        requestPending(state) {
            state.isPending = true;
        },
        requestSuccess(state, action) {
            state.isPending = false;
            state.books = action.payload
        },
        requestFail(state, action) {
            state.error = action.payload.error;
        }
    }
})

const { actions, reducer } = bookSlice;

export const { requestPending, requestSuccess, requestFail } = actions;

export const requestBooks = () => {
    return async dispatch => {
        dispatch(requestPending());
        try {
            const response = await getCall(`books`);
            dispatch(requestSuccess(response))
            }
        catch (error) {
            dispatch(requestFail(error))
        }
    }
}


export const deleteBook = (id) => {
    return async (dispatch, getState) => {
        dispatch(requestPending());
        try {
            await deleteCall(`books`, id);
            dispatch(requestSuccess(getState().booksReducer.books.filter(item => item.id !== id)));
        }
        catch (error) {
            dispatch(requestFail(error))
        } 
    }
}


export const addBook = (bookData) => {
    return async (dispatch, getState) => {
        dispatch(requestPending());
        try {
            const response = await updateCall(`books`, bookData);
            dispatch(requestSuccess(response));
        }
        catch (error) {
            dispatch(requestFail(error))
        } 
    }
}

export default reducer;