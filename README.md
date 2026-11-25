# MERN Food Ordering Application

A full-stack learning project with a customer-facing React application, a separate React admin interface and an Express/MongoDB API.

## Architecture

| Directory | Responsibility |
|---|---|
| `frontend/` | Customer application: menu/home, cart, checkout, payment verification and orders |
| `admin/` | Admin application: add/list food items and manage orders |
| `backend/` | Express routes/controllers for users, food, carts and orders; Mongoose models and Stripe integration code |

**Stack:** React, Vite, React Router, Axios, Node.js, Express, MongoDB/Mongoose, JWT, bcrypt, Multer and Stripe.

## Run locally

Install Node.js/npm and provide a development MongoDB database. Copy `backend/.env.example` to `backend/.env` and configure your own values. Keep `.env` out of Git.

```sh
cd backend
npm ci
npm run server
```

In separate terminals:

```sh
cd frontend
npm ci
npm run dev
```

```sh
cd admin
npm ci
npm run dev
```

Check the frontend/admin API base URLs and the payment-return URL in the order controller against your local ports. Those values currently need deployment-specific configuration.

## Review notes

- Use a Stripe **test** key and test payments only. This repository is not a claim of production payment readiness.
- The MongoDB connection is read from `MONGODB_URI`. A previously committed database credential must be rotated by its owner; removing it from the current file does not remove it from old commits.
- The application has not been re-run or payment-tested as part of the README update. Review authorization, validation and deployment settings before exposing it publicly as a service.

This project demonstrates the separation of customer UI, admin UI and API/data layers. See the source directories for the implemented flows.
