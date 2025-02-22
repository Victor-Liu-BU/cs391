import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {CourseStaff} from "./components/discussion2"; 
function App() {

  return (
    <div>
      <h2>
        Welcome to my first React application
      </h2>
      <div>
        <h4>
          <CourseStaff name="Victor" title="Student" rating={100}/>
          <CourseStaff name="Hello" title="JustHello" rating={100}/>
          <CourseStaff name="lab2" title="discussion2" rating={50}/>

        </h4>
      </div>
    </div>
  )
}

export default App
