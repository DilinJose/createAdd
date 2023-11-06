import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateAds from "./CreateAds";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/createads" element={<CreateAds/>}/>
      </Routes>
    </div>
  );
}

export default App;
