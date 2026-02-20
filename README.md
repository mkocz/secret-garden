# Secret Garden

Page url: https://secret-garden-8xo4.onrender.com/

## Hosting Notes on Render

This application is hosted on Render's free plan. Free instances **go to sleep after 15 minutes of inactivity** to save platform resources.

What this means in practice:
- After a period of inactivity, the first request to the app may take **up to a minute** to respond while the instance “wakes up.”
- This is expected behavior for Render's free plan and **is not an issue with the application itself**.

## Project Overview

Secret Garden is a simple e-commerce application for garden plants. It allows users to browse products, view details, add items to the cart, and place orders. The backend provides an API for viewing orders.

## Technologies

- **Frontend:** React, Redux, React-Router, Bootstrap
- **Backend:** NestJS, Prisma, MySQL

## How to Run

### Database (MySQL)

````bash
1. Create an empty MySQL database (e.g. `shop_db`)
2. Configure the database connection in the `.env` file:

DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/shop_db"

3. Make sure your MySQL server is running
````

### Backend

````bash
npm install
npx prisma generate
npx prisma migrate dev
npx prisma db seed
nest start
````

### Frontend
```bash
cd client
npm install
npm start
````
