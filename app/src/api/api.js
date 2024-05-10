const baseURL = 'http://localhost:3001/';

export const getCall = (link) =>
  fetch(`${baseURL}${link}`).then(response => response.json());

export const deleteCall = (link, id) => fetch(`${baseURL}${link}/${id}`,
 {method: 'DELETE'});

export const updateCall = (link, data) => {
  fetch(`${baseURL}${link}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data), 
  })
  .then(response => response.json())
};