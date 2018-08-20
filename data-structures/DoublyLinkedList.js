function Node(data){
    this.data = data;
    this.next = null;
    this.prev = null;
}

function DoublyLinkedList(value){
    this._length=0;
    this.head=null;
}

DoublyLinkedList.prototype.add = function(value){

    let node = new Node(value),
         currentNode = this.head;

         //if list is empty
         if(!currentNode){
            this.head= node;
            this._length++;
         }

         else{
             while(currentNode.next!==null){
                 currentNode = currentNode.next;
             }
             currentNode.next = node;
             node.prev =currentNode;
             this._length++;
         }

         return node;
}

DoublyLinkedList.prototype.searchNodeAt = function(position){
    if(position > this._length || position === 0){
        throw new Error('Position cannot be greater/lesser than list length and cannot be 0');
        return null;
    }

    let currPosition=1,
        currentNode = this.head;

        while(currPosition!=position){
            currentNode = currentNode.next;
            currPosition++;
        }

        return currentNode;
}

DoublyLinkedList.prototype.removeAt = function(position){
    if(position > this._length || position === 0){
        throw new Error('Position cannot be greater/lesser than list length and cannot be 0');
        return null;
    }

    let currentNode = this.head,
        deletedNode = null,
        currPosition = 1;

    //if position is 1
    if(position === 1){
        this.head = this.head.next;
        this.head.prev = null;
        deletedNode = currentNode;
        currentNode = null;
    }
    
    else{
        while(currPosition !== position-1){
            currentNode = currentNode.next;
            currPosition++;
        }

        let next = currentNode.next.next;
        deletedNode = currentNode.next;
        currentNode.next = next;
        next.prev = currentNode;
    }

    this._length--;
    return deletedNode;
}

DoublyLinkedList.prototype.traverse = function(){
    let arr = [];

    while(this.head){
        arr.push(this.head.data);
        this.head =this.head.next;
    }
    return arr;
}


// ******************************* Implementation done *****************************

let list = new DoublyLinkedList();
//console.log(`Removing at position 2 : ${list.remove(2)}`);


list.add(1);
list.add(2);
list.add(3);

console.log(`After adding , list length: ${list._length}`);

console.log(`Searching at position 1: ${list.searchNodeAt(1).data}`);
console.log(`Searching at position 3: ${list.searchNodeAt(3).data}`);


console.log(`Removing at position 1: ${list.removeAt(1).data}`);
console.log(`Removing at position 2: ${list.removeAt(2).data}`);


console.log(`List length after removal:  ${list._length}`);
console.log(`Traversing: ${list.traverse()}`);

