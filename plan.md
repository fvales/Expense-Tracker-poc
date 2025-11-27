# 💸 Expense Tracker (React + TypeScript + Rsbuild + MUI)

A modern, frontend-only **Expense Tracker Application** built with **React 19**, **TypeScript**, and **MUI**, powered by **LocalStorage** for persistence.  
This is a POC-level application built to demonstrate clean architecture, modular componentization, and a scalable design system — suitable for presentation to a larger audience.

---

## 🚀 Tech Stack

| Category                 | Technology                      |
| ------------------------ | ------------------------------- |
| **Framework**            | React 19 + TypeScript           |
| **Build Tool**           | Rsbuild (Rspack-based)          |
| **UI Library**           | MUI (Material UI v6+)           |
| **State Management**     | Zustand                         |
| **Forms & Validation**   | React Hook Form + Zod           |
| **Charts**               | Recharts                        |
| **Storage**              | LocalStorage (JSON persistence) |
| **Routing**              | React Router v7+                |
| **Animations**           | Framer Motion (optional)        |
| **Linting / Formatting** | ESLint + Prettier               |
| **Testing**              | Vitest + React Testing Library  |

---

## 🧱 Functional Requirements

### 1. Expense Management

- **Add Expense**
    - Fields: `title`, `amount`, `category`, `date`, `notes`
    - Client-side validation via Zod
    - Persist data to LocalStorage
- **Edit Expense**
    - Pre-populate existing values
    - Save changes → LocalStorage update
- **Delete Expense**
    - Confirmation dialog before removal
- **Expense List View**
    - Display all expenses in MUI `DataGrid`
    - Sort by date/amount
    - Filter by category/date range
    - Text search (title/notes)
    - Pagination

### 2. Dashboard / Summary

- **Summary Cards**
    - Total spent (current month)
    - Average daily spend
    - Top spending category
- **Charts**
    - Pie chart: category breakdown
    - Line/Bar chart: monthly trends
- **Quick Actions**
    - Add Expense
    - View Analytics

### 3. Analytics

- Interactive visualizations with filters
    - Category and date filters
    - Category-wise breakdown
    - Trend over time (monthly/yearly)
- Export data as CSV/JSON
- Reset filters

### 4. Settings

- Theme toggle (light/dark mode)
- Default currency preference
- Reset all data (clear LocalStorage)
- Import/Export expenses (JSON)
- Seed demo data for presentation

### 5. UI / UX Enhancements

- Responsive MUI layout with drawer navigation
- Snackbar notifications for add/edit/delete
- Date pickers for expense forms
- Empty states and fallback UIs
- Persistent navigation drawer (Dashboard, Expenses, Analytics, Settings, About)

### 6. Data Persistence

- LocalStorage abstraction utility:
    ```ts
    interface StorageHandler<T> {
        get(): T[];
        set(data: T[]): void;
        clear(): void;
    }
    ```
