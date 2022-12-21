import React from "react";
import p from "../images/exam-p.png"
import srm from "../images/exam-srm.png"
import "../Styles/soa.css"
class Soa extends React.Component{
    constructor(props){
        super(props);
        
    }
componentDidMount(){
    document.querySelectorAll(".image-container img").forEach(image =>{
        image.onclick = () => {
            document.querySelector('.poping-image').style.display = 'block';
            document.querySelector('.poping-image img').src = image.getAttribute('src')
        }
    })
    document.querySelector('.poping-image span').onclick = () =>{
        document.querySelector(".poping-image").style.display="none"
    }
    
}
render(){


    
    return(<div class = "soa-container">
        <div class="image-container">
            <div class = "image"><img src={p} /></div>
            <div class = "image"><img src={srm} /></div>
        </div>
        <div class = "poping-image">
            <span>&times;</span>
            <img src = {p}/>
        </div>
    </div>);
}

}
export default Soa;