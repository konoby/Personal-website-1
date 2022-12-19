import React from 'react';
import '../Styles/Nav.css'
import Tree from './Tree'
import Resume from './Resume';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.clickalgo = this.clickalgo.bind(this);
        this.clickres = this.clickres.bind(this);
        this.clicksoa = this.clicksoa.bind(this);
        this.clickcon = this.clickcon.bind(this);
        this.state= {
            current_bar: 1
        };
    };
clickalgo (){
    
    clearTimeout();
    document.getElementById("vis").className = "At_check"
    document.getElementById("res").className = "At_check_base"
    document.getElementById("soa").className = "At_check_base"
    document.getElementById("con").className = "At_check_base"
    this.setState({current_bar: 1});
    
}
clickres (){
    clearTimeout();
    document.getElementById("vis").className = "At_check_base"
        document.getElementById("res").className = "At_check"
        document.getElementById("soa").className = "At_check_base"
        document.getElementById("con").className = "At_check_base"
    this.setState({current_bar: 2});
    
}
clicksoa (){
    clearTimeout();
    document.getElementById("vis").className = "At_check_base"
    document.getElementById("res").className = "At_check_base"
    document.getElementById("soa").className = "At_check"
    document.getElementById("con").className = "At_check_base"
    this.setState({current_bar: 3});
}
clickcon (){
    clearTimeout();
    document.getElementById("vis").className = "At_check_base"
        document.getElementById("res").className = "At_check_base"
        document.getElementById("soa").className = "At_check_base"
        document.getElementById("con").className = "At_check"
    this.setState({current_bar: 4});
}
componentDidMount(){
  console.log("mount")
}

    render(){
        let toshow;
        if (this.state.current_bar===1){
            toshow = <Tree></Tree>
            
        }
        else if(this.state.current_bar===2){
            toshow= <Resume/>
        }
        else if(this.state.current_bar===3){
            toshow= <div></div>
        }
        else{
            toshow = <div></div>
        }
    
        return (<div><nav class="navbar">
        
        <ul>
            <li><button id = "vis"onClick={this.clickalgo} class="At_check" >Heapsort Visualizer</button></li>
            <li><button id = "res"onClick={this.clickres} class="At_check_base">Resume</button></li>
            <li><button id = "soa"  onClick={this.clicksoa}class="At_check_base">SOA exams</button></li>
            <li><button id = "con" onClick={this.clickcon}class="At_check_base">Contact</button></li>
          </ul>
        </nav>
        {toshow}
        </div>
        );
        
        
    }
}

export default Navbar;
