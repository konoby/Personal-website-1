import React from 'react';
import '../Styles/landing.css'
class YJQ extends React.Component{
    constructor(props){
        super(props);
        this.state= {
            name: 'navbar'
        }
    };
    render(){
        return (<header class='title'>YAO | JIAQI
        </header>);
        
        
    }
}

export default YJQ;
