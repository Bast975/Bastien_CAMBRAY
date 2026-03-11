import React, { useState } from "react";
import Header from './Components/Header';
import Home from './Components/Home';
import NoMatch from './Components/NoMatch';
import Footer from './Components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
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
      <BrowserRouter>
          <div className={`d-flex h-100 text-bg-${mode}`}>
            <div className="container-md d-flex w-100 h-100 p-3 mx-auto flex-column">
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
                  <Route path="*" element={<NoMatch />} />
                </Routes>
              </div>
              <Footer />
            </div>
          </div>
      </BrowserRouter>
    </ModeContext.Provider>

  );
}

function storeLanguageInLocalStorage(language) {
  localStorage.setItem("language", language);
}

export default App;
