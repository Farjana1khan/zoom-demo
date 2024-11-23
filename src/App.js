// import './App.css';
// import "bootstrap-icons/font/bootstrap-icons.css";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Counter from './Counter/counter';
// import Home from './Components/Home/home';
// import Navbar from './Components/Navbar/navbar';

// function App() {
//   return (
//     <div>
//       <Router>
//         <Navbar />
//         <Routes>
//           <Route exact path="/" element={<Home />} />
//           <Route path="/counter" element={<Counter />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;



import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import Login from "./zoomdemo/Login"; // Assuming Login is in a separate file
import Signup from "./zoomdemo/Signup"; // Assuming Signup is in a separate file

export default function App() {
  return (
    <Router>
      <TransformWrapper initialScale={1} minScale={0.5} maxScale={3} wheel={{ step: 0.1 }} pinch={{ step: 0.1 }}>
        <TransformComponent>
          <div style={styles.main}>
            <nav style={styles.navbar}>
              <Link to="/login" style={styles.navLink}>
                Login
              </Link>
              <Link to="/signup" style={styles.navLink}>
                Signup
              </Link>
            </nav>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </Router>
  );
}

// Styling
const styles = {
  main:{
    
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "#333",
    padding: "10px",
  },
  navLink: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "18px",
    fontWeight: "bold",
  },
};
