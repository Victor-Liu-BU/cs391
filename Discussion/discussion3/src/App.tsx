import ArtworksListContent from "./components/artworks-list-content";
import './App.css'
import AboutPage from "./components/AboutPage";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from "./components/Header";
import ArtworkContent from "./components/ArtworkContent";

function Root(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artwork/:id" element={<ArtworkContent />}/>
      </Routes> 
    </div>
  )
}

const router = createBrowserRouter([{path: "*", Component: Root}]);
export default function App(){
  return <RouterProvider router={router} />
}
