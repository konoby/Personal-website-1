import React from "react";
import '../Styles/resume.css'
class Resume extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        edu:false,
        pro:false,
      }
  }
  componentDidMount(){
    var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function(i) {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
      if (this.id === 'c1'&&document.getElementById("c2").nextElementSibling.style.display === "block"){
        document.getElementById("c2").classList.toggle("active")
        document.getElementById("c2").nextElementSibling.style.display = "none"
      }
      else if(this.id === 'c2'&&document.getElementById("c1").nextElementSibling.style.display === "block"){
        document.getElementById("c1").classList.toggle("active")
        document.getElementById("c1").nextElementSibling.style.display = "none"
      }
      else{
        
      }
    }
  });
}
  }
  render(){

    return(
      <div class='col-container'>
        
      <h1 class = "education">Education</h1>
  <button id = "c1" type="button" class="collapsible">+</button>
  <div class="content">
  <p><b>Boston university</b>
    <ul>
      <li>Master of Computer science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>2020-2022</i></li>
    </ul>
    <ul>
      <li>Master of Finance with concentration in investment&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>2018-2020</i></li>
    </ul>
  </p>
  <p><b>Westcliff university</b>
  <ul>
      <li>DBA with concentration in applied computer science&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>2022-current</i></li>
    </ul>
  </p>
</div>

<h1 >Projects</h1>
<button id = "c2"type="button" class="collapsible">+</button>
<div class="content">
  <p><b>Trading system (Zipline)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Jan.2021-Sep.2021</i></b>
    <ul>
      <li>Create data bundles for cryptocurrencies using Binance <b>Rest API</b> and <b>WebSocket</b> in python and SQL database for daily prices also support data pipeline for backtesting and livetrading modules.</li>
      <li>Utilize <b>Zipline</b> framework for backtesting and analyze performance output in Jupyter Notebook .</li>
      <li>Create Clean and easy to use GUI with <b>Tkinter</b> widgets for users interacting manually. </li>
    </ul></p>
    <p><b>Polling web application&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Sep.2021-Dec.2021</i></b>
      <ul>
      <li>Work as <b>front-end lead</b> responsible for decision making in logical design, layout, and testing.</li>
      <li>Use <b>React</b> with <b>Redux</b> to create loggin, user interface, polling components. </li>
      <li>Use <b>Express.js</b> and <b>MongoDB</b> to create APIs and store user data. </li>
      </ul>
    </p>
      <p><b><u>Fully animated personal website</u></b>(You are using now)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i><b>Nov.2022-Dec.2022</b></i>
      <ul>
        <li>
          Use <b>React</b> and <b>CSS</b> to create all components.
        </li>
        <li>
          <b>Dockerize </b> the app to allow it to be run on different enviroments.
        </li>
        <li>
          Deploy on <b>AWS lightsail</b>.
        </li>
        </ul>
        
      </p>

</div>
</div>

    );
  }
}
export default Resume;