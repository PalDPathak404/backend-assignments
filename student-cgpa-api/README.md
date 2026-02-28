# Student CGPA API

**Deployed API (Render):**  
https://backend-assignments-tpe5.onrender.com  

**Postman Documentation:**  
https://documenter.getpostman.com/view/50839228/2sBXcGCeE9  

---

## Overview

Student CGPA API is a RESTful backend service built using **Express.js** that manages student academic performance records using an **in-memory JSON array**.

This project was developed strictly according to the assignment requirements:

- Uses only **GET methods**
- Implements both **static and dynamic routes**
- Follows RESTful design principles
- Returns appropriate HTTP status codes
- Does not use any external database

All student data is stored within the application as a JSON array.~

---

## Objective

The objective of this project is to:

- Design REST-compliant GET endpoints  
- Implement both static and parameterized routes  
- Perform server-side filtering and aggregation  
- Return structured JSON responses  
- Handle error scenarios correctly  
- Deploy and document a backend API professionally  

---

## Data Model

Each student record follows the structure below:

```json
{
  "id": 1,
  "name": "Aditya",
  "branch": "CSE",
  "semester": 6,
  "cgpa": 8.4
}
```
A minimum of 8+ records are maintained in memory for testing and demonstration.

## Implemented Routes

This API contains six REST-compliant GET endpoints, including both static and dynamic routes.

Each request is documented individually in the Postman collection with:

- Purpose and description
- Expected status codes
- Sample responses
- Example usage

The API strictly follows REST design principles and returns structured JSON responses with appropriate HTTP status codes.

### Static Routes

**1. GET /students** 

Returns the complete list of students.  
**Status:** 200 OK

**2. GET /students/topper**  

Returns the student with the highest CGPA.  
**Logic Used:** Array.reduce()  
**Status:** 200 OK  
If no students exist → 404 Not Found

**3. GET /students/average**  

Returns the average CGPA of all students.  
**Logic Used:** Aggregation using Array.reduce()  
**Status:** 200 OK  

Example Response:
```bash
{
"averageCGPA": 8.12
}
```

**4. GET /students/count**  

Returns the total number of students.  
**Status:** 200 OK  

Example Response:
```bash
{
"totalStudents": 10
}
```

### Dynamic Routes

**1. GET /students/:id**  

Returns a student by their unique ID.  
**Concepts Used:** Route parameters (req.params), error handling  
If found → 200 OK  
If not found → 404 Not Found  

Example Error Response:
```bash
{
"message": "Student not found"
}
```

**2. GET /students/branch/:branchName** 

Returns all students belonging to a specific branch.  
**Concepts Used:** Filtering using Array.filter(), case-insensitive matching  
If no students match:  
- Returns empty array []  
- Status: 200 OK (REST-friendly design)

## Design Decisions

- Only GET routes were implemented as required.
- Branch filtering is case-insensitive.
- /students/topper returns 404 if no data exists.
- Other empty results return 200 OK with empty arrays.
- All responses are structured JSON.
- Proper HTTP status codes are consistently applied.
- No blocking operations are used.

## Technologies Used

- Node.js
- Express.js
- express.json() middleware
- CORS middleware
- In-memory JSON data storage

## Running the Project Locally

```bash
# Clone the repository
git clone https://github.com/yourusername/student-cgpa-api.git

# Navigate into the project folder
cd student-cgpa-api

# Install dependencies
npm install

# Start development server
npm run dev
```

Server runs at:  
**http://localhost:5000**

## Deployment

The API is deployed on Render and publicly accessible via the link provided at the top of this document.

The deployment:

- Uses environment-based port configuration
- Avoids hardcoded localhost references
- Is configured for public access

## Learning Outcomes

Through this project:

- Designed RESTful GET-only endpoints
- Implemented static and dynamic routing
- Used route parameters effectively
- Applied filtering, aggregation, and transformation logic
- Returned consistent and structured JSON responses
- Handled error scenarios with correct HTTP status codes
- Deployed backend API professionally
- Documented the API using Postman
