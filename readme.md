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

## Models

### 1. **Vehicle**
Represents vehicles in the system.
**Fields**:
- `id`: Auto-increment primary key.
- `name`: Name of the vehicle (e.g., "Car A").
- `type`: Type of the vehicle (e.g., "SUV").

### 2. **ServiceIssue**
Tracks service-related issues for vehicles.
**Fields**:
- `id`: Auto-increment primary key.
- `vehicle`: ForeignKey to the `Vehicle` model.
- `issue`: Brief title/description of the issue.
- `description`: Detailed description of the issue.
- `cost`: Cost of resolving the issue.
- `created_at`: Timestamp when the issue was reported.

## Revenue Analytics

Three API endpoints provide graphical data for revenue analysis:

1. **Daily Revenue** (Last 7 Days):
   Endpoint: `/analytics/daily/`
   Data: Revenue grouped by day for the past week.

2. **Monthly Revenue** (Last 12 Months):
   Endpoint: `/analytics/monthly/`
   Data: Revenue grouped by month for the past year.

3. **Yearly Revenue** (Last 3 Years):
   Endpoint: `/analytics/yearly/`
   Data: Revenue grouped by year for the past three years.

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