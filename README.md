# Advanced React To-Do Application

## Project Overview

This is a comprehensive React-based To-Do application with advanced features including API integration, state management with Redux, responsive design, and user authentication.

## Live Demo [link](https://advanced-todo-weather-feature.netlify.app/)

## Features

- 🚀 Task Management
  - Add new tasks
  - View task list
  - Delete tasks
  - Prioritize tasks

- 🌦️ Weather Integration
  - Displays weather information related to tasks
  - Real-time API data fetching

- 📱 Responsive Design
  - Mobile-first approach
  - Consistent experience across devices

## Technologies Used

- React
- Redux (with Thunk for async actions)
- React Hooks
- CSS Grid and Flexbox
- Local Storage
- Weather API Integration

## Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

## Installation

1. Clone the repository
```bash
git clone https://github.com/RAKESH-PATEL57/Adavanced-Todo-Web-App-With-Weather-Feature
cd Adavanced-Todo-Web-App-With-Weather-Feature
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Weather API key
```
REACT_APP_WEATHER_API_KEY=your_api_key_here
```

4. Start the development server
```bash
npm start
```

## Project Structure

```
src/
│
├── components/
│   ├── Auth/
│   │   └── Login.jsx
│   ├── Tasks/
│   │   ├── TaskForm.jsx
│   │   └── TaskList.jsx
│   └── Weather/
│       ├── Footer.jsx
│       └── Header.jsx
│
├── redux/
│   ├── actions.jsx
│   ├── reducer.jsx
│   └── store.jsx
│
├── App.jsx
└── main.jsx
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm run build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm run eject`: Removes the single build dependency

## State Management

- Redux for global state management
- Redux Thunk for handling asynchronous actions
- Centralized store for application state

## Responsive Design

- Implemented using CSS Grid and Flexbox
- Mobile-first design approach
- Adaptive layout for various screen sizes

## Error Handling

- Graceful error management for API requests
- User-friendly error messages
- Fallback UI for failed data fetching

## Local Storage

- Persists tasks and authentication status
- Maintains user data across browser sessions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Your Name - rakesh246808@gmail.com

Project Link: [https://github.com/RAKESH-PATEL57/Adavanced-Todo-Web-App-With-Weather-Feature]