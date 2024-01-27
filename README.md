
# URL Shortener


## Overview

URL Shortener is a simple web application that allows users to create short and shareable versions of long URLs. This project provides an efficient way to manage and track shortened URLs.

## Features

- **URL Shortening:** Convert long URLs into short and easy-to-share links.
- **Custom Short URLs:** Optionally create custom short URLs for branding.
- **Link Analytics:** Track the usage and analytics of shortened URLs.
- **User Authentication:** Secure user accounts with authentication.

## Technologies Used

- **Node.js:** Server-side JavaScript runtime.
- **Express.js:** Web application framework for Node.js.
- **MongoDB:** NoSQL database for data storage.
- **Passport.js:** Authentication middleware.
- **ShortID:** Library for generating unique short IDs.

## Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/Aryasharma001/url-shortener.git
```

### 2. Install Dependencies

```bash
cd url-shortener
cd server 
npm install
```

### 3. Configure Environment Variables

Create a `.env` file and add the necessary environment variables, such as database connection details and secret keys.

### 4. Run the Server

```bash
npm start
```

## Usage

1. Access the application at `http://localhost:3000`.
2. Register or log in to create and manage shortened URLs.
3. Enter a long URL, and the application will provide a corresponding short URL.
4. Optionally customize short URLs for branding.


