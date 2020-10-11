/**
 * Project Routes
 *
 * Each route needs to be defined here and
 * in the Laravel Web Routes.
 *
 * Each route points to a Component, which
 * consumes required data from the store
 *
 */

// Components
import TheHomePage from './views/TheHomePage';
import ThePostPage from './views/ThePostPage';

// Routes
export const routes = [
  { path: '/',            component: TheHomePage, name: 'home' },
  { path: '/posts/:slug', component: ThePostPage, name: 'post' },
];

// EOF
