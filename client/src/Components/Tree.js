import React from "react";
import '../Styles/Tree.css'
import '../Styles/startbutton.css'
import '../Styles/grid.css'
import '../Styles/alert.css'
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

function Alert(props){
    return(
 <div class='alert'>PLZ input 6 numbers between 0 and 100</div>
    );
}
function Success(props){
    return(
 <div class='success'>Now press the start button</div>
    );
}
function Box(props){
    const value = props.value;
    const cssid = props.cssid;
    const cssidt=props.cssidt;
    const boxnumber = props.number;
    const textnumber = "t"+boxnumber;
    
    return(
        
        <div  id ={boxnumber} class={cssid}>
           <div id = {textnumber} class = {cssidt}> {value}</div>
        </div>
        
        
    );
}


class Tree extends React.Component{
    constructor(props){
        super(props);
        this.clickbegin = this.clickbegin.bind(this);
         this.clickend = this.clickend.bind(this);
         this.validation = this.validation.bind(this);
         
       this.myform = null;
        this.state = {
            n0 : 0,
            n1 : 0,
            n2 : 0,
            n3 : 0,
            n4 : 0,
            n5 : 0,
            n6 : 0,
            correct: false,
            
            runing: false
        }
    }
   
    clickbegin(){
        if(this.state.correct === true){
        let v0= document.getElementById('v0').value;
        let v1= document.getElementById('v1').value;
        let v2= document.getElementById('v2').value;
        let v3= document.getElementById('v3').value;
        let v4= document.getElementById('v4').value;
        let v5= document.getElementById('v5').value;
        let v6= document.getElementById('v6').value;
      const flow = MaxHeap([Number(v0),Number(v1),Number(v2),Number(v3),Number(v4),Number(v5),Number(v6)]);
      this.setState({runing:true})
        document.getElementById('btn').innerHTML='RUNING'
      console.log("click")
      this.animatetree(flow)}
      
     
    }
    clickend(){
    window.location.reload(false);
    this.setState({runing:false})
    }
    iscorrect(id,num){
        // console.log(typeof num)
        if (typeof num == 'number' && num<100 && num > 0){
            document.getElementById(id).style.color = 'black'
        return true}
        else {
            document.getElementById(id).style.color = 'red'
            return false}
    }
    validation(){
        let v0= document.getElementById('v0').value;
        let v1= document.getElementById('v1').value;
        let v2= document.getElementById('v2').value;
        let v3= document.getElementById('v3').value;
        let v4= document.getElementById('v4').value;
        let v5= document.getElementById('v5').value;
        let v6= document.getElementById('v6').value;
        let bool0 = this.iscorrect('v0',Number(v0))
        let bool1 = this.iscorrect('v1',Number(v1))
        let bool2 = this.iscorrect('v2',Number(v2))
        let bool3 = this.iscorrect('v3',Number(v3))
        let bool4 = this.iscorrect('v4',Number(v4))
        let bool5 = this.iscorrect('v5',Number(v5))
        let bool6 = this.iscorrect('v6',Number(v6))
        if((bool0&&bool1&&bool2&&bool3&&bool4&&bool5&&bool6)===false){
            this.setState({correct: false});
            
        }
        else{this.setState({correct: true});
        document.getElementById('pointer').style.opacity='0'
        document.getElementById('btn').style.color='black'
        
    }
        
       
    }
    componentDidMount(){
        
        const myform = document.getElementById("inputs");
        myform.addEventListener("input",()=>{
            this.validation()}
        );
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
         }
         
         document.getElementById('btn').innerHTML='CLEAR'
         
    }
    insert(pos,val){
        const id = pos === 0? 'n0': pos === 1? 'n1':pos === 2? 'n2':pos === 3? 'n3':pos === 4? 'n4':pos === 5? 'n5':'n6';
        const bpos = 'b' + pos;
        const temp = {}
        const class_name = pos === 0? 'Root insert': pos === 1? 'Node1 insert':pos === 2? 'Node2 insert':pos === 3? 'Node3 insert':pos === 4? 'Node4 insert':pos === 5? 'Node5 insert':'Node6 insert';
        temp[id] = val[0]

        this.setState(temp)
        
        document.getElementById(`${pos}`).className =
          class_name;
        document.getElementById(bpos).className =
         'Head insert';
        
    }

    identify(pos1,pos2){
        const classid1 = pos1 === 0? 'Rtext text-identify': pos1 === 1? 'text1 text-identify': pos1 === 2? 'text2 text-identify':pos1 === 3? 'text3 text-identify': pos1 === 4? 'text4 text-identify': pos1 === 5? 'text5 text-identify':'text6 text-identify';
        const classid2 = pos2 === 0? 'Rtext text-identify': pos2 === 1? 'text1 text-identify': pos2 === 2? 'text2 text-identify':pos2 === 3? 'text3 text-identify': pos2 === 4? 'text4 text-identify': pos2 === 5? 'text5 text-identify':'text6 text-identify';
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2; 
        
        document.getElementById(`tb${pos1}`).className = 'Btext text-identify';
        document.getElementById(`tb${pos2}`).className = 'Btext text-identify';
    }

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
        document.getElementById(`tb${pos1}`).className = 'Btext text-swap';
        document.getElementById(`tb${pos2}`).className = 'Btext text-swap';
      
    }
    preidentify(pos1,pos2){
        const classid1 = pos1 === 0? 'Rtext text-preidentify': pos1 === 1? 'text1 text-preidentify': pos1 === 2? 'text2 text-preidentify':pos1 === 3? 'text3 text-preidentify': pos1 === 4? 'text4 text-preidentify': pos1 === 5? 'text5 text-preidentify':'text6 text-preidentify';
        const classid2 = pos2 === 0? 'Rtext text-preidentify': pos2 === 1? 'text1 text-preidentify': pos2 === 2? 'text2 text-preidentify':pos2 === 3? 'text3 text-preidentify': pos2 === 4? 'text4 text-preidentify': pos2 === 5? 'text5 text-preidentify':'text6 text-preidentify';
        document.getElementById(`t${pos1}`).className =
        classid1;
        document.getElementById(`t${pos2}`).className =
        classid2;
        document.getElementById(`tb${pos1}`).className = 'Btext text-preidentify';
        document.getElementById(`tb${pos2}`).className = 'Btext text-preidentify';
    }
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
        document.getElementById(`tb${pos1}`).className = 'Btext text-delete';
        document.getElementById(`tb${pos2}`).className = 'Btext text-delete';
    }
    delete(pos1,pos2,val1,val2){
        const class_name = pos2 === 0? 'Root node-delete': pos2 === 1? 'Node1 node-delete':pos2 === 2? 'Node2 node-delete':pos2 === 3? 'Node3 node-delete':pos2 === 4? 'Node4 node-delete':pos2 === 5? 'Node5 node-delete':'Node6 node-delete';
        document.getElementById(`${pos2}`).className =
        class_name;
        document.getElementById(`b${pos2}`).style.color='green';
        

    }
    
  
    render() {
        const flag=!this.state.correct
        const clickfunc = this.state.correct&&!this.state.runing?this.clickbegin:this.clickend;
        console.log(this.state.correct&&!this.state.runing,clickfunc)  
        return (
            
          <div class='algo-container'>
            <form  id='inputs' class = 'grid-container'>
            <button id = 'btn' class = 'inner' onClick={clickfunc}>START</button><svg onClick={clickfunc}  xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
         <circle cx="80" cy="80" r="70" stroke-linecap="round" />
 </svg>
            {flag&&<Alert/>}
            {!flag&&<Success/>}
            <input  id='v0' class ="input-box"></input><  input  id='v1' class ="input-box"></input><input  id='v2' class ="input-box"></input><input  id='v3' class ="input-box"></input><input id='v4' class ="input-box"></input><input id='v5' class ="input-box"></input><input id='v6' class ="input-box"></input>
            <div class = 'cursor-container'><div id='pointer' class = 'pointer'></div></div>
            <div class='box-container'><Box  number='b0' value={this.state.n0} cssid="Head" cssidt='Btext'/><Box  number='b1' value={this.state.n1} cssid="Head" cssidt='Btext'/><Box  number='b2' value={this.state.n2} cssid="Head" cssidt='Btext'/><Box  number='b3' value={this.state.n3} cssid="Head" cssidt='Btext'/><Box  number='b4' value={this.state.n4} cssid="Head" cssidt='Btext'/><Box  number='b5' value={this.state.n5} cssid="Head" cssidt='Btext'/><Box  number='b6' value={this.state.n6} cssid="Head" cssidt='Btext'/></div>
            </form>
            <div class= 'tree-container'>
            
            <Node  number='0' value={this.state.n0} cssid="Root" cssidt='Rtext'></Node>
            <Node  number='1' value={this.state.n1} cssid="Node1" cssidt='text1'/><Node number='2' value={this.state.n2} cssid="Node2" cssidt='text2'/>
            <Node number='3' value={this.state.n3} cssid="Node3" cssidt='text3'/><Node number='4' value={this.state.n4} cssid="Node4" cssidt='text4'/><Node number='5' value={this.state.n5} cssid="Node5" cssidt='text5'/><Node number='6' value={this.state.n6} cssid="Node6" cssidt='text6'/>
          </div></div>
        );
      }
}

export default Tree;