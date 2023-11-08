import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Dashboard from "./Dashboard";
import CreateAds from "./CreateAds";
import TextAdsForm from "./TextAdsForm";
import MediaAdsForm from "./MediaAdsForm";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="createads" element={<CreateAds />} />
        <Route path="textadsform" element={<TextAdsForm />} />
        <Route path="mediaadsform" element={<MediaAdsForm />} />
      </Routes>
    </div>
  );
}

export default App;
