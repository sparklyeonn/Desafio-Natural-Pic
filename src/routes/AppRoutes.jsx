
import { Route, Routes } from 'react-router-dom';
import Favorites from '../pages/Favorites';
import NotFound from '../pages/NotFound';
import Photos from '../pages/Photos';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/" element={<Photos />} />
      <Route path="*" element={<NotFound/>} />
      
    </Routes>
  )
}

export default AppRoutes;