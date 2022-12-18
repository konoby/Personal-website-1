import React from 'react';
import '../Styles/Nav.css'
import Tree from './Tree'
import Resume from './Resume';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.clickalgo = this.clickalgo.bind(this);
        this.clickres = this.clickres.bind(this);
        this.state= {
            current_bar: 1
        };
    };
clickalgo (){
    
    document.location.reload();

    this.setState({current_bar: 1});
}
clickres (){
    clearTimeout();

    this.setState({current_bar: 2});
    
}
clicksoa (){
    clearTimeout();
    this.setState({current_bar: 3});
}
componentDidMount(){
   var navlist = document.getElementsByTagName("button");
   console.log(navlist)
    }

    render(){
        let toshow;
        if (this.state.current_bar===1){
            toshow = <Tree></Tree>
            // document.getElementById("vis").style.transform = "scale(1,1)"
        }
        else if(this.state.current_bar===2){
            toshow= <Resume/>
        }
        else if(this.state.current_bar===3){
            toshow= <></>
        }
        else{
            toshow = <></>
        }
        return (<div><nav class="navbar">
        
        <ul>
            <li><button id = "vis"onClick={this.clickalgo} >Heapsort Visualizer</button></li>
            <li><button id = "res"onClick={this.clickres}>Resume</button></li>
            <li><button id = "soa">SOA exams</button></li>
            <li><button id = "con">Contact</button></li>
          </ul>
        </nav>
        {toshow}
        </div>
        );
        
        
    }
}

export default Navbar;
