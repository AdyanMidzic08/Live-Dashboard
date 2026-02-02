# Live Dashboard

## Table of Contents

1.  [Overview](#overview)
2.  [Technical Architecture](#technical-architecture)
3.  [Project Structure](#project-structure)
4.  [Getting Started](#getting-started)
5.  [Containerization and Deployment](#containerization-and-deployment)
6.  [Service Configuration](#service-configuration)
7.  [Scripts](#scripts)

---

## 1. Overview

The Live Dashboard is a full-stack application designed to manage daily productivity tasks. It features a React-based frontend interface communicating with a dedicated microservice for managing Todo items. The application is built with a focus on modularity, type safety using TypeScript, and ease of deployment via Docker.

### Key Features

- **Dashboard Analytics**: Real-time visual statistics of total and completed tasks.
- **Task Management (Todo)**: Full CRUD capabilities for daily to-do items.
- **Optimistic UI Updates**: Instant feedback on task completion and deletion.
- **Responsive UI**: Mobile-first design implementation using Bootstrap grid system.
- **Containerization**: Fully containerized environment for development and production consistency.

---

## 2. Technical Architecture

The application utilizes a modern tech stack centered around the React ecosystem and Node.js.

- **Frontend**: React 19, TypeScript, Vite
- **Styling**: Bootstrap 5, Lucide React Icons
- **Backend Services**: Node.js, Express.js
- **Infrastructure**: Docker, Docker Compose

---

## 3. Project Structure

The codebase is organized into frontend components and backend services within a monorepo-style structure.

```text
src/
├── Components/           # React UI Components
│   ├── DashboardStats.tsx
│   ├── TaskForm.tsx
│   ├── TaskList.tsx
│   └── Todo.tsx
├── Typescript/           # Logic Layer
│   └── Backend/
│       ├── Todo/         # Todo Service (Port 3000)
│       └── Interfaces/   # Shared TypeScript Interfaces
├── App.tsx               # Root Component
└── main.tsx              # Application Entry Point
```

---

## 4. Getting Started

### Prerequisites

- Node.js (Version 20 or higher)
- npm (Node Package Manager)

### Installation

1.  Clone the repository:

    ```bash
    git clone <https://github.com/AdyanMidzic08/Live-Dashboard/>
    cd Live-Dashboard
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

### Local Development Usage

To run the application locally without Docker, you can start all services with one command:

1.  **Start Development Environment**:

    ```bash
    npm run dev
    ```

    This will concurrently start the Vite frontend and the Todo backend service.
    Access via browser at `http://localhost:5173`.

---

## 5. Containerization and Deployment

The project includes a `Dockerfile` and `docker-compose.yml` to orchestrate the entire application stack. This is the recommended method for ensuring environment consistency.

### Build and Run

To build the images and start the containers:

```bash
docker-compose up --build
```

To stop the containers:

```bash
docker-compose down
```

### Access Points

Once the containers are running, the services are available at the following endpoints:

- **Frontend**: http://localhost:5173
- **Todo Service API**: http://localhost:3000

---

## 6. Service Configuration

The application services are configured to listen on specific ports. Ensure these ports are available on the host machine.

| Service          | Port | Description                        |
| :--------------- | :--- | :--------------------------------- |
| **Frontend**     | 5173 | React Development Server           |
| **Todo Service** | 3000 | REST API for processing Todo items |

---

## 7. Scripts

The `package.json` file contains the following scripts for development and maintenance:

- `npm run dev`: Concurrent start of Vite frontend and Todo server.
- `npm run build`: Compiles TypeScript and builds the frontend for production.
- `npm run todo`: Starts the standalone Todo Express server.
- `npm run lint`: Executes ESLint to verify code quality.
