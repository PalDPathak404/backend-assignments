# E-Commerce Product API

A RESTful API for managing product inventory in an e-commerce system. Provides comprehensive functionality for browsing, searching, and managing product data including pricing, stock levels, and customer ratings.

## Overview

The E-Commerce Product API is built with Node.js and Express, offering a robust backend solution for e-commerce platforms. It supports complete CRUD operations on product data and includes category-based filtering capabilities.

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

### Get All Products

Retrieve a complete list of all available products.

**Request:**
```
GET /products
```

**Response:** (200 OK)
```json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  },
  {
    "id": 2,
    "name": "Running Shoes",
    "category": "Footwear",
    "price": 2499,
    "stock": 40,
    "rating": 4.5
  },
  {
    "id": 3,
    "name": "Laptop Stand",
    "category": "Accessories",
    "price": 999,
    "stock": 30,
    "rating": 4.2
  }
]
```

### Get Product by ID

Retrieve detailed information about a specific product using its ID.

**Request:**
```
GET /products/:id
```

**Parameters:**
- `id` (required): The unique identifier of the product

**Response:** (200 OK)
```json
{
  "id": 1,
  "name": "Wireless Mouse",
  "category": "Electronics",
  "price": 799,
  "stock": 25,
  "rating": 4.3
}
```

**Error Response:** (404 Not Found)
```json
{
  "message": "Product not found"
}
```

### Get Products by Category

Filter and retrieve all products within a specific category.

**Request:**
```
GET /products/category/:categoryName
```

**Parameters:**
- `categoryName` (required): The product category name (case-insensitive)

**Response:** (200 OK)
```json
[
  {
    "id": 1,
    "name": "Wireless Mouse",
    "category": "Electronics",
    "price": 799,
    "stock": 25,
    "rating": 4.3
  },
  {
    "id": 4,
    "name": "Smart Watch",
    "category": "Electronics",
    "price": 4999,
    "stock": 12,
    "rating": 4.4
  }
]
```

**Response:** (200 OK - Empty result)
```json
[]
```

### Create New Product

Add a new product to the inventory.

**Request:**
```
POST /products
Content-Type: application/json

{
  "name": "USB-C Cable",
  "category": "Accessories",
  "price": 299,
  "stock": 100,
  "rating": 4.6
}
```

**Response:** (201 Created)
```json
{
  "id": 6,
  "name": "USB-C Cable",
  "category": "Accessories",
  "price": 299,
  "stock": 100,
  "rating": 4.6
}
```

### Update Product

Update information for an existing product.

**Request:**
```
PUT /products/:id
Content-Type: application/json

{
  "name": "Wireless Mouse Pro",
  "category": "Electronics",
  "price": 899,
  "stock": 20,
  "rating": 4.5
}
```

**Parameters:**
- `id` (required): The unique identifier of the product

**Response:** (200 OK)
```json
{
  "id": 1,
  "name": "Wireless Mouse Pro",
  "category": "Electronics",
  "price": 899,
  "stock": 20,
  "rating": 4.5
}
```

**Error Response:** (404 Not Found)
```json
{
  "message": "Product not found"
}
```

## Data Model

Each product object contains the following properties:

| Property | Type | Description |
|----------|------|-------------|
| id | number | Unique identifier for the product |
| name | string | Product name or title |
| category | string | Product category classification |
| price | number | Product price in local currency units |
| stock | number | Available quantity in inventory |
| rating | number | Customer rating (typically 0-5 scale) |

## Available Categories

The following product categories are available:

- Electronics
- Footwear
- Accessories
- Fashion

## HTTP Status Codes

- `200 OK`: Successful GET or PUT request
- `201 Created`: Successful POST request with new resource created
- `404 Not Found`: Requested resource does not exist
- `400 Bad Request`: Invalid request parameters or body

## CORS Configuration

CORS is enabled for all origins. Modify the CORS middleware configuration in `index.js` to restrict access as needed.

## Example Usage with cURL

```bash
# Get all products
curl http://localhost:3000/products

# Get product with ID 1
curl http://localhost:3000/products/1

# Get all electronics products
curl http://localhost:3000/products/category/electronics

# Create a new product
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Mechanical Keyboard",
    "category": "Electronics",
    "price": 5999,
    "stock": 15,
    "rating": 4.7
  }'

# Update an existing product
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Wireless Mouse Pro",
    "category": "Electronics",
    "price": 899,
    "stock": 20,
    "rating": 4.5
  }'
```

## Learning Outcomes

After working through this API project, you will have gained understanding of:

- Building RESTful APIs using Express.js framework
- Implementing complete CRUD operations for inventory management
- Creating filtered endpoints for category-based product retrieval
- Structuring HTTP requests and error responses with proper status codes
- Handling JSON data in API communication
- Applying middleware for CORS and request parsing
- Implementing route parameters and filtering logic
- Data persistence patterns in in-memory storage
- API error handling and validation strategies
- Designing scalable API endpoint structures
- API documentation and Postman integration practices
- Testing API endpoints with cURL commands
- Building real-world e-commerce backend functionality

