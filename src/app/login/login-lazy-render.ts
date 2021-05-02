import { lazy } from 'react';

export const LazyLogin = lazy(() => import('./views/Login'));
export const LazyPasswordRecovery = lazy(() => import('./views/PasswordRecovery'));
