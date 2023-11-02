# URL Shortener Frontend ( Reference: 531 )

## Overview

This is the frontend part of a simple URL shortener application that allows users to shrink long URLs, making them more manageable and shareable. It's built using React for the UI, and communicates with a backend server to store and manage URLs.

## Features

- **URL Shortening**: Users can input a long URL and receive a shortened version, which is easier to share.
- **Custom Slugs**: Users have the option to provide a custom slug for their URL.
- **URL Management**: Users can view a list of their shortened URLs, and have the option to edit or delete them.
- **Pagination**: When the list of URLs grows, users can navigate through pages to manage their URLs.
- **Notifications**: Provides feedback to users upon success or failure of actions.

## Setup

1. **Clone the Repository**

```bash
git clone https://github.com/FrontEnd-Guy/url-shrinkener-client.git
cd url-shortener-client
```

2. **Install Dependencies**
```bash
npm install
```

4. **Run the Application**
```bash
npm start
```
   - This will start the development server, and open the application in your default web browser.
   - The application will reload automatically as you make changes to the code.

5. **Build for Production**
```bash
npm run build
```
   - This will create a `build` directory with the optimized, minified code ready for deployment.

## Folder Structure
- `src/`: Contains the source code of the application.
  - `api/`: Contains the functions for making HTTP requests to the backend.
  - `components/`: Contains the React components used in the application.
  - `context/`: Contains the React context for managing global state.
  - `hooks/`: Contains custom hooks.
  - `utils/`: Contains utility functions and constants.
- `public/`: Contains static files like the HTML template and icons.
- `build/`: (generated on `npm run build`) Contains the built, production-ready application.
