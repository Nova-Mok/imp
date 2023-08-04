import React from 'react';
import { BrowserRouter as Router, Route , Routes} from 'react-router-dom';
import BrandLogin from './views/Brands/login';
import InfluencerLogin from './views/Influencer/login';
import BrandDashboard from './views/Brands/dashboard';
import InfluencerDashboard from './views/Influencer/dashboard';

function App() {
  return (
          <Router>
              <Routes>
              <Route element={<BrandLogin />} path="/brand/login" />
              <Route element={<InfluencerLogin />} path="/influencer/login" />
              <Route element={<InfluencerDashboard/>} path="/influencer/dashboard" />
              <Route element={<BrandDashboard />} path="/brand/dashboard" />
              </Routes>
            </Router>
    );
}

export default App;
              
