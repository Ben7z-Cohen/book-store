import React from 'react';
import Card from '../containers/Card';
const CardList = ({ books }) => {
  if (books.length === 0) {
    return null
  }
  return (
    <div>
      {
         books.map((user, i) => {
          return (
          <Card
              key={i}
              id={books[i].id}
              title={books[i].title}
              description={books[i].description}
              author={books[i].author}
              publicationDate={books[i].publicationdate}
              genre={books[i].genre}
              price={books[i].price}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;