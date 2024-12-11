import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import Portfolio from '../pages/Portfolio';
import PlayTheater from '../pages/PlayTheater';
import WorkVisuals from '../pages/WorkVisuals';
import Books from '../pages/Books';
import Footer from '../components/Footer';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <HomePage />
      </>
    ),
  },
  {
    path: '/bibliografia',
    element: (
      <>
        <Portfolio />
        <Footer />
      </>
    ),
  },
  {
    path: '/obras-de-teatro',
    element: (
      <>
        <PlayTheater />
        <Footer />
      </>
    ),
  },
  {
    path: '/trabajos-audiovisuales',
    element: (
      <>
        <WorkVisuals />
        <Footer />
      </>
    ),
  },
  {
    path: '/libros',
    element: (
      <>
        <Books />
        <Footer />
      </>
    ),
  },
]);

export default router;
