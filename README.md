# 🧑‍🔧 Helpers Hub

Helpers Hub is a cross-platform mobile application built using **React Native (Expo)** that allows users to easily **book appointments** with local professionals such as **doctors, plumbers, electricians, hairdressers, teachers, and more** — all in one place.

---

## 🚀 Features

- 🔐 **User Authentication** – Secure login and signup using backend API.
- 🧾 **Booking System** – Book and manage appointments with professionals.
- 💬 **Real-Time Updates** – Get instant confirmation and notifications.
- 📍 **Location-Based Search** – Find professionals near your area.
- 💼 **Admin Dashboard** – Admins can manage users, services, and bookings.
- 🖼️ **Image Upload Support** – Professionals can add profile pictures and service images.
- 📅 **Appointment Tracking** – Users can view booking history and upcoming schedules.

---

## 🏗️ Tech Stack

### **Frontend (Mobile App)**
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/) for API requests

### **Backend**
- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/) for database
- [ImageKit](https://imagekit.io/) for image upload and CDN support

---

## ⚙️ Installation & Setup

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/Shreyansh95095/Helper-Hub-Project.git

```

### **2️⃣ Install dependencies**
- Navigate to your project folder:
```bash
cd Helper-Hub-Project
```

- Install the required packages:
```bash
npm install
```

### **3️⃣ Start the Expo app**
```bash
npx expo start
or
npm start
```
### **4️⃣ Setup Backend**
- If your backend folder exists in the same project:
```bash
cd Helper_Hub_Back
npm install
npm start
```

- Make sure your .env file includes the following:
```bash 
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=helper_hub
PORT=5000
PUBLIC_KEY=your_imagekit_public_key
PRIVATE_KEY=your_imagekit_private_key
```

### **📱 Screens (Preview)**

- 🔑 Login & Signup Screens

- 🏠 Home Page showing available professionals

- 📅 Booking Page

- 👤 Profile Page

- ⚙️ Admin Dashboard

### **📂 Folder Structure**
```bash
Helper-Hub-Project/
│
├── Helper_Hub_Expo/        # React Native frontend
│   ├── app/                # Screens and navigation
│   ├── assets/             # Images and icons
│   ├── components/         # UI components
│   ├── constants/          # Global constants
│   └── utils/              # Helper functions
│
├── Helper_Hub_Back/        # Node.js + Express backend
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── models/             # MySQL models
│   └── config/             # DB and environment setup
│
└── README.md
```

### **🧠 Future Enhancements**

- 🌐 Google Maps integration for real-time professional tracking

- 🔔 Push notifications for bookings

- 💳 Payment gateway integration

- ⭐ User ratings and reviews

### **👨‍💻 Author**

Shreyansh Upadhye
- 📧 shreyansh95095@gmail.com
- 📝 LinkedIn: https://www.linkedin.com/in/shreyansh-upadhye-a4b4661b0/
- 🔗 GitHub Profile: https://github.com/Shreyansh95095


