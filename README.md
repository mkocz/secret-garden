# Secret Garden

Page url: https://secret-garden-production.up.railway.app

## Project Overview

Secret Garden is a simple e-commerce application for garden plants. It allows users to browse products, view details, add items to the cart, and place orders. The backend provides an API for viewing orders.

## Technologies

- **Frontend:** React, Redux, React-Router, Bootstrap
- **Backend:** NestJS, Prisma, MySQL

## How to Run

### Database (PostgreSQL)

````bash
1. Create an empty PostgreSQL database (e.g. `shop_db`)
2. Configure the database connection in the `.env` file:

DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/shop_db"

3. Make sure your PostgreSQL server is running
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
