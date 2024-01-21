import { BrowserRouter as Router } from "react-router-dom"
import "./App.css";
import AppRoutes from "./components/AppRoutes";
import NavBar from "./components/NavBar"

function App() {
  return (
    <Router>
      <div className="app">
        <h1>Pilates website</h1>
        <p>Find this application layout in client/src/App.jsx</p>
        {/* This is where you have banner e.g. <Banner />*/}
        <NavBar />
        <AppRoutes />
        {/* This is where you have footer e.g. <Footer />*/}
      </div>
    </Router>
  )
}

export default App
