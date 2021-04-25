import { lazy } from 'react';

// TODO: add components in views
const LazyLogin = lazy(() => import('./Login'));
const LazyDashboard = lazy(() => import('./Dashboard')); // is example

export { LazyLogin, LazyDashboard };
