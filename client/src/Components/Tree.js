import React from "react";
import '../Styles/Tree.css'
import '../Styles/startbutton.css'
import '../Styles/grid.css'
import {MaxHeap} from './Heapsort'
function Node(props){
    const value = props.value;
    const cssid = props.cssid;
    const cssidt=props.cssidt;
    const graphnumber = props.number;
    const textnumber = "t"+graphnumber;
    
    return(
        
        <div  id ={graphnumber} class={cssid}>
           <div id = {textnumber} class = {cssidt}> {value}</div>
        </div>
        
        
    );
}



class Tree extends React.Component{
    constructor(props){
        super(props);
        this.clickbegin = this.clickbegin.bind(this);
         this.clickend = this.clickend.bind(this);
         
       this.myform = null;
        this.state = {
            n0 : 0,
            n1 : 0,
            n2 : 0,
            n3 : 0,
            n4 : 0,
            n5 : 0,
            n6 : 0
        }
    }
    clickbegin(){
      const flow = MaxHeap([8,2,1,3,5,10,9]);
      this.animatetree(flow)
    }
    clickend(){
    window.location.reload(false);
    }
    
    componentDidMount(){
        const myform = document.getElementById("inputs");
        myform.addEventListener("input",()=>{
            console.log("hola")
        });
    }
    animatetree(flow){
        var accumulated_time = 0;
        for (let i = 0; i <= flow.length -1; i++) {
            const position = flow[i].pos;
            const mode = flow[i].mode;
            const value = flow[i].value;
            
            if (mode === 'insert'){
                accumulated_time += 1000
                setTimeout(()=>{this.insert(position,value)},accumulated_time)  
            }

            if (mode === 'swap'){
                accumulated_time += 1000
                setTimeout(()=>{this.identify(position[0],position[1])},accumulated_time)
                accumulated_time +=2500
               setTimeout(()=>{this.swap(position[0],position[1],value[0],value[1])},accumulated_time)
            }
            if (mode === 'delete'){
                accumulated_time += 1000
                setTimeout(()=>{this.preidentify(position[0],position[1])},accumulated_time)
                accumulated_time += 1500
                setTimeout(()=>{this.predelete(position[0],position[1],value[0],value[1])},accumulated_time)
                accumulated_time += 1000
                setTimeout(()=>{this.delete(position[0],position[1],value[0],value[1])},accumulated_time)
            }
            // setTimeout(() => {
            //     const node = flow[i];
            //     document.getElementById(`${position}`).className =
            //       'node${position}';
            //   }, 10 * i);
         }
    }
    insert(pos,val){
        const id = pos === 0? 'n0': pos === 1? 'n1':pos === 2? 'n2':pos === 3? 'n3':pos === 4? 'n4':pos === 5? 'n5':'n6';
        const temp = {}
        const class_name = pos === 0? 'Root insert': pos === 1? 'Node1 insert':pos === 2? 'Node2 insert':pos === 3? 'Node3 insert':pos === 4? 'Node4 insert':pos === 5? 'Node5 insert':'Node6 insert';
        temp[id] = val[0]

        this.setState(temp)
        
        document.getElementById(`${pos}`).className =
          class_name;
        
    }

    identify(pos1,pos2){
        const classid1 = pos1 === 0? 'Rtext text-identify': pos1 === 1? 'text1 text-identify': pos1 === 2? 'text2 text-identify':pos1 === 3? 'text3 text-identify': pos1 === 4? 'text4 text-identify': pos1 === 5? 'text5 text-identify':'text6 text-identify';
        const classid2 = pos2 === 0? 'Rtext text-identify': pos2 === 1? 'text1 text-identify': pos2 === 2? 'text2 text-identify':pos2 === 3? 'text3 text-identify': pos2 === 4? 'text4 text-identify': pos2 === 5? 'text5 text-identify':'text6 text-identify';
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2;}

    swap(pos1,pos2,val1,val2){
        const id1 = pos1 === 0? 'n0': pos1 === 1? 'n1':pos1 === 2? 'n2':pos1 === 3? 'n3':pos1 === 4? 'n4':pos1 === 5? 'n5':'n6';
        const id2 = pos2 === 0? 'n0': pos2 === 1? 'n1':pos2 === 2? 'n2':pos2 === 3? 'n3':pos2 === 4? 'n4':pos2 === 5? 'n5':'n6';
        const classid1 = pos1 === 0? 'Rtext text-swap': pos1 === 1? 'text1 text-swap': pos1 === 2? 'text2 text-swap':pos1 === 3? 'text3 text-swap': pos1 === 4? 'text4 text-swap': pos1 === 5? 'text5 text-swap':'text6 text-swap';
        const classid2 = pos2 === 0? 'Rtext text-swap': pos2 === 1? 'text1 text-swap': pos2 === 2? 'text2 text-swap':pos2 === 3? 'text3 text-swap': pos2 === 4? 'text4 text-swap': pos2 === 5? 'text5 text-swap':'text6 text-swap';
        console.log(document.getElementById(`t${pos1}`).className)
        const temp ={}
        temp[id1] = val2
        temp[id2] = val1
        
        this.setState(temp)
         
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2;
      
    }
    preidentify(pos1,pos2){
        const classid1 = pos1 === 0? 'Rtext text-preidentify': pos1 === 1? 'text1 text-preidentify': pos1 === 2? 'text2 text-preidentify':pos1 === 3? 'text3 text-preidentify': pos1 === 4? 'text4 text-preidentify': pos1 === 5? 'text5 text-preidentify':'text6 text-preidentify';
        const classid2 = pos2 === 0? 'Rtext text-preidentify': pos2 === 1? 'text1 text-preidentify': pos2 === 2? 'text2 text-preidentify':pos2 === 3? 'text3 text-preidentify': pos2 === 4? 'text4 text-preidentify': pos2 === 5? 'text5 text-preidentify':'text6 text-preidentify';
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2;}
    predelete(pos1,pos2,val1,val2){
        const classid1 = pos1 === 0? 'Rtext text-delete': pos1 === 1? 'text1 text-delete': pos1 === 2? 'text2 text-delete':pos1 === 3? 'text3 text-delete': pos1 === 4? 'text4 text-delete': pos1 === 5? 'text5 text-delete':'text6 text-delete';
        const classid2 = pos2 === 0? 'Rtext text-delete': pos2 === 1? 'text1 text-delete': pos2 === 2? 'text2 text-delete':pos2 === 3? 'text3 text-delete': pos2 === 4? 'text4 text-delete': pos2 === 5? 'text5 text-delete':'text6 text-delete';
        const id1 = pos1 === 0? 'n0': pos1 === 1? 'n1':pos1 === 2? 'n2':pos1 === 3? 'n3':pos1 === 4? 'n4':pos1 === 5? 'n5':'n6';
        const id2 = pos2 === 0? 'n0': pos2 === 1? 'n1':pos2 === 2? 'n2':pos2 === 3? 'n3':pos2 === 4? 'n4':pos2 === 5? 'n5':'n6';
        const temp ={}
        temp[id1] = val2
        temp[id2] = val1
        this.setState(temp)
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2;
    }
    delete(pos1,pos2,val1,val2){
        const class_name = pos2 === 0? 'Root node-delete': pos2 === 1? 'Node1 node-delete':pos2 === 2? 'Node2 node-delete':pos2 === 3? 'Node3 node-delete':pos2 === 4? 'Node4 node-delete':pos2 === 5? 'Node5 node-delete':'Node6 node-delete';
        document.getElementById(`${pos2}`).className =
        class_name;

    }
    
  
    render() {
       
        return (
            
          <div class='algo-container'>
            <form  id='inputs' class = 'grid-container'>
           
            <input  class ="input-box"></input><input class ="input-box"></input><input class ="input-box"></input><input class ="input-box"></input><input class ="input-box"></input><input class ="input-box"></input><input class ="input-box"></input>
            </form>
            <div class= 'tree-container'>
            <button class='beginbut' onClick={this.clickbegin}>Start</button>
            <button class='endbut' onClick={this.clickend}>Clear</button>
            <Node  number='0' value={this.state.n0} cssid="Root" cssidt='Rtext'></Node>
            <Node  number='1' value={this.state.n1} cssid="Node1" cssidt='text1'/><Node number='2' value={this.state.n2} cssid="Node2" cssidt='text2'/>
            <Node number='3' value={this.state.n3} cssid="Node3" cssidt='text3'/><Node number='4' value={this.state.n4} cssid="Node4" cssidt='text4'/><Node number='5' value={this.state.n5} cssid="Node5" cssidt='text5'/><Node number='6' value={this.state.n6} cssid="Node6" cssidt='text6'/>
          </div></div>
        );
      }
}

export default Tree;