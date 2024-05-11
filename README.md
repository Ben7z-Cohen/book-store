# Book Store

Welcome to the Book Store repository!

This repository contains the source code for a simple book store application. The application allows users to browse a collection of books, add them to the catalog, and remove them.

## Description

The Book Store application is designed to provide users with an easy way to browse and manage a catalog of books. With features such as searching, adding new books, and removing existing ones, users can interact with the catalog to find their favorite reads.

## Features

- **Browse Books**: View a list of available books with details such as title, author, and price.
- **Search**: Search for specific books by title or author.
- **Add to Catalog**: Add new books to the catalog.
- **Remove from Catalog**: Remove existing books from the catalog.

## Installation

To run the application locally, follow these steps:

1. Clone this repository to your local machine:
    ```
    git clone https://github.com/Ben7z-Cohen/book-store.git
    ```

2. Navigate to the project directory:
    ```
    cd book-store
    ```

3. **Server Setup**:
    - Create a PostgreSQL database named `books`. You can do this using the following command in your PostgreSQL terminal:
        ```
        CREATE DATABASE books;
        ```
    - Navigate to the `server` folder:
        ```
        cd server
        ```
    - Adjust the database connection configuration in your server code according to your PostgreSQL setup. You can find the database connection configuration in your server code, usually in a file named `app.js` or similar. Look for a section similar to the following, where the database connection is established using Knex.js:
        ```javascript
        const database = knex({
          client: 'pg',
          connection: {
            host: '127.0.0.1',
            user: 'postgres',
            password: '8481374',
            database: 'books' // Adjust this according to your database name
          }
        });
        ```

    - Create a `migration.sql` file and paste the following content into it:
        ```sql
        -- migration.sql

        -- Create Books table
        CREATE TABLE IF NOT EXISTS books (
            ID SERIAL PRIMARY KEY,
            Title VARCHAR(255) NOT NULL,
            Description TEXT,
            Author VARCHAR(100) NOT NULL,
            PublicationDate DATE,
            Genre VARCHAR(50),
            Price DECIMAL(10, 2)
        );

        -- Insert sample data into Books table
        INSERT INTO books (Title, Description, Author, PublicationDate, Genre, Price)
        VALUES 
            ('To Kill a Mockingbird', 'A novel by Harper Lee', 'Harper Lee', '1960-07-11', 'Fiction', 12.99),
            ('1984', 'A dystopian novel by George Orwell', 'George Orwell', '1949-06-08', 'Science Fiction', 10.50),
            ('The Great Gatsby', 'A novel by F. Scott Fitzgerald', 'F. Scott Fitzgerald', '1925-04-10', 'Fiction', 9.99),
            ('Pride and Prejudice', 'A romantic novel by Jane Austen', 'Jane Austen', '1813-01-28', 'Romance', 8.75),
            ('The Catcher in the Rye', 'A novel by J.D. Salinger', 'J.D. Salinger', '1951-07-16', 'Fiction', 11.25);
        ```
    - Run the migration script using a PostgreSQL client or by executing it directly in a PostgreSQL terminal.

4. **Client Setup**:
    - Navigate to the `app` folder:
        ```
        cd ../app
        ```
    - Install client dependencies:
        ```
        npm install
        ```

5. **Start Development Servers**:
    - Start the server:
        ```
        npm start
        ```
    - Start the client:
        ```
        npm start
        ```

6. Open your browser and navigate to `http://localhost:3000` to view the application.

## Technologies Used

- **React**: Frontend library for building user interfaces.
- **Node.js**: JavaScript runtime for building server-side applications.
- **Express.js**: Web application framework for Node.js.
- **PostgreSQL**: Relational database for storing application data.
- **Knex.js**: SQL query builder for Node.js, used for database migrations and queries.

## Contributing

Contributions are welcome! If you find any bugs or have suggestions for improvements, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
