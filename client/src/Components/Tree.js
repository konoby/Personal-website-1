import React from "react";
import '../Styles/Tree.css'
import './algo'
function Root(props){
    return(
        <div  class="Root">
            1
        </div>
    );
}
function Node2(props){
    return(
        <div  class="Node2">
            2
        </div>
    );
}
function Node3(props){
    return(
        <div  class="Node3">
            3
        </div>
    );
}
function Node4(props){
    return(
        <div  class="Node4">
            4
        </div>
    );
}
function Node5(props){
    return(
        <div  class="Node5">
            5
        </div>
    );
}
function Node6(props){
    return(
        <div  class="Node6">
            6
        </div>
    );
}
function Node7(props){
    return(
        <div  class="Node7">
            7
        </div>
    );
}
function Node8(props){
    return(
        <div  class="Node8">
        </div>
    );
}

class Tree extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Node1 : 0,
            Node2 : 0,
            Node3 : 0,
            Node4 : 0,
            Node5 : 0,
            Node6 : 0,
            Node7 : 0
        }
    }
    render() {
        return (
          <div>
            <div></div>
            <Root></Root>
            <div><Node2/><Node3/></div>
            <div><Node4/><Node5/><Node6/><Node7/></div>
          </div>
        );
      }
}

export default Tree;