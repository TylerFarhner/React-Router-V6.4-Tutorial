import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet } from 'react-router-dom'

import { Home } from './routes/Home'
import { Data } from './routes/Data'
import { Contact } from './routes/Contact'

function App() {

  // Create routes using familiar component tree structure
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Import Route components, This will be the 'root'
      <Route path="/" element={<Root />}>
        {/* Root =/= initial homepage */}
        <Route index element={<Home />} />
        {/* Sets the Home Component (page) as the Index aka initial page */}
        <Route element={<Data />} />
        <Route element={<Contact />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// Structures everything related to routing, that isnt defining routes (i.e. navigation)
const Root = () => {
  return <>
    <div>
      <Link to="/">Home</Link>
      <Link to="/data">Data</Link>
    </div>

    <div>
      {/* Outlet is just a placeholder for all other routes outside of root */}
      <Outlet />
    </div>
  </>
}

export default App;
