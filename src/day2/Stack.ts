type SNode<T> = {
    val: T;
    next?: SNode<T>;
}

// 1 2 3 4
// H

export default class Stack<T> {
    public length: number;
    private head?: SNode<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const nNode = {val: item} as SNode<T>;
        this.length++;
        if(!this.head) {
            this.head = nNode;
            return;
        }
        // 1 <- 2
        nNode.next = this.head;
        this.head = nNode;
    }

    pop(): T | undefined {
        if(!this.head) return undefined;
        this.length--;
        const temp = this.head;
        this.head = this.head.next;
        return temp.val;
    }

    peek(): T | undefined {
        return this.head?.val;
    }
}