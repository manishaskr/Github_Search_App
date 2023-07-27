// import logo from './logo.svg';
// import './App.css';
// import GithubSearchApp from './components/GithubSearchApp'
// function App() {
//   return (
//     <>
//     <GithubSearchApp/>
//     </>
//   );
// }

// export default App;

import React, {useState} from 'react';
import './App.css';
import GithubSearchApp from "./components/GithubSearchApp";


let App = () => {

    return (
        <React.Fragment>
            

<nav class="navbar navbar-light fixed-top mb-6">
  <div class="container">
    <a class="navbar-brand" href="/">
      <img
      class= "logo"
        src="https://i.postimg.cc/XYj2G75N/logo.png"
        height ="20"
      />
    </a>
  </div>
</nav>
                <GithubSearchApp/>
            <div style={{marginBottom : '150px'}}/>
        </React.Fragment>
    );
};


export default App;
