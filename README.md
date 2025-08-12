# 🗝️ Login & Registration Website

A simple web-based login and registration system built with **HTML**, **CSS**, and **JavaScript**.  
User credentials are stored in **localStorage**, allowing registered users to log in without a database.  

---

## 📌 Features
- 🔐 **User Registration** – Create a new account with email and password.  
- ✅ **Login Authentication** – Checks credentials from localStorage.  
- ⚠ **Validation Alerts** – Displays messages for invalid inputs or unregistered users.  
- 📂 **LocalStorage Integration** – Saves and retrieves user data locally.  
- 🎨 **Responsive Design** – Clean and simple UI.  

---

## 🛠️ Technologies Used
- **HTML5** – Structure  
- **CSS3** – Styling  
- **JavaScript (ES6)** – Logic & validation  
- **localStorage** – Client-side data storage  

---

## 📂 Project Structure

📦 login-registration
┣ 📜 index.html # Login page
┣ 📜 register.html # Registration page
┣ 📜 style.css # Styling
┣ 📜 script.js # Login functionality
┣ 📜 register.js # Registration functionality
┗ 📜 README.md # Project documentation



---

## 🚀 How to Use
1. **Clone the Repository**
   ```bash
   git clone https://github.com/eman12355/login-registration.git

2. Open in Browser

Open register.html to create a new account.

Open index.html to log in using your credentials.

3. Login Process

If the email & password match stored credentials → Login successful.

If not found → Displays an alert asking to register first.


⚡ Future Improvements

Replace localStorage with backend API for real authentication.

Add password encryption.

Implement forgot password feature.
