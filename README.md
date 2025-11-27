# 💸 Expense Tracker (React + TypeScript + Rsbuild + MUI)

A modern, frontend-only **Expense Tracker Application** built with **React 19**, **TypeScript**, and **MUI**, powered by **LocalStorage** for persistence.

---

## 🚀 Tech Stack

| Category                 | Technology                      |
| ------------------------ | ------------------------------- |
| **Framework**            | React 19 + TypeScript           |
| **Build Tool**           | Rsbuild (Rspack-based)          |
| **UI Library**           | MUI (Material UI v6+)           |
| **Forms & Validation**   | React Hook Form + Zod           |
| **Charts**               | MUI Charts                      |
| **Storage**              | LocalStorage (JSON persistence) |
| **Routing**              | React Router v7+                |
| **Linting / Formatting** | ESLint + Prettier               |

---

## 🧱 Functional Requirements

### 1. Expense Management

- **Add Expense** / **Add Income**
    - Fields: `title`, `amount`, `category`, `date`, `notes`
    - Client-side validation via `Yup`
    - Persist data to LocalStorage
- **Edit Expense**
    - Pre-populate existing values
    - Save changes → LocalStorage update
- **Delete Expense**
    - Confirmation dialog before removal
- **Expense List View**
    - Display all expenses in MUI `Datagrid | Card`
    - Sort by date/amount - Available for Expense
    - Filter by category/date range - Available for Expense
    - Text search (title/notes) - Available for Expense
    - Pagination - Available for Expense

### 2. Dashboard / Summary

- **Summary Cards**
    - Total spent (current month)
    - Average daily spend
    - Top spending category
- **Charts**
    - Pie chart: category breakdown
    - Bar chart: monthly trends
- **Quick Actions**
    - Add Expense
    - View Analytics

### 4. Settings

- Theme toggle (light/dark mode)
- Locale Settings (EN | HN)

## Setup

Install the dependencies:

```bash
pnpm install
```

## Get started

Start the dev server, and the app will be available at [http://localhost:3000](http://localhost:3000).

```bash
pnpm dev
```

Build the app for production:

```bash
pnpm build
```

Preview the production build locally:

```bash
pnpm preview
```

## Learn more

To learn more about Rsbuild, check out the following resources:

- [Rsbuild documentation](https://rsbuild.rs) - explore Rsbuild features and APIs.
- [Rsbuild GitHub repository](https://github.com/web-infra-dev/rsbuild) - your feedback and contributions are welcome!
