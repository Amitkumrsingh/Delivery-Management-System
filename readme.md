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

### Models Overview

The following models are defined in the `models.py` file, representing the core entities in the system: `Vehicle`, `Component`, and `ServiceIssue`.

- **Vehicle Model**:
  The `Vehicle` model represents a vehicle in the system, including details like the make, model, year, license plate, and the owner's information. Each vehicle has a unique license plate and stores the owner's contact details.

  Key fields:
  - `make`: The make/brand of the vehicle (e.g., Toyota, Ford).
  - `model`: The model of the vehicle (e.g., Corolla, Mustang).
  - `year`: The year of manufacture.
  - `license_plate`: A unique identifier for the vehicle.
  - `owner_name`: The name of the vehicle owner.
  - `owner_contact`: The contact information of the vehicle owner.

- **Component Model**:
  The `Component` model represents a component used in the maintenance and repair of vehicles. It includes the component's name, its repair and new prices, and the stock available for each component.

  Key fields:
  - `name`: The name of the component (e.g., Engine, Brake Pad).
  - `repair_price`: The cost of repairing the component.
  - `new_price`: The price of the component when purchased new.
  - `stock`: The number of units of the component in stock.

- **ServiceIssue Model**:
  The `ServiceIssue` model represents an issue reported for a vehicle, which can either involve repairing or replacing a component. It records the associated vehicle, the component involved (if any), a description of the issue, the cost, and the date when the service issue was created.

  Key fields:
  - `vehicle`: A foreign key linking to the `Vehicle` model, representing the vehicle that the service issue is associated with.
  - `component`: A foreign key linking to the `Component` model, representing the component involved in the service issue (optional).
  - `is_repair`: A boolean indicating whether the issue is related to a repair (`True`) or replacement (`False`).
  - `description`: A textual description of the service issue.
  - `cost`: The cost associated with the service issue (repair or replacement).
  - `created_at`: The date and time when the service issue was created.

These models represent the key data entities in the system, allowing for vehicle and component management, as well as tracking service issues and their costs.


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





## Technologies Used

•⁠  ⁠*Django*: Backend framework.
•⁠  ⁠*SQLite*: Default database (can be replaced with PostgreSQL/MySQL).
•⁠  ⁠*Matplotlib*: For graph generation in analytics.

## License

This project is open-source and licensed under the [MIT License](LICENSE).