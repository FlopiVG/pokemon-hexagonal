import PokemonDetails from './sections/pokemon/PokemonDetails';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './sections/shared/RootLayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <PokemonDetails /> },
      { path: 'pokemon', element: <div>Pokemon route</div> },
      { path: 'trainer', element: <div>Trainer route</div> },
      { path: 'analytic', element: <div>Analytics route</div> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
