export function MaxHeap(arr){
    var sorted = [];
    var heap1 = [];
    const flow = [];
    for(var i=0; i<arr.length; i++){
       insert(heap1,arr[i],flow)

    }
    for(let i=0; i<arr.length; i++){
        sorted.push(todelete(heap1,flow));
        
    }
    return flow;
}
function parentIndex(index){
    return Math.floor((index-1)/2);
}

function leftChildIndex(index){
    return (2*index + 1);
}

function rightChildIndex(index){
    return (2*index + 2);
}

function insert(heap,item,flow) {
   heap.push(item);
    var index = heap.length - 1;
    flow.push({mode:'insert',pos:index,value:[item]})
    var parent = parentIndex(index);
    while(heap[parent] && heap[parent] < heap[index]) {
        swap(heap,parent, index,flow);
        index = parentIndex(index);
        parent = parentIndex(index);
    }
}
function todelete(heap,flow) {
    flow.push({mode:'delete',pos:[0,heap.length-1],value:[heap[0],heap[heap.length-1]]})
    var item = heap.shift();
    heap.unshift(heap.pop());
    var index = 0;
    var leftChild = leftChildIndex(index);
    var rightChild = rightChildIndex(index);
    while(heap[leftChild] && heap[leftChild] > heap[index] || heap[rightChild] > heap[index]){
        var max = leftChild;
        if(heap[rightChild] && heap[rightChild] > heap[max]){
            max = rightChild
        }
        swap(heap,max, index,flow);
        index = max;
        leftChild = leftChildIndex(max);
        rightChild = rightChildIndex(max);
    }
    return item;
}
function swap(heap,a, b, flow) {
    flow.push({mode:'swap',pos:[a,b], value: [heap[a],heap[b]]})
    let temp = heap[a];
    heap[a] = heap[b];
    heap[b] = temp;
    
}   

