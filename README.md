# ASAFE - Next.js Dashboard Application

## Overview

ASAFE is a modern dashboard application built with Next.js 14, featuring authentication, dynamic charts, photo management, and a responsive design with dark/light theme support.

## Architecture

### Tech Stack

- **Frontend**: Next.js 14
- **Authentication**: NextAuth.js
- **Validation Inputs**: Zod
- **Theming**: Next themes
- **Icons**: React Icons
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: React Hooks
- **API Integration**: REST API with Next.js API routes

### Key Features

- Server-side and client-side rendering
- Authentication system with credentials
- Responsive dashboard with multiple chart types
- Dynamic theme switching (dark/light mode)
- Photo management with pagination
- Mobile-friendly sidebar navigation

### Project Structure

src/

- actions/ # Server actions
- app/ # Next.js app router pages
- components/ # Reusable UI components
- hooks/ # Custom React hooks
- interfaces/ # TypeScript interfaces
- styles/ # Global styles and theme

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Installation

1.  Clone the repository

        git clone https://github.com/aldodarrigos/asafe.git
        cd asafe

2.  Install dependencies

        npm install

3.  Set up environment variables

        cp .env.example .env.local

    Required environment variables:

        NEXTAUTH_URL=http://localhost:3000
        #openssl rand -base64 32
        NEXTAUTH_SECRET=your-secret-key

4.  Run the development server

        npm run dev

## Usage

### Development

    npm run dev

### Production Build

    npm run build && npm start

## Authentication

The application uses NextAuth.js for authentication. Default test credentials:

- Email: test@test.com
- Password: testing

## Features

### Dashboard

- Interactive charts (Line, Bar, Doughnut, Radar)
- Responsive layout
- Real-time theme switching

### Photo Management

- Paginated photo gallery
- Lazy loading images
- Server-side data fetching

## API Routes

### Photos API

- `GET /api/photos`: Fetch paginated photos
  - Query parameters:
    - page (default: 1)
    - limit (default: 10)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Aldo D'Arrigo

## Acknowledgments

- Asafe for the opportunity to demostrate my talent
- Next.js team for the amazing framework
- Chart.js for the charting library
- Tailwind CSS for the styling system

# ASAFE - Next.js Dashboard Application

## Overview

ASAFE is a modern dashboard application built with Next.js 14, featuring authentication, dynamic charts, photo management, and a responsive design with dark/light theme support.

## Architecture

### Tech Stack

- **Frontend**: Next.js 14
- **Authentication**: NextAuth.js
- **Validation Inputs**: Zod
- **Theming**: Next themes
- **Icons**: React Icons
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with react-chartjs-2
- **State Management**: React Hooks
- **API Integration**: REST API with Next.js API routes

### Key Features

- Server-side and client-side rendering
- Authentication system with credentials
- Responsive dashboard with multiple chart types
- Dynamic theme switching (dark/light mode)
- Photo management with pagination
- Mobile-friendly sidebar navigation

### Project Structure

src/

- actions/ # Server actions
- app/ # Next.js app router pages
- components/ # Reusable UI components
- hooks/ # Custom React hooks
- interfaces/ # TypeScript interfaces
- styles/ # Global styles and theme

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

## Installation

1.  Clone the repository

        git clone https://github.com/aldodarrigos/asafe.git
        cd asafe

2.  Install dependencies

        npm install

3.  Set up environment variables

        cp .env.example .env.local

    Required environment variables:

        NEXTAUTH_URL=http://localhost:3000
        #openssl rand -base64 32
        NEXTAUTH_SECRET=your-secret-key

4.  Run the development server

        npm run dev

## Usage

### Development

    npm run dev

### Production Build

    npm run build && npm start

## Authentication

The application uses NextAuth.js for authentication. Default test credentials:

- Email: test@test.com
- Password: testing

## Features

### Dashboard

- Interactive charts (Line, Bar, Doughnut, Radar)
- Responsive layout
- Real-time theme switching

### Photo Management

- Paginated photo gallery
- Lazy loading images
- Server-side data fetching

## API Routes

### Photos API

- `GET /api/photos`: Fetch paginated photos
  - Query parameters:
    - page (default: 1)
    - limit (default: 10)

## License

Aldo D'Arrigo

## Acknowledgments

- Asafe for the opportunity to demostrate my talent
- Next.js team for the amazing framework
- Chart.js for the charting library
- Tailwind CSS for the styling system
