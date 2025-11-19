# Secret Garden

Page url: https://secret-garden-8xo4.onrender.com/

## Hosting Notes on Render

This application is hosted on Render's free plan. Free instances **go to sleep after 15 minutes of inactivity** to save platform resources.

What this means in practice:
- After a period of inactivity, the first request to the app may take **up to a minute** to respond while the instance “wakes up.”
- This is expected behavior for Render's free plan and **is not an issue with the application itself**.

If you need the app to be **always available**:
- Upgrade to a Starter or higher plan on Render.
- Alternatively, set up a **heartbeat/ping** that periodically sends requests to the app to prevent it from sleeping.

## Project Overview

Secret Garden is a simple e-commerce application for garden plants. It allows users to browse products, view details, add items to the cart, and place orders. The backend provides an API for viewing orders.

## Technologies

- **Frontend:** React, Redux, React-Router, Bootstrap
- **Backend:** NestJS, Prisma, MySQL

## How to Run

### Backend

````bash
npm install
npx prisma generate
nest start
````

### Frontend
```bash
cd client
npm install
npm start
````
