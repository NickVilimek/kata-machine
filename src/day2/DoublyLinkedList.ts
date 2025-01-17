type LNode<T> = {
    val?: T;
    next?: LNode<T>;
    prev?: LNode<T>;
}

export default class DoublyLinkedList<T> {
    public length: number;

    private head?: LNode<T>;
    private tail?: LNode<T>;
    

    constructor() {
    }

    prepend(item: T): void {

}
    insertAt(item: T, idx: number): void {

}
    append(item: T): void {

}
    remove(item: T): T | undefined {

}
    get(idx: number): T | undefined {

}
    removeAt(idx: number): T | undefined {

}
}