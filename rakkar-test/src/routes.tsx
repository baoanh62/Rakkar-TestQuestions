import { Route, Routes, RouteProps   } from "react-router";
import AppLayout from  './components/AppLayout';
import HomePage from  './pages/Home';
import Test1Page from  './pages/Test1';
import Test2 from  './pages/Test2';

export interface AppRoute{
  path: string;
  element: React.ComponentType<any>;
  routes?: AppRoute[];
}

export const routes: AppRoute[] = [
  {
    path: '/',
    element: HomePage,
  },
  {
    path: '/test1',
    element: Test1Page,
  },
  {
    path: '/contact',
    element: Test2,
  }
];
