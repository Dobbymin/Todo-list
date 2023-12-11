import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            { index: true, path: '', element: <HomePage /> },
            {
                path: 'auth',
                children: [
                    { path: '', element: <AuthPage /> },
                    { path: 'kakao/callback', element: <AuthRedirectPage /> },
                    { path: 'id', element: <IdPage /> },
                ],
            },

            { path: 'search', element: <SearchPage /> },
        ],
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
