import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import { routes } from './routes';

const App = () => {
    return (
        <Layout>
            <BrowserRouter>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.name} index={route.index} path={route.path} element={route.component} />
                    ))}
                </Routes>
            </BrowserRouter>
        </Layout>
    );
};

export default App;
