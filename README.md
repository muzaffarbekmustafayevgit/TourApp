# TourApp

**TourApp** is an interactive web application that allows users to search, explore, and view historical places along with their geolocation on a map. The app also supports user accounts, favorite places, and dark/light theme switching.

---

## 🛠️ Technologies

- **Frontend:** React 18 + Vite  
- **Styling:** TailwindCSS (via CDN)  
- **State Management:** React Context (Auth, Theme)  
- **Routing:** react-router-dom v7  
- **API Requests:** Axios / Fetch  
- **Optional:** Mapbox or Google Maps API for place geolocation  

---

## ⚡ Features

1. **User Account:**
   - Login / Register
   - Profile management & favorite places

2. **Historical Places Search:**
   - Display places in card layout
   - Image gallery
   - Map and geolocation

3. **Dark / Light Theme:**
   - Managed with React Context + persisted in localStorage

4. **Protected Routes:**
   - Restrict access to certain pages for non-logged-in users

---

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/muzaffarbekmustafayevgit/TourApp.git
cd TourApp
````

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

5. Preview the production build:

```bash
npm run preview
```

---

## 📂 Project Structure (Main)

```
TourApp/
│
├── public/
│   └── images/           # Static images and loader files
│
├── src/
│   ├── assets/           # Icons, images, global CSS
│   ├── components/       # Navbar, Footer, SearchBar, LocationCard, etc.
│   ├── pages/            # Home, Login, Register, Search, PlaceDetails, Profile
│   ├── routes/           # AppRouter.jsx
│   ├── services/         # API requests
│   ├── hooks/            # useAuth, useTheme
│   ├── utils/            # Helper functions
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── package.json
└── tailwind.config.js
```

---

## 📌 Notes

* **React Compiler** is enabled in this Vite template, which may affect development and build performance.
* It is recommended to persist dark/light mode and user auth state in **localStorage**.
* For larger production apps, consider integrating **TypeScript** and ESLint for type-aware linting.

---

## 📚 Useful Links

* [React Official Docs](https://react.dev/)
* [Vite Official Docs](https://vite.dev/)
* [TailwindCSS Docs](https://tailwindcss.com/docs)
* [React Router v7 Docs](https://reactrouter.com/en/main)

