
function Node(data){
    this.data = data;
    this.next = null;
}


function SinglyLinkedList(){
    this._length=0;
    this.head=null;
}

SinglyLinkedList.prototype.add = function(value){
    const node = new Node(value),
          currentNode = this.head;

          //if list is empty
          if(!currentNode){
              this.head=node;
          }

          else {
            while(currentNode.next!==null){
                currentNode = currentNode.next;
            }
            currentNode.next = node;
          }
          //if list is not empty, keep traversing next nodes until null reached, then there assign node
        
          this._length++;

          return node;
}

SinglyLinkedList.prototype.searchNodeAt = function(position){
        if(position > this._length || position===0 ){
            throw new Error('Position cannot be greater or lesser than list length');
            return null;
        }
            
        let currentNode = this.head,
                currPosition = 1;

        while(currPosition != position){
            currentNode = currentNode.next;
            currPosition++;
        }

        return currentNode;
}

SinglyLinkedList.prototype.remove = function(position){
        if(position > this._length || position === 0 ){
            throw new Error('Position cannot be greater or lesser than list length');
            return null;
        }
    
        let currentNode = this.head,
            deletedNode = null,
            currPosition = 0;
            
        //if its the first element itself
        if(position === 1){
            this.head =this.head.next;
            deletedNode = currentNode;
            currentNode =null;
        }    
        else {
            while(currPosition < position-1){
                currentNode = head;
                head = head.next;
                currPosition++;
            }
    
            currentNode.next = head.next;
            deletedNode = head;
            head=null;
        }
        
        this._length--;
        return deletedNode;
}

SinglyLinkedList.prototype.traverse = function(){
    let arr = [];

    while(this.head){
        arr.push(this.head.data);
        this.head = this.head.next;
    }
    return arr;
}
// *************************   Implementation done *******************************



let list = new SinglyLinkedList();

list.add(1);
list.add(2);

console.log(`Length: ${list._length}`);


console.log(`Node at position: 2 = ${list.searchNodeAt(2).data}`);

list.remove(1);
console.log(`New length: ${list._length}`);


console.log(`List of elements: ${list.traverse()}`);