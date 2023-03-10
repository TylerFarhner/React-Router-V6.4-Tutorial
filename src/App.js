import React from 'react'
import './App.css';
import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom'

import {Home} from './routes/Home'
import {Data, dataLoader} from './routes/Data';
import {Contact} from './routes/Contact';

function App() {

  // Create routes using familiar component tree structure
  const router = createBrowserRouter(
    createRoutesFromElements(
      // Import Route components, This will be the 'root'
      <Route path="/" element={<Root />}>
        {/* Root =/= initial homepage */}
        <Route index element={<Home />} />
        {/* Sets the Home Component (page) as the Index aka initial page */}
        <Route path="/data" element={<Data />} loader={dataLoader} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  )

  return (
    <div className="App">
      <header className="App-header">
        <RouterProvider router={router}/>
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
