
import React from "react";

import './Footer.css'
export default class Footer extends React.Component {
    constructor() {//1
        console.log("");
      super();
    }
  
    componentDidMount() {
    }
  
    componentDidUpdate() {
      
    }
    componentWillUnmount() {
      
    }
    render() {
          
      return (
        <>

<footer class="footer-area bg-dark" id="contact">

<div class="container">
  
  
        <div class="copyrights text-center">
            <p class="para" style={{color:"white"}}>
                Copyright ©2023 This template is made with by Mona
                </p>
                <div >
                <i class="fa-brands fa-facebook p-3 icons">
                  </i><i class="fa-brands fa-twitter p-3 icons"></i>
                  <i class="fa-brands fa-github p-3 icons"></i>
                  </div>
        </div>
        </div>
        </footer>

        </>
      );
    }
  }
  







