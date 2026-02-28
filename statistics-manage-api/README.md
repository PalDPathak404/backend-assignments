# Statistics Management API

A RESTful API for managing and retrieving statistics about Indian states, including population, literacy rates, annual budgets, and GDP information.

## Overview

The Statistics Management API provides comprehensive endpoints for performing CRUD operations on state data. It leverages Node.js with Express framework and includes CORS support for cross-origin requests.

## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js (v5.2.1)
- **Middleware**: CORS (v2.8.6)

## Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server:

```bash
npm start
```

The server will run on `http://localhost:3000` by default.

## API Endpoints

### Get All States

Retrieve a list of all states with their complete information.

**Request:**
```
GET /states
```

**Response:** (200 OK)
```json
[
  {
    "id": 1,
    "name": "Gujarat",
    "population": 63872399,
    "literacyRate": 78.03,
    "annualBudget": 243965,
    "gdp": 21000000
  },
  {
    "id": 2,
    "name": "Goa",
    "population": 1458545,
    "literacyRate": 88.70,
    "annualBudget": 25000,
    "gdp": 800000
  }
]
```

### Get State by ID

Retrieve information about a specific state using its ID.

**Request:**
```
GET /states/:id
```

**Parameters:**
- `id` (required): The unique identifier of the state

**Response:** (200 OK)
```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 63872399,
  "literacyRate": 78.03,
  "annualBudget": 243965,
  "gdp": 21000000
}
```

**Error Response:** (404 Not Found)
```json
{
  "message": "State not found"
}
```

### Get State with Highest GDP

Retrieve the state with the highest GDP value.

**Request:**
```
GET /states/highest-gdp
```

**Response:** (200 OK)
```json
{
  "id": 7,
  "name": "Tamil Nadu",
  "population": 72147030,
  "literacyRate": 80.09,
  "annualBudget": 300000,
  "gdp": 22000000
}
```

### Create New State

Add a new state to the database.

**Request:**
```
POST /states
Content-Type: application/json

{
  "name": "Madhya Pradesh",
  "population": 72597565,
  "literacyRate": 69.32,
  "annualBudget": 200000,
  "gdp": 11000000
}
```

**Response:** (201 Created)
```json
{
  "id": 9,
  "name": "Madhya Pradesh",
  "population": 72597565,
  "literacyRate": 69.32,
  "annualBudget": 200000,
  "gdp": 11000000
}
```

### Update State

Update information for an existing state.

**Request:**
```
PUT /states/:id
Content-Type: application/json

{
  "name": "Gujarat",
  "population": 64000000,
  "literacyRate": 78.50,
  "annualBudget": 250000,
  "gdp": 21500000
}
```

**Parameters:**
- `id` (required): The unique identifier of the state

**Response:** (200 OK)
```json
{
  "id": 1,
  "name": "Gujarat",
  "population": 64000000,
  "literacyRate": 78.50,
  "annualBudget": 250000,
  "gdp": 21500000
}
```

**Error Response:** (404 Not Found)
```json
{
  "message": "State not found"
}
```

## Data Model

Each state object contains the following properties:

| Property | Type | Description |
|----------|------|-------------|
| id | number | Unique identifier for the state |
| name | string | Name of the state |
| population | number | Total population of the state |
| literacyRate | number | Literacy rate percentage |
| annualBudget | number | Annual budget in millions |
| gdp | number | Gross Domestic Product in millions |

## HTTP Status Codes

- `200 OK`: Successful GET or PUT request
- `201 Created`: Successful POST request with new resource created
- `404 Not Found`: Requested resource does not exist
- `400 Bad Request`: Invalid request parameters or body

## CORS Configuration

CORS is enabled for all origins. Modify the CORS middleware configuration in `index.js` to restrict access as needed.

## Example Usage with cURL

```bash
# Get all states
curl http://localhost:3000/states

# Get state with ID 1
curl http://localhost:3000/states/1

# Get state with highest GDP
curl http://localhost:3000/states/highest-gdp

# Create a new state
curl -X POST http://localhost:3000/states \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Telangana",
    "population": 35194116,
    "literacyRate": 66.50,
    "annualBudget": 175000,
    "gdp": 9500000
  }'

# Update an existing state
curl -X PUT http://localhost:3000/states/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Gujarat",
    "population": 64000000,
    "literacyRate": 78.50,
    "annualBudget": 250000,
    "gdp": 21500000
  }'
```

## License

ISC

## Author

Backend Assignments Team
