class QNode<T> {
    public value: T;
    public next: undefined | QNode<T>; 

    constructor() {
        this.next = undefined;
    }
}

// 1
// HT
// 1 -> 2
// H    T
// 1 -> 2 -> 3

export default class Queue<T> {
    public length: number;

    private head?: QNode<T>;
    private tail?: QNode<T>;

    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }

    enqueue(item: T): void {
        const newNode = new QNode<T>();
        newNode.value = item;
        this.length++;

        if(!this.tail) {
            this.head = this.tail = newNode;
            return;
        } 
        console.log(this.head)

        this.tail.next = newNode;
        this.tail = newNode;

    }

    deque(): T | undefined {
        if(!this.head) return undefined;
        this.length--;

        const head = this.head;
        this.head = this.head.next;

        return head.value;
    }

    peek(): T | undefined {
        return this.head?.value;
    }
}