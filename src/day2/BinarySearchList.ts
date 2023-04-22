export default function bs_list(haystack: number[], needle: number): boolean {

    let l = 0;
    let r = haystack.length;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2)
        if(haystack[mid] === needle) return true
        else if(haystack[mid] >= needle) r = mid -1
        else l = mid + 1
    }

    return false;
}