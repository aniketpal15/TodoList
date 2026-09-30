# 📋 TodoList — Modern Task Management App

[![Live Demo](https://img.shields.io/badge/LIVE%20DEMO-TODO--LIST--THETA--LYART.VERCEL.APP-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://todo-list-theta-lyart.vercel.app/)
[![React 19](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![GitHub Repository](https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/aniketpal15/TodoList)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

An interactive, sleek, and modern To-Do List web application built with **React 19**, **Vite**, and **Framer Motion**. Designed with a modern glassmorphism aesthetic, ambient glow background animations, dark/light theme switching, dynamic progress tracking, and instant LocalStorage persistence.

[![Live Demo](https://img.shields.io/badge/%F0%9F%94%97%20Live%20Demo-https%3A%2F%2Ftodo--list--theta--lyart.vercel.app%2F-0070f3?style=for-the-badge)](https://todo-list-theta-lyart.vercel.app/)

---

## ✨ Features

- 🎯 **Interactive Task Management**: Add, complete, and delete tasks with smooth visual transitions.
- ✏️ **Inline Double-Click Editing**: Double-click any task text to edit in-place with auto-focus. Press <kbd>Enter</kbd> or click outside to save, or <kbd>Esc</kbd> to cancel.
- 📊 **Dynamic Progress Bar**: Live completion percentage calculation based on active tasks.
- 🔍 **Filter Controls**: Switch seamlessly between **All**, **Active**, and **Completed** views with customized empty states.
- 🌓 **Theme Switcher**: Instant toggle between Dark and Light mode. Automatically syncs with system theme preference and remembers your choice in `localStorage`.
- 💾 **Persistent Storage**: All tasks and preferences stay saved in browser `localStorage` across sessions.
- 🧹 **Batch Actions**: One-click **Clear Completed** button to tidy up your workspace.
- 🎨 **Modern Aesthetics**: Glowing animated gradient background blobs, glassmorphic card effects, and clean micro-interactions.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **[React 19](https://react.dev/)** | Modern component-based UI library |
| **[Vite 8](https://vitejs.dev/)** | Ultra-fast development server & optimized production bundler |
| **[Framer Motion](https://www.framer.com/motion/)** | Smooth animations & fluid UI state transitions |
| **[UUID](https://github.com/uuidjs/uuid)** | Unique identification for todos |
| **CSS3** | Modern vanilla CSS, glassmorphism, responsive grid & flexbox |

---

## 📂 Project Structure

```bash
TodoList/
├── public/                # Static public assets
├── src/
│   ├── assets/            # Project icons and imagery
│   ├── App.css            # Root app layout styles
│   ├── App.jsx            # Main app container
│   ├── Todo.css           # Glassmorphism, animations & theme styles
│   ├── Todo.jsx           # Core Todo logic, filters & progress bar
│   ├── index.css          # Base global reset & font definitions
│   └── main.jsx           # React DOM root entry
├── index.html             # HTML entry point
├── package.json           # Dependencies and project scripts
├── vite.config.js         # Vite configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine:

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) and **npm** installed on your system.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aniketpal15/TodoList.git
   cd TodoList
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`.

### Production Build

To build the static assets for production:

```bash
npm run build
```

You can preview the built production bundle locally using:

```bash
npm run preview
```

---

## 🌐 Deployment to Vercel

### Option 1: Automatic Deployment via GitHub (Recommended)

1. Push your code to your GitHub repository:
   ```bash
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/) and sign in.
3. Click **"Add New..."** → **"Project"**.
4. Import your **`TodoList`** repository from GitHub.
5. Keep default settings (`Framework Preset: Vite`, `Build Command: vite build`, `Output Directory: dist`).
6. Click **Deploy**. Vercel will automatically build and deploy your app with continuous deployment on every push.

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Log in and deploy
vercel

# Deploy directly to production
vercel --prod
```

---

## 📝 Keyboard Shortcuts

| Shortcut | Action |
| :--- | :--- |
| <kbd>Enter</kbd> (in task input) | Add new task |
| Double-Click (on task item) | Enter edit mode |
| <kbd>Enter</kbd> (in edit mode) | Save edited task |
| <kbd>Esc</kbd> (in edit mode) | Cancel edit |

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

Made with ❤️ by [Aniket Pal](https://github.com/aniketpal15)
