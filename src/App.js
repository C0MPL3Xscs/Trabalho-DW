import './App.css';
import Header from './Components/Header.js'
import MainPage from './Components/InitialPage'
import SupportPage from './Components/SupportPage'
import PublicEvents from './Components/PublicEventsPage'
import SignUp from './Components/Signup'
import Footer from './Components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/PublicEvents" element={<PublicEvents />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}


export default App;
