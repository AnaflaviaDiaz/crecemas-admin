import { lazy } from 'react';

// TODO: add components in views
const LazyLogin = lazy(() => import('./Login'));
const LazyPasswordRecovery = lazy(() => import('./PasswordRecovery'));
const LazyDashboard = lazy(() => import('./Dashboard')); // is example

export { LazyLogin, LazyPasswordRecovery, LazyDashboard };
