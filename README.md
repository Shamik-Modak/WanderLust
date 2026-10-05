# 🌍 WanderLust

A full-stack travel accommodation platform where users can discover, create, manage, and review travel listings.

WanderLust provides an interactive platform for travelers to explore places, view detailed listings, share their own properties, and leave ratings and reviews.

## 🚀 Live Demo

🔗 **Live Website:** (https://wanderlust-2ltb.onrender.com)

---

## ✨ Features

### 🔐 Authentication & Authorization

* User registration and login
* Secure session-based authentication
* Protected routes for authenticated users
* Authorization checks for listing and review management
* Users can manage only their own listings/reviews

### 🏠 Listings

* Browse all available listings
* View detailed information about a listing
* Create new listings
* Edit existing listings
* Delete listings
* Upload listing images
* Cloudinary-based image storage

### 🔎 Search & Filtering

* Filter listings based on categories
* Easy navigation through available properties
* Responsive listing cards and detailed pages

### ⭐ Reviews & Ratings

* Add reviews to listings
* Give ratings to listings
* Display reviews on listing pages
* Delete reviews
* Rating validation

### 🎨 Responsive UI

* Responsive design for different screen sizes
* Clean and intuitive navigation
* Reusable EJS components
* Navbar and footer partials

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap
* EJS
* EJS-Mate

### Backend

* Node.js
* Express.js

### Database

* MongoDB
* MongoDB Atlas

### Authentication

* Passport.js
* Express Session

### Image Storage

* Cloudinary

### Other Tools

* Mongoose
* Method-Override
* Joi
* Connect-Mongo
* Dotenv
* Git & GitHub

---

## 📂 Project Structure

```text
WanderLust/
│
├── controllers/
│   ├── listings.js
│   ├── reviews.js
│   └── users.js
│
├── models/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── routes/
│   ├── listing.js
│   ├── review.js
│   └── user.js
│
├── views/
│   ├── layouts/
│   │   └── boilerplate.ejs
│   │
│   ├── includes/
│   │   ├── navbar.ejs
│   │   ├── footer.ejs
│   │   └── flash.ejs
│   │
│   ├── listings/
│   ├── users/
│   └── error.ejs
│
├── public/
│   ├── css/
│   └── js/
│
├── utils/
│   ├── ExpressError.js
│   └── wrapAsync.js
│
├── init/
│   └── data.js
│
├── app.js
├── middleware.js
├── schema.js
├── package.json
├── package-lock.json
└── README.md
```

> The exact folder structure may vary depending on the current version of the project.

---

## ⚙️ Getting Started

Follow these steps to run WanderLust locally.

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
```

### 2. Navigate into the project

```bash
cd WanderLust
```

### 3. Install dependencies

```bash
npm install
```

### 4. Configure environment variables

Create a `.env` file in the root directory:

```env
ATLASDB_URL=your_mongodb_connection_string

SECRET=your_session_secret

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API_KEY=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret
```

⚠️ **Never commit your `.env` file to GitHub.**

Make sure `.env` is included in `.gitignore`.


