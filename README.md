# The House - Spotify Metrics Tracking Application

The House is an application designed to track Spotify metrics for a curated list of artists. This README provides an overview of the project and its key components.

## Technologies Used

### Frontend

- **Vue.js:** A progressive JavaScript framework for building user interfaces.
- **TypeScript:** A statically typed superset of JavaScript that enhances code quality and readability.
- **Axios:** A promise-based HTTP client for making API requests from the frontend.

### Backend

- **Koa:** A lightweight and modern web framework for Node.js that simplifies server-side logic.
- **PostgreSQL:** A powerful open-source relational database system.
- **Sequelize:** A promise-based ORM (Object-Relational Mapping) for Node.js, used for database management.
- **TypeScript:** Used on the backend to bring static typing and better tooling to Node.js development.

### API

- **Spotify:** Integration with the Spotify API allows access to artist-related data, enabling the application to fetch and display metrics.

## Getting Started

To get started with the application, follow these steps:

1. Clone this repository.
2. Set up the frontend and install its dependencies by navigating to the `/frontend` directory and running `npm install`.
3. Similarly, set up the backend by going to the `/backend` directory and running `npm install`.
4. Create a PostgreSQL database for the application and update the connection configuration in the backend's `.env` file.
5. Obtain Spotify API credentials and update them in the backend's `.env` file.
6. Start the backend server using `nodemon index.ts` in the `/backend` directory.
7. Start the frontend development server using `npm run dev` in the `/frontend` directory.

## Features

- **Home page:** Curated list of up-and-coming artists, with one featured artist on the landing page.
  <img width="1920" alt="Screenshot 2023-08-25 at 18 25 36" src="https://github.com/thiagolos/the_house/assets/128632331/97a3fc0d-926a-4424-a181-9be941b65c59">
- **Artist Details Page** All artists have their own detailed feature page.
  <img width="1920" alt="Screenshot 2023-08-25 at 18 25 45" src="https://github.com/thiagolos/the_house/assets/128632331/4f12c7eb-5148-4332-a71d-68cd3d910635">
- **Embedded Song Previews:** Listen to snippets of artists most popular songs.
- **Metric Visualization:** View various metrics like monthly listeners, popularity index, and more in an easy-to-understand format.
- **Data Updates:** The application has the capability to fetch updated data from the Spotify API, and populate the database automatically.

## Contributing

Contributions are welcome! If you'd like to contribute to The House, please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or improvement.
3. Make your changes and commit them with descriptive commit messages.
4. Push your changes to your forked repository.
5. Submit a pull request, explaining your changes and their purpose.

## License

This project is licensed under the [MIT License](LICENSE).
