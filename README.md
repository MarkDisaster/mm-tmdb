# TMDB (TheMovieDataBase)

[Visit the Live Project](https://tmdbmm.web.app/)

A project that illustrates the integration of several technologies and tools to create a robust, scalable, and easily maintainable codebase.

## Features

**Fully Responsive Design:** 
- Optimized for mobile, tablet, and desktop devices.

**User Authentication:**
- Secure login/logout with access to a protected user profile and movie rating capabilities.

**Dark/Light Theme Toggle:**
- User preference for light or dark mode.

**Debounced Search:**
- Efficient search functionality to minimize server load and enhance user experience.

**Favorites Management:**
- Logged-in users can add movies to their favorites list.

**Movie Comparison:**
- Users can compare statistics of different movies using interactive charts.


## Techniques and Best Practices

#### 1. TypeScript Type Checking
  - Prevent errors and improve code readability and maintainability with TypeScript.

#### 2. Modular and Reusable Components
  - Create small, reusable components for better organization and maintainability.

#### 3. State Management with Redux Toolkit
  - Divide the state into logical slices and manage it efficiently using `createSlice`.

#### 4. Asynchronous API Operations and Data Caching with React Query

#### 5. Custom Hooks
  - Enhance component logic reusability and code structure with custom hooks.

#### 6. Helper Functions
  - Modularize and reuse code through small utility functions.

#### 7. Additional Performance Optimizations
  - Implement techniques like debounce to improve UI responsiveness and overall performance.

### Stack:
-  React
-  TypeScript
-  Redux
-  Vite
-  PNPM
-  ESLint
-  Prettier
-  CoreUI, Module Styles, React Query, Recharts


---

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-  Configure the top-level `parserOptions` property like this:

```js
export default {
   // other rules...
   parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      project: [
         './tsconfig.json',
         './tsconfig.node.json',
         './tsconfig.app.json',
      ],
      tsconfigRootDir: __dirname,
   },
};
```

-  Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-  Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-  Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
