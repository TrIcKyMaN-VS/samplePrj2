import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Navigate, Routes} from 'react-router-dom'
import Users from './users/pages/Users';
import NewPlaces from './places/pages/NewPlaces';
import MainNavigation from './shared/components/Navigation/MainNavigation';
import UserPlaces from './places/pages/UserPlaces';

function App() {
  return (
   <Router>
    <MainNavigation />
      <main>
        <Routes>
          <Route path='/' element={<Users />} />
          <Route path='/:userId/places' element={<UserPlaces />} />
          <Route path='/places/new' element={<NewPlaces />} />
          {/* <Navigate to={} */}
          <Route
            path="*"
            element={<Navigate to="/" replace />}
          />
        </Routes>
      </main>
   </Router>
  );
}

export default App;
