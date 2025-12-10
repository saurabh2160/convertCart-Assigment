# convertCart-Assignment  
Simple backend service that allows users to search for restaurants based on a dish name.

---

# 📌 Restaurant Dish Search API

A simple **Node.js + MySQL** backend that allows users to search for restaurants by dish name, with a **mandatory price range filter**, and returns the **top restaurants where that dish is ordered the most**.

---

# 🚀 Features

- Search restaurants by **dish name**
- Mandatory **minPrice / maxPrice** filter
- Returns **top 10 restaurants**
- Shows:
  - Restaurant details  
  - Dish name  
  - Dish price  
  - Total order count
- Clean SQL queries (**No ORM**)
- Railway-compatible deployment
- Includes **seed script** & setup instructions

---

# 🛠️ Tech Stack

- **Node.js 20**
- **Express.js**
- **MySQL (mysql2 driver)**

---

# 📂 Folder Structure

src/
│── config/
│ └── db.js
│── routes/
│ └── routes.js
│── controllers/
│ └── search.js
│── seed/
│ └── seed.js
│── app.js
│
├── .env.example
├── package.json
└── README.md

# 🔍 API Documentation
##  GET /search/dishes
| Name     | Required | Example |
| -------- | -------- | ------- |
| name     | Yes      | biryani |
| minPrice | Yes      | 150     |
| maxPrice | Yes      | 300     |


# 🙌 Author

## Saurabh Manohar
Backend Developer