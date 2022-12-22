import React from "react";
import "../Styles/contact.css"
class Con extends React.Component{
   constructor(props){
    super(props);
   };
    
    render(){
        return(<div class = "contact-container">
            <a title= "E-mail" href = "mailto:j.yao.623@westcliff.edu?subject = Feedback&body = Message">
            j.yao.623@westcliff.edu
</a>
        <a href="https://github.com/konoby">Github Profile</a>
        <a href = "tel:857-930-3297">857-930-3297 </a>
        </div>)
    }
}
export default Con;