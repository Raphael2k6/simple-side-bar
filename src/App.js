import React, { useState } from 'react';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"

import './App.css'

function App() {

  const [isOpened, setIsOpened] = useState(false)
  return (
    <div className="App">
      <div className="header">
        <div className="icon" onClick={() => {setIsOpened(!isOpened)}}>
          {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
        </div>
        <div className="header-title">Header</div>
      </div>
      <div className="container">
        <aside className={`${isOpened ? "opened" : ""} drawer`}>Drawer</aside>
        <main className="main">Content</main>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}

export default App;