import React from 'react';
import '../Styles/Nav.css'
import Tree from './Tree'
import Square from './Resume';
class Navbar extends React.Component{
    constructor(props){
        super(props);
        this.clickalgo = this.clickalgo.bind(this);
        this.clickres = this.clickres.bind(this);
        this.state= {
            current_bar: 1
        };
    };
    clickalgo (){this.setState({current_bar: 1});
}
clickres (){this.setState({current_bar: 2});
}
clicksoa (){this.setState({current_bar: 2});
}
    render(){
        let toshow;
        if (this.state.current_bar===1){
            toshow = <Tree></Tree>
        }
        else if(this.state.current_bar===2){
            toshow= <div>this is f</div>
        }
        else{
            toshow = <></>
        }
        return (<div><nav class="navbar">
        
        <ul>
            <li><button onClick={this.clickalgo} >Algorithm</button></li>
            <li><button onClick={this.clickres}>Resume</button></li>
            <li><button>SOA exams</button></li>
            <li><button>Contact</button></li>
          </ul>
        </nav>
        {toshow}
        </div>
        );
        
        
    }
}

export default Navbar;
