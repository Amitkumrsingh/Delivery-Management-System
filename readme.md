# Delivery Management System

## Set Up Frontend

To set up the frontend, install the necessary dependencies and start the development server.

### Install Dependencies

Run the following command to install the required dependencies for the frontend:
⁠ npm install ⁠

### Run the Development Server

Start the frontend development server by running:
⁠ npm run dev ⁠

The development server will be accessible at ⁠ http://localhost:5173/ ⁠.

### Technologies Used

•⁠  ⁠*React.js*: Frontend framework.
•⁠  ⁠*Vite*: Development server and bundler.





The **Delivery Management System** backend is built with **Django**, providing APIs and functionalities for managing vehicles, service issues, and revenue analytics. This backend processes, stores, and analyzes data to facilitate an efficient delivery management workflow.

## Features

- **Vehicle Management**: Add, retrieve, and manage vehicle information.
- **Service Issue Tracking**: Record service issues for vehicles, including cost, issue description, and timestamps.
- **Revenue Analytics**: View daily, monthly, and yearly revenue trends for service operations.
- **Admin Panel**: Manage all models directly via the Django admin interface.


### Views Overview

The following views handle the creation and retrieval of vehicles, components, service issues, and analytics data:

- **Vehicle Views**:
  - `create_vehicle`: Creates a new vehicle.
  - `get_vehicles`: Retrieves a list of all vehicles.

- **Component Views**:
  - `create_component`: Creates a new component.
  - `get_components`: Retrieves a list of all components.

- **Service Issue Views**:
  - `create_service_issue`: Creates a new service issue (repair or replacement).
  - `get_service_issues`: Retrieves a list of all service issues.

- **Analytics Data View**:
  - `analytics_data`: Provides daily, monthly, and yearly revenue data based on service issues.

### URL Configuration (`urls.py`)

The following URLs are defined for the endpoints in the project:

- **Vehicle Endpoints**:
  - `GET /vehicles/`: Retrieves all vehicles (`get_vehicles`).
  - `POST /vehicles/create/`: Creates a new vehicle (`create_vehicle`).

- **Component Endpoints**:
  - `GET /components/`: Retrieves all components (`get_components`).
  - `POST /components/create/`: Creates a new component (`create_component`).

- **Service Issues Endpoints**:
  - `GET /service-issues/`: Retrieves all service issues (`get_service_issues`).
  - `POST /service-issues/create/`: Creates a new service issue (`create_service_issue`).

- **Analytics Endpoint**:
  - `GET /analytics/data/`: Provides analytics data (`analytics_data`).

### Conclusion

This backend service includes essential endpoints for managing vehicles, components, and service issues, as well as an analytics endpoint for tracking revenue. The URL configuration ensures easy routing of requests to the corresponding views for each resource.


## Setup Instructions

### Prerequisites
- Python 3.9+
- Django 4.2+
- SQLite (or any database supported by Django)

### Steps to Run the Backend Locally

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd backend



# Vehicle Service and Analytics System

This project is a Django-based web application designed to manage vehicle service records and provide analytics for daily, monthly, and yearly revenue.

## Features
•⁠  ⁠Manage vehicles and service issues via RESTful API endpoints.
•⁠  ⁠Analytics for revenue generation with graphical representations using Matplotlib.
•⁠  ⁠Admin interface for managing application data.
•⁠  ⁠Unit tests for models and views to ensure code quality.

## Getting Started

Set up a virtual environment by running: ⁠ python3 -m venv venv ⁠ and activate it using ⁠ source venv/bin/activate ⁠ (On Windows: ⁠ venv\Scripts\activate ⁠). Install the dependencies with ⁠ pip install -r requirements.txt ⁠. Apply the migrations using ⁠ python manage.py migrate ⁠. Finally, run the development server with ⁠ python manage.py runserver ⁠. The server will be accessible at ⁠ http://127.0.0.1:8000/ ⁠.

## Admin Panel

Access the Django admin interface at ⁠ /admin/ ⁠. To create a superuser, run ⁠ python manage.py createsuperuser ⁠ and follow the prompts to set up an admin account.

## Running Tests

Unit tests are provided for models and analytics views. To run all tests, execute ⁠ python manage.py test ⁠.

## Folder Structure

The project follows this structure:

backend/

├── service/

│   ├── migrations/        # Database migrations

│   ├── models.py          # Model definitions

│   ├── views.py           # API views for analytics

│   ├── urls.py            # URL routing

│   ├── admin.py           # Admin model registration

│   ├── tests.py           # Unit tests

├── manage.py              # Django entry point



## API Endpoints

•⁠  ⁠*Vehicles*
  - ⁠ GET /vehicles/ ⁠: Retrieve all vehicles.
  - ⁠ POST /vehicles/ ⁠: Add a new vehicle.

•⁠  ⁠*Service Issues*
  - ⁠ GET /service-issues/ ⁠: Retrieve all service issues.
  - ⁠ POST /service-issues/ ⁠: Add a new service issue.

•⁠  ⁠*Analytics*
  - ⁠ GET /analytics/daily/ ⁠: Daily revenue.
  - ⁠ GET /analytics/monthly/ ⁠: Monthly revenue.
  - ⁠ GET /analytics/yearly/ ⁠: Yearly revenue.

## Technologies Used

•⁠  ⁠*Django*: Backend framework.
•⁠  ⁠*SQLite*: Default database (can be replaced with PostgreSQL/MySQL).
•⁠  ⁠*Matplotlib*: For graph generation in analytics.

## License

This project is open-source and licensed under the [MIT License](LICENSE).