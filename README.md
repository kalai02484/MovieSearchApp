# 🎬 OMDB Movie Search Application

A full-featured **movie search web application** built using **ReactJS**, **React Router**, and **Tailwind CSS**, powered by the **OMDB API**.  
Users can search movies, filter results, paginate through large datasets, and view detailed movie information.

---

## 🚀 Features

- 🔍 Search movies by title or keyword
- 🎞 Default movies loaded on first render (**Avengers**)
- 🗂 Filter movies by type (Movie / Series / Episode) using **OMDB API parameters**
- 📄 Pagination for large result sets
- 📃 Detailed movie page with full information
- ⚠️ Error handling and empty state handling
- 🎨 Responsive UI using Tailwind CSS
- 🧭 Client-side routing with React Router
- ✨ Animated navbar search bar
- 🔡 Text overflow handling with ellipsis (`...`)

---

## 🛠 Tech Stack

- **ReactJS**
- **React Router DOM**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Tailwind CSS**
- **OMDB API**

---

## 📁 Project Structure

src/
├── api/
│ └── omdbService.js
├── components/
│ ├── Navbar.jsx
│ ├── MovieCard.jsx
│ ├── Pagination.jsx
│ └── FilterDropdown.jsx
├── pages/
│ ├── Home.jsx
│ └── MovieDetails.jsx
├── App.jsx
├── main.jsx
└── index.css


## 🔑 OMDB API Setup

1. Create a free API key from:  
   https://www.omdbapi.com/

2. Create a `.env` file in the root directory:

```env
VITE_OMDB_API_KEY=your_api_key_here
⚠️ Restart the dev server after adding .env

⚙️ Installation & Running the App
bash
Copy code
npm install
npm run dev
The app will run at:


🔍 Search & Filtering Logic
---

Movie search uses the OMDB s parameter

Filtering is done using the OMDB type parameter:

movie

series

episode

✅ No client-side array.filter() is used, as required.


📄 Pagination
---

OMDB returns 10 results per page

Pagination is calculated using totalResults

Users can navigate between pages seamlessly


🎨 UI & UX Enhancements
Tailwind CSS for responsive design

Animated expanding search bar in the navbar

Text overflow handled using ellipsis (...)

Loading states for better user experience


🍿 Happy Coding!

