import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';

const router = createBrowserRouter([
    { index: true, path: '/', element: <HomePage /> },

    /** 로그인 부분 router */
    { path: 'login', element: <LoginPage /> },
    { path: 'register', element: <RegisterPage /> },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
