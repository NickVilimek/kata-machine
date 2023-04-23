function proos(head: BinaryNode<number> | null, path: number[]) {
    if(!head) return;

    proos(head.left, path);
    proos(head.right, path);
    path.push(head.value);
}

export default function post_order_search(head: BinaryNode<number>): number[] {

    const path: number[] = [];
    proos(head, path);
    return path;
}