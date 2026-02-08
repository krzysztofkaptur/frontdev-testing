import { Routes, Route, Link } from "react-router";
import './App.css'

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>{" | "}
        <Link to="/about">About</Link>
      </nav>

      <h1>App</h1>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App
