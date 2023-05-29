import React from 'react';
import Header from './Components/Home/Header';
import Footer from './Components/Home/Footer';
import MainHomePage from './Components/Home/MainHomepage';

function App() {
  return (
    <div>
      <Header />
      
      {/* 페이지 컨텐츠 */}
      <MainHomePage/>
      <Footer />
    </div>
  );
}

export default App;