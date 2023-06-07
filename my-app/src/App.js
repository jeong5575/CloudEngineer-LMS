import React from 'react';
import LandingPage from './Components/views/LandingPage/LandingPage';
import LoginPage from './Components/views/LoginPage/LoginPage';
import AttendancePage from './Components/views/AttendancePage/AttendancePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogPage from './Components/views/BlogPage/BlogPage';
import NoticePage from './Components/views/NoticePage/NoticePage';
import DrivePage from './Components/views/DrivePage/DrivePage';
import QnaPage from './Components/views/QnaPage/QnaPage';
import RestaurantPage from './Components/views/RestaurantPage/RestaurantPage';

function App() {
  return (<Router>
    <div>
      
      <Routes>
      
      <Route path="/" exact element={<LandingPage/>} />
      <Route path="/attendance" exact element={<AttendancePage/>} />
      <Route path="/blog" exact element={<BlogPage/>} />
      <Route path="/notice" exact element={<NoticePage/>} />
      <Route path="/drive" element={<DrivePage/>} />
      <Route path="/qnaboard" element={<QnaPage/>} />
      <Route path="/restaurantreviews" element={<RestaurantPage/>} />
      <Route path="/login" element={<LoginPage/>} />
      </Routes>


    </div></Router>
  );
}

export default App;