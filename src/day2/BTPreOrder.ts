function preos(head: BinaryNode<number> | null, path: number[]) {
    if(!head) return;

    path.push(head.value);
    preos(head.left, path);
    preos(head.right, path);

}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    preos(head, path);
    return path;
}