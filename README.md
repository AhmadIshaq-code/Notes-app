# 📝 Notes App

*"Your digital notebook – organized, secure, and always accessible."*

---

## 📖 About the Project

The **Notes App** is a modern full-stack web application built using the **MERN stack**. It allows users to securely register, log in, and manage their personal notes with a clean and intuitive interface.

The backend, powered by **Node.js**, **Express**, and **MongoDB**, ensures safe authentication through **JWT** and provides APIs for all note operations. The frontend, built with **HTML, CSS, and Vanilla JavaScript**, delivers a simple yet responsive user experience for creating, editing, pinning, and deleting notes.

---

## ✨ Features

* 🔐 **Authentication** – User signup & login secured with JWT tokens
* 📝 **Manage Notes** – Create, edit, update, and delete notes anytime
* 📌 **Pin Notes** – Keep important notes highlighted at the top
* 📱 **Responsive Design** – Works seamlessly across devices
* 💾 **Data Persistence** – Notes stored reliably in MongoDB

---

## 🎯 Purpose

This project is designed as a **learning-by-building exercise** for developers who want to practice **full-stack development**. It demonstrates:

* How to connect a **frontend with a backend API**
* Implementing **JWT authentication** in real apps
* Building and consuming **RESTful APIs**
* Using **MongoDB Atlas** (or local MongoDB) for database storage
* Structuring a project that resembles **real-world applications**

---

## 🛠️ Tech Stack

* **Frontend:** HTML, CSS, JavaScript
* **Backend:** Node.js, Express.js
* **Database:** MongoDB (Atlas / Local)
* **Authentication:** JWT (JSON Web Token)

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/notes-app.git
cd notes-app
```

### 2. Install backend dependencies

```bash
npm install
```

### 3. Setup environment variables

Create a `.env` file in the root directory and add:

```
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run the server

```bash
npm start
```

The backend will run on **[http://localhost:3000](http://localhost:3000)**

### 5. Open the app

Simply open `public/index.html` in your browser to access the frontend.

---

## 📷 Preview

### 🔑 Login & Signup

![Auth Screenshot](https://via.placeholder.com/600x300.png?text=Signup+%26+Login+Page)

### 📝 Notes Dashboard

![Notes Screenshot](https://via.placeholder.com/600x300.png?text=Notes+Dashboard)

---

## 🤝 Contributing

Contributions are welcome! To contribute:

1. Fork the project
2. Create a new branch (`feature/your-feature`)
3. Commit and push your changes
4. Open a Pull Request 🎉

---

## 📜 License

Distributed under the **MIT License**.

---

💡 *This app is a step towards mastering full-stack development, with a balance of simplicity and real-world functionality.*
