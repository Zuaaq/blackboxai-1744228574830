
Built by https://www.blackbox.ai

---

# Mahjong Casino

## Project Overview

Mahjong Casino is an online betting system designed for the game of Mahjong. This application provides an API for users to create bets, deposit and withdraw funds, and cash out winnings. The backend is built using Express.js, enabling a straightforward architecture for handling user interactions.

## Installation

To run this project locally, please follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/mahjong-casino.git
   cd mahjong-casino
   ```

2. **Install the dependencies:**

   You need to have Node.js and npm installed. If you don't have them, visit [Node.js](https://nodejs.org/) to download and install.

   ```bash
   npm install
   ```

3. **Start the server:**

   Use the following command to start the application in development mode using `nodemon`:

   ```bash
   npm run dev
   ```

   Or run it normally with:

   ```bash
   npm start
   ```

   The server will start on `http://localhost:8000`.

## Usage

This project functions as an API for making bets and handling transactions related to the game. You can interact with the API using tools like Postman or cURL. Below are the main endpoints available:

- **POST /api/bet**: Place a bet.
   - Request Body: 
     ```json
     {
       "amount": 10,
       "userId": "user123"
     }
     ```

- **POST /api/cashout**: Cash out winnings.
   - Request Body: 
     ```json
     {
       "userId": "user123",
       "amount": 20
     }
     ```

- **POST /api/deposit**: Deposit funds into the account.
   - Request Body: 
     ```json
     {
       "amount": 50,
       "method": "credit_card"
     }
     ```

- **POST /api/withdraw**: Withdraw funds.
   - Request Body: 
     ```json
     {
       "amount": 30,
       "method": "bank_transfer"
     }
     ```

## Features

- Bet processing with a simplified acceptance rate system.
- Deposit and withdrawal functionality.
- Transaction management through cash-out requests.
- A static public folder to serve frontend resources (if needed).

## Dependencies

The project relies on the following Node.js packages as specified in `package.json`:

- `express`: Web framework for Node.js
- `cors`: Middleware for enabling Cross-Origin Resource Sharing

### Development Dependencies
- `nodemon`: Utility that monitors for any changes in your source and automatically restarts your server

```json
"dependencies": {
  "express": "^4.18.2",
  "cors": "^2.8.5"
},
"devDependencies": {
  "nodemon": "^3.0.2"
}
```

## Project Structure

The project consists of the following structure:

```
mahjong-casino/
├── node_modules/         # Dependencies
├── public/               # Static files (if any)
├── package.json          # Project metadata and dependencies
├── package-lock.json     # Lock file for exact dependency versions
└── server.js             # Main server file
```

## Conclusion

The Mahjong Casino project provides a precursory backend for an online Mahjong game, handling bets and transactions with ease. Feel free to explore, contribute, or customize it as per your requirements!