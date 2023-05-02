import React from 'react';
import AppLayout from './components/AppLayout';
import { Route, Routes } from "react-router";
import { BrowserRouter as Router } from "react-router-dom";
import { routes, AppRoute } from './routes';

const App = () => {
    return (
        <AppLayout>
            <Router>
                <Routes>
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            element={<route.element />}
                        />
                    ))}
                </Routes>
            </Router>
        </AppLayout>

    );
};

export default App;