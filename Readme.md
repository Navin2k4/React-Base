# React Learn

> ⚠ Dependencies may change. Keep them updated to ensure compatibility and security.

A full-stack web application built with React and Express.js, featuring modern development practices and a clean monorepo structure.


## Repository Structure

This is a **monorepo** containing both frontend and backend applications with shared utilities:

```
react-learn/
├── client/                # React frontend application
│   ├── src/
│   │   ├── assets/        # Static assets
│   │   ├── components/    # Reusable UI components
│   │   ├── features/      # Feature-specific components
│   │   ├── hooks/         # Custom React hooks
│   │   ├── layouts/       # Page layout components
│   │   ├── pages/         # Main page components
│   │   └── styles/        # Global styles
│   ├── utils/             # Client-side utilities
│   ├── constants/         # Client-side constants
│   ├── public/            # Public static files
│   ├── .env               # Environment variables (client)
│   └── package.json       # Client dependencies
├── server/                # Express.js backend application
│   ├── controllers/       # Request handlers & business logic
│   ├── routes/            # API route definitions
│   ├── models/            # Database models (Mongoose)
│   ├── utils/             # Server-side utilities
│   ├── constants/         # Server-side constants
│   └── index.js           # Server entry point
├── shared/                # Shared code between client & server
│   ├── schemas/           # Zod validation schemas
├── .env                   # Environment variables (server)
├── package.json           # Root package.json (server scripts)
├── .gitignore             # Git ignore patterns
├── .prettierrc            # Code formatting configuration
└── README.md              # This file
```

## Quick Start

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- MongoDB (local or cloud)

### Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd react-learn
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Environment Setup**
   ```bash
   # Create .env file in root directory
   cp .env.example .env
   
   # Add your environment variables
   DATABASE_URL=mongodb://localhost:27017/react-learn
   JWT_SECRET=your-secret-key
   PORT=3000
   ```

5. **Start Development Servers**
   ```bash
   # Terminal 1: Start server (from root)
   npm run dev
   
   # Terminal 2: Start client (from client directory)
   cd client
   npm run dev
   ```

### Access Points
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3000

## Tech Stack

### Frontend (Client)
- **Framework**: React 19.1.0
- **Build Tool**: Vite 7.0.0
- **Styling**: Tailwind CSS 4.1.11
- **UI Components**: Flowbite React 0.11.8
- **State Management**: Zustand 5.0.6
- **Routing**: React Router DOM 7.6.3
- **Form Handling**: React Hook Form 7.60.0
- **HTTP Client**: Axios 1.10.0
- **Icons**: React Icons 5.5.0
- **Loading States**: React Spinners 0.17.0

### Backend (Server)
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **Database**: MongoDB with Mongoose 8.16.1
- **Authentication**: JWT (jsonwebtoken 9.0.2)
- **Password Hashing**: bcrypt 6.0.0
- **CORS**: cors 2.8.5
- **Environment**: dotenv 17.0.1
- **Development**: Nodemon 3.1.10

### Shared
- **Validation**: Zod (shared schemas)

### Development Tools
- **Code Quality**: ESLint 9.29.0
- **Code Formatting**: Prettier 3.6.2
- **Process Management**: Concurrently 9.2.0
- **TypeScript Support**: @types/react, @types/react-dom

## Available Scripts

### Root Directory (Server)
```bash
npm run dev        # Start server in development mode
npm run start      # Start server in production mode
npm run build      # Build client and prepare for production
npm run con        # Run both client and server concurrently
```

### Client Directory
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Architecture

### Monorepo Benefits
- **Code Sharing**: Shared validation schemas and utilities
- **Consistency**: Unified development experience
- **Simplified Deployment**: Single repository for both apps
- **Type Safety**: Consistent data structures across frontend/backend

### Project Philosophy
- **Feature-Based Structure**: Components organized by functionality
- **Separation of Concerns**: Clear distinction between client, server, and shared code
- **Modern Development**: Latest React and Node.js features
- **Developer Experience**: Hot reload, TypeScript support, and code formatting

## Development Workflow

1. **Feature Development**: Create components in appropriate feature folders
2. **Validation**: Use shared Zod schemas for consistent validation
3. **API Integration**: Use custom hooks for API calls
4. **Styling**: Utility-first approach with Tailwind CSS
5. **State Management**: Zustand for global state, React hooks for local state

## Deployment

### Production Build
```bash
npm run build     # Builds client and prepares server
npm run start     # Starts production server
```

### Environment Variables
Ensure all required environment variables are set in production:
- `DATABASE_URL`
- `JWT_SECRET`
- `PORT`
- `NODE_ENV=production`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

---

**Happy Coding!**

Built with using React and Express.js crafted with Tailwind!