# Todo Application with .NET Core and React

A real-time todo application built with .NET Core Web API and React, featuring live updates using SignalR.

## Features

- ✨ Real-time task synchronization
- 📱 Responsive design
- 🔄 Live updates across multiple users
- ⚡ Fast and efficient
- 🔐 User authentication

## Tech Stack

- Frontend:
  - React
  - Redux
  - Bootstrap
- Backend:
  - .NET Core Web API
  - SignalR
  - Entity Framework Core
  - SQL Server

## Prerequisites

Make sure you have the following installed:
- [.NET Core SDK](https://dotnet.microsoft.com/download)
- [Node.js](https://nodejs.org/)
- [SQL Server](https://www.microsoft.com/sql-server)

## Installation

1. Clone the repository
```bash
git clone https://github.com/halit-altun/todo-with-dotnet-core-raect.git
cd todo-with-dotnet-core-react
```

2. Install frontend dependencies
```bash
cd ClientApp
npm install
```

3. Update database connection string in `appsettings.json`

4. Apply database migrations
```bash
dotnet ef database update
```

## Running the Application

1. Start the application
```bash
dotnet run
```

2. Open your browser and navigate to:
```
https://localhost:5001
```

## Development

- For frontend development:
```bash
cd ClientApp
npm start
```

- For backend development:
```bash
dotnet watch run
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Contact


Project Link: [https://github.com/halit-altun/todo-with-dotnet-core-raect]