
# 🚛 moveKenya

**moveKenya** is a modern, web-based platform for booking professional moving services across Kenya. Whether it's home relocation, office moving, pet transport, fragile items, or hazardous material handling, moveKenya offers users an intuitive interface with real-time features, dynamic vehicle recommendations, live chat with drivers, and seamless booking.

---
## ✅ Prerequisite: Node.js

Before running this project, make sure you have **Node.js** installed.

Node.js is required to:

- Run the backend server (`server.js`)
- Use `npm` to install project dependencies

### 🔍 How to Check if Node.js is Installed

Open your terminal or command prompt and run:

```bash
node -v
```

If you see something like:

```
v18.16.0
```

✅ Node.js is installed correctly.

### ❌ If Node.js Is Not Installed

Download it from the official website:  
👉 [https://nodejs.org](https://nodejs.org)

> ✅ Recommended: Download the **LTS version** (Long-Term Support) for better compatibility.

---

## ⚙️ Setup Instructions

Follow these steps to run the project locally:

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/moveKenya.git
cd moveKenya
```

### 2. Install Dependencies
Install required backend packages:
```bash
npm install
```

> This installs all packages listed in `package.json`, including Express and WebSocket support.

### 3. Start the Server
Launch the backend server:
```bash
node server.js
```

> By default, the server runs at: [http://localhost:3000](http://localhost:3000)

### 4. Open in Browser
Once the server is running, navigate to:
```
http://localhost:3000
```

> You should now see the moveKenya homepage.

---

## 🚀 Features

- 🏠 **Service Selection**  
  Choose from services like Home Relocation, Office Moving, Pet Transport, Fragile Item Handling, Hazardous Materials, and more.

- 📍 **Mapbox Location Autofill**  
  Enter pickup and drop-off locations with smart location suggestions powered by the Mapbox API.

- 🚚 **Vehicle Recommendation System**  
  Based on the service type and number of rooms, moveKenya suggests the most suitable vehicle options for your move.

- 💰 **Live Price Calculation**  
  Charges are calculated in real-time based on the service, room count, vehicle type, and optional item selections.

- 💬 **Real-Time Chat with Driver**  
  After booking, users can click on the **chat icon on the input element** to open a chat window and communicate with the driver.  
  - The chat feature is real-time, powered by WebSockets.  
  - Functional on both the user page and driver page.

- 🧾 **Session Storage for Booking Details**  
  - Booking information is temporarily stored in the browser's `sessionStorage`.  
  - The key is set using the user's name.  
  - To view it: Open DevTools → Application tab → sessionStorage.

- ✅ **Booking Confirmation**  
  A summary popup appears before submission, showing all selected services, vehicle, and charges for final review.

---

## 👨‍✈️ Driver Pages Overview

- **Functional Driver Page** (`/driver.html`)  
  A basic, unstyled driver page used during development to test the chat system. Only includes the chat functionality.

- **Final Driver UI Page** (`/index.html`)  
  Represents the actual styled interface that drivers will eventually use. Contains layout elements like profile, vehicle info, booking summary area, etc.

# Driver Page Access Instructions

### 📄 Notes for Accessing Driver Pages:

- ✅ If you want to visit the functional driver page, use: [http://localhost:3000/driver.html](http://localhost:3000/driver.html)

- 🎨 If you want to visit the UI version of the driver page, use: [http://localhost:3000/index.html](http://localhost:3000/index.html)

---

## 🛠 Technologies Used

- **Node.js & Express** – Backend server and routing
- **HTML, CSS, JavaScript** – Frontend interface
- **WebSocket (`ws`)** – Real-time communication (chat between driver and user)
- **Mapbox API** – Geocoding and location autofill
- **Browser `sessionStorage`** – Temporary storage of booking details
  - Key format: Based on user’s name
  - Can be viewed in DevTools > Application > sessionStorage
- **Modular JavaScript Structure** – Organized JS logic into separate files/modules

---

## 🔐 Environment Variables (`.env`)

If you are using **Mapbox** in the backend (Node.js), store your API token in a `.env` file:

### Example:
```
MAPBOX_TOKEN=pk.your_mapbox_token_here
```

Then, in your `server.js`:
```js
require('dotenv').config();
const token = process.env.MAPBOX_TOKEN;
```

> 🔸 Note: If you're using Mapbox **in your HTML** (`booking.html`, `tracking.html`), you must paste the token directly in the `<script>` since `.env` does not work in frontend files.

---


## 📝 Developer Notes

- You **must run** `npm install` before launching the server.
- Ensure **Node.js** is installed (version 14 or higher recommended).
- All booking and chat logic is tied to both frontend interactivity and backend WebSocket support.
- Use browser DevTools to monitor:
  - Real-time WebSocket chat messages
  - Stored session data in `sessionStorage`

---

