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

## Features

- **Home page:** Curated list of up-and-coming artists, with one featured artist on the landing page.
  <img width="1920" alt="Screenshot 2023-08-25 at 18 25 36" src="https://github.com/thiagolos/the_house/assets/128632331/97a3fc0d-926a-4424-a181-9be941b65c59">
- **Artist Details Page** All artists have their own detailed feature page.
  <img width="1920" alt="Screenshot 2023-08-25 at 18 25 45" src="https://github.com/thiagolos/the_house/assets/128632331/4f12c7eb-5148-4332-a71d-68cd3d910635">
- **Embedded Song Previews:** Listen to snippets of artists most popular songs.
- **Metric Visualization:** View various metrics like monthly listeners, popularity index, and more in an easy-to-understand format.
- **Data Updates:** The application has the capability to fetch updated data from the Spotify API, and populate the database automatically.

## License

This project is licensed under the [MIT License](LICENSE).
