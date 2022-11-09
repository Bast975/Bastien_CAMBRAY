import Header from './Components/Header';

import Home from './Components/FR/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";


function App() {
  return (
    <body class="d-flex h-100 text-center text-bg-dark">
      <div class="container-md d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header class="mb-auto">
          <Header />
        </header>
        <div class="container-fluid">
          <Home />
        </div>
      </div>
    </body>
  );
}

export default App;
