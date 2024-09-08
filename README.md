# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Splitwise-like Expense Tracker

A simplified version of Splitwise built using React.js and Tailwind CSS. The app allows users to track and split expenses among selected participants with real-time balance updates and a visually appealing balance sheet.

## Features

- **Add Transactions**: Users can add transactions, specifying who paid, the amount, description, and who shares the expense.
- **View Transactions**: Displays all transactions with details such as who paid, total amount, and participants involved.
- **Split Logic**: Automatically calculates the amount each participant owes or is owed.
- **Balance Sheet**: Shows net balances for each participant with color indicators (green for credit, red for debt).
- **Responsive Design**: Designed to look great on all screen sizes with a dark theme.
- **Toast Notifications**: Added feedback using React Toastify for form submissions and errors.

## Technologies Used

- **React.js**: Frontend library used to build the UI.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **React Toastify**: To handle alert notifications for success and error messages.
- **LocalStorage**: Persist transactions data across sessions.
- **Vite**: Fast development server and build tool.

## Installation

To run this project locally, follow these steps:

### 1. Clone the repository

```bash
git clone https://github.com/Sachinnegi825/Splitwise-App.git
```

### 2. Navigate to the project directory

cd project

### 3. Install dependencies

npm install

### 4. Start the development server

npm run dev
This will start the app on http://localhost:3000.
