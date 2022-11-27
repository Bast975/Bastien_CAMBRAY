import React, { useState } from "react";
import Header from './Components/Header';
import Home from './Components/Home';
import CV from './Components/CV';
import Projects from './Components/Project/Projects';
import Blog from './Components/Blog/Blog';
import Blogpost from './Components/Blog/Blogpost';
import NoMatch from './Components/NoMatch';
import ProjectDetails from './Components/Project/ProjectDetails';
import Footer from './Components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./dark.css";
import "./light.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ModeContext = React.createContext();

function App() {
  let languageStoredInLocalStorage = localStorage.getItem("language");

  const [mode, setMode] = useState('dark');
  let [language, setLanguage] = useState(languageStoredInLocalStorage ? languageStoredInLocalStorage : "Français");
  const objetsEtMethodesDuContexte = { mode, setMode }



  return (
    <ModeContext.Provider value={objetsEtMethodesDuContexte}>
      <div className={`d-flex h-100 text-center text-bg-${mode}`}>
        <div className="container-md d-flex w-100 h-100 p-3 mx-auto flex-column">
          <BrowserRouter>
            <header className="mb-auto">
              <Header language={language}
                handleSetLanguage={language => {
                  setLanguage(language);
                  storeLanguageInLocalStorage(language);
                }} />
            </header>
            <div className="container-fluid">
              <Routes>
                <Route path="/" element={<Home language={language} />} />
                <Route path="/CV" element={<CV language={language} />} />
                <Route path="/Projects" element={<Projects language={language}/>} />
                <Route path="/Blog" element={<Blog language={language}/>} />
                <Route path="/Blogpost" element={<Blogpost language={language}/>} />
                <Route path="/Project/details/:id" element={<ProjectDetails language={language}/>} />
                <Route path="*" element={<NoMatch />} />
              </Routes>
            </div>
            <Footer />
          </BrowserRouter>
        </div>
      </div>
    </ModeContext.Provider>

  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
