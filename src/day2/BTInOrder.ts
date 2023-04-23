function ios(head: BinaryNode<number> | null, path: number[]) {
    if(!head) return;

    ios(head.left, path);
    path.push(head.value);
    ios(head.right, path);

}

export default function in_order_search(head: BinaryNode<number>): number[] {
    const path: number[] = [];
    ios(head, path);
    return path;
}