


## 1. Creating Server File & First Express Code

## 2. EJS
it's used to write html & js in one file ,its works like ```JSX``` .```EJS``` used backend or server side while ```jsx``` used cleint side
---

## 3. Comman Status Codes
---
  ```bash
  400 Bad Request
  401 Unauthorized
  404 Not Found
  500 Internal Server Error
  502 Bad Gatway
  503 Servoce Unavailable
  ```
  --- 
 ## 4. Handling Basic Routes
- **Route**: A URL path in your app that performs a specific action.
--- 
 ## 5.Middleware Fundamentals
    is a function that run b/w req and res
--- 
## 6.  Building the CRUD API (Create, Read, Update, Delete)
---
  ## 7.Working with Databases (MongoDB & Mongoose)
MongoDB: NoSQL database that stores data in JSON-like documents.
Mongoose: ODM (Object Data Modeling) library for MongoDB & Node.js.

---
## 8. Error Handling in Express
- **Purpose:** Prevent your app from crashing and give meaningful messages to users.
---
## 9. MVC Pattern (Model-View-Controller)
Purpose: Organize your code so it’s clean and maintainable.
---
## 10. Database Setup (MongoDB)
```bash
Sign up at MongoDB Atlas
Create a Cluster
Create a Database and Collection
Get the connection string and put it in .env as MONGO_URI
Test connection via Mongoose in Express app.
```
---
## 11. Deployment on Vercel
---
## how to use
```bash
npm run dev   
```
---
## my rootes
| Method | Endpoint         | Description           |
| ------ | ---------------- | --------------------- |
| POST   | `/api/users/`    | Create a new user     |
| GET    | `/api/users/`    | Get all users         |
| GET    | `/api/users/:id` | Get single user by ID |
| PUT    | `/api/users/:id` | Update user by ID     |
| DELETE | `/api/users/:id` | Delete user by ID     |


