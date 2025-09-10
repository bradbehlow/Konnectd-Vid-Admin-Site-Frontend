// src/App.jsx
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="app-container min-h-screen bg-gray-50">
      {/* Navbar Component */}
      <Navbar />

      {/* Main Content Area */}
      <main className="main-content px-6 py-8">
        <Outlet /> {/* child routes render here */}
      </main>
    </div>
  );
}

export default App;
