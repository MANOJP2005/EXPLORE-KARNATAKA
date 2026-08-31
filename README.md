# 🌴 Explore Karnataka

A responsive full-stack tourism website built with **HTML, CSS, JavaScript** (frontend) and **Node.js, Express, MongoDB** (backend) with JWT authentication.

## ✨ Features
- Responsive design (mobile / tablet / desktop)
- Theme: Forest Green `#0B3D2E` & Royal Gold `#D4AF37`
- Pages: Home, Destinations, Gallery, Contact, Login, Register, Admin
- JWT Auth with bcrypt password hashing
- Role-based redirection (admin vs user)
- Mobile menu toggle, form validation, hover effects

## 📁 Folder Structure
```
explore-karnataka/
├── public/
│   ├── index.html
│   ├── destinations.html
│   ├── gallery.html
│   ├── contact.html
│   ├── login.html
│   ├── register.html
│   ├── admin.html
│   ├── css/style.css
│   ├── js/script.js
│   └── images/
├── server.js
├── package.json
└── .env
```

## 🚀 Setup

1. Rename `backend-package.json` → `package.json` (or copy its contents).
2. Rename `.env.example` → `.env` and edit values.
3. Install dependencies:
   ```bash
   npm install
   ```
4. Make sure MongoDB is running locally (or update `MONGO_URI`).
5. Start the server:
   ```bash
   node server.js
   ```
6. Open: <http://localhost:5000>

## 🔐 Admin Access
Set `ADMIN_EMAIL` in `.env`. When that email registers/logs in, they'll be granted **admin** role and redirected to `admin.html`.

## 📡 API Endpoints
| Method | Endpoint            | Description                |
|--------|---------------------|----------------------------|
| POST   | `/api/register`     | Register a new user        |
| POST   | `/api/login`        | Login & receive JWT token  |
| GET    | `/api/admin`        | Admin-only (Bearer token)  |
