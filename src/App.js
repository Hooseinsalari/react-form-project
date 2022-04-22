// components
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";

// router dom
import {
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto flex items-center justify-center">
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/LogIn" element={<LogIn />} />
      </Routes>
    </div>
  );
}

export default App;