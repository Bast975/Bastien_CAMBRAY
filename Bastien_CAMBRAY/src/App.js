import React, { useState} from "react";
import Header from './Components/Header';
import Home from './Components/Home';
import CV from './Components/CV';
import Projects from './Components/Projects/Projects';
import Blog from './Components/Blog/Blog';
import NoMatch from './Components/NoMatch';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ModeContext = React.createContext();

function App() {
  const [mode, setMode] = useState('dark');
  const objetsEtMethodesDuContexte = { mode, setMode }

  return (
    <ModeContext.Provider value={objetsEtMethodesDuContexte}>
    <div className={`d-flex h-100 text-center text-bg-${mode}`}>
      <div className="container-md d-flex w-100 h-100 p-3 mx-auto flex-column">
        <BrowserRouter>
          <header className="mb-auto">
            <Header />
          </header>
          <div className="container-fluid">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/CV" element={<CV />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Blog" element={<Blog />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
    </ModeContext.Provider>
  );
}

export default App;
