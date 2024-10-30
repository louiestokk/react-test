import React, { Suspense, lazy } from "react";
import './App.css';
import Spinner from "./components/Spinner";
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const Home = lazy(()=> import('./pages/Home'))
const UserDetailsPage = lazy(()=> import('./pages/UserDetailsPage'))
function App() {
  return (
    <div className="root">
    <Suspense fallback={<Spinner />}>
    <Router>
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/user/:username" element={<UserDetailsPage />}/>
      </Routes>
    </Router>
    </Suspense>
    </div>
  );
}

export default App;
