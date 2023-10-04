import { Suspense } from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FileForm from './components/FileForm';
import ListDownPage from './components/ListDownPage';



function App() {
  return (
    <div className="App">
      <Router>
        <Suspense fallback={<> This is Lodding... </>}>
          <Routes>
            <Route exact path="/" element={<FileForm />} />
            <Route exact path="/all" element={<ListDownPage />} />
            <Route exact path="/home" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
