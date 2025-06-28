#  Bus Booking System API

This is a secure and scalable backend API for a Bus Booking System, built using **Node.js**, **Express**, and **MongoDB**, with **JWT Authentication (access + refresh tokens)**.

##  Tech Stack

- **Backend Framework**: Express.js
- **Database**: MongoDB (via MongoDB Atlas)
- **Authentication**: JWT + Refresh Tokens
- **Containerization**: Docker-ready
- **Deployment**: [Render.com](https://render.com)
- **Documentation**: Swagger (OpenAPI 3.0)

---

##  Getting Started

### 1. Clone the repository

git clone https://github.com/KANIMOZHIKALIMUTHU/kmkk-bus-booking-api
cd bus-booking-api

### 2. Authentication

## POST /api/auth/register
Register a new user.
{
  "name": "John",
  "email": "john@example.com",
  "password": "secret123"
}

## POST /api/auth/login
Login and receive access + refresh tokens.
{
  "email": "john@example.com",
  "password": "secret123"
}

## POST /api/auth/refresh
Send refresh token and receive a new access token.
{
  "token": "<refresh_token>"
}

## Admin APIs (Protected)
Requires Bearer <access_token> from an admin user.

1. POST /api/admin/routes
Create a new route.

2. PUT /api/admin/routes/:id
Update a route.

3. DELETE /api/admin/routes/:id
Delete a route.

4. POST /api/admin/buses
Create a new bus.

5. PUT /api/admin/buses/:id
Update a bus.

6. DELETE /api/admin/buses/:id
Delete a bus.

## User APIs (Protected)
Requires Bearer <access_token> from a logged-in user.

1. GET /api/user/buses/search?origin=A&destination=B
Search buses by route.

2. POST /api/user/bookings
Book a seat.

{
  "busId": "<bus_id>",
  "routeId": "<route_id>",
  "date": "2025-07-01"
}

3. DELETE /api/user/bookings/:id
Cancel a booking.

## Project Structure

bus-booking-api/
├── controllers/        # Route handlers
├── models/             # Mongoose models
├── routes/             # Express route files
├── middleware/         # Auth middleware
├── config/db.js        # DB connection logic
├── swagger.yaml        # OpenAPI docs
├── .env                # Environment config (not committed)
└── server.js
