import { Suspense } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListDownPage from './components/ListDownPage';
import AddProductForm from './components/FileForm';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Suspense fallback={<> This is Lodding... </>}>
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/product" element={<AddProductForm />} />
            <Route exact path="/all" element={<ListDownPage />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
