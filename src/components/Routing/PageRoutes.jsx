import { Routes, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import Homepage from '../../pages/Homepage';

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
    </>
  );
};

export default PageRoutes;
