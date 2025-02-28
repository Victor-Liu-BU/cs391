import ArtworksListContent from "./components/artworks-list-content";
import './App.css'
import AboutPage from "./components/AboutPage";
import {createBrowserRouter, Route, RouterProvider, Routes} from "react-router";
import Header from "./components/Header";

function Root(){
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<ArtworksListContent />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes> 
    </div>
  )
}

const router = createBrowserRouter([{path: "*", Component: Root}]);
export default function App(){
  return <RouterProvider router={router} />
}
