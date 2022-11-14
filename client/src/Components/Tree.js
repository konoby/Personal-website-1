import React from "react";
import '../Styles/Tree.css'
function Node(props){
    return(
        <input  type="text" class="Node">
        </input>
    );
}

class Tree extends React.Component{
    renderNode(){
        return(
            <Node/>
        )
    }
    render() {
        return (
          <div>
            <div className="board-row">
              {this.renderNode(0)}
              {this.renderNode(1)}
              {this.renderNode(2)}
            </div>
            <div className="board-row">
              {this.renderNode(3)}
              {this.renderNode(4)}
              {this.renderNode(5)}
            </div>
            <div className="board-row">
              {this.renderNode(6)}
              {this.renderNode(7)}
              {this.renderNode(8)}
            </div>
          </div>
        );
      }
}

export default Tree;