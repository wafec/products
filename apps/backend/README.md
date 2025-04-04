# Backend Weather Forecast API

This is a simple .NET 6 Web API project that provides weather forecast data.

## Project Structure

- **Controllers/**: Contains the API controllers.
  - `WeatherForecastController.cs`: Handles HTTP requests related to weather forecasts.
  
- **Models/**: Contains the data models.
  - `WeatherForecast.cs`: Defines the properties of a weather forecast object.

- **Program.cs**: The entry point of the application. Sets up the web host and configures services.

- **appsettings.json**: Contains configuration settings for the application.

- **appsettings.Development.json**: Contains development-specific configuration settings.

- **backend.csproj**: The project file that defines dependencies and build settings.

## Getting Started

### Prerequisites

- .NET 6 SDK
- A code editor (e.g., Visual Studio Code)

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```
   cd backend
   ```

3. Restore the dependencies:
   ```
   dotnet restore
   ```

### Running the Application

To run the application, use the following command:
```
dotnet run
```

The API will be available at `http://localhost:5000` by default.

### API Endpoints

- `GET /weatherforecast`: Returns a list of weather forecasts.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes.