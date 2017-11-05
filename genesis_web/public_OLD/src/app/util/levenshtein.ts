/* https://github.com/gustf/js-levenshtein
*/


function _min(d0, d1, d2, bx, ay) {
    return d0 < d1 || d2 < d1 ?
        d0 > d2 ?
            d2 + 1 :
            d0 + 1 :
        bx === ay ?
            d1 :
            d1 + 1;
}

export function findNearest(name, list) {

    let min_dist;
    let ret;

    for (let i = 0; i < list.length; i++) {
        if (!list[i]) { continue }
        const dist = levendist(name, list[i])
        if (dist === 0) { return i; }

        if ( dist >= min_dist ) { continue }

        min_dist = dist
        ret = i
    }

    return  ret;

}
export function levendist(a, b) {
    if (a === b) {
        return 0;
    }

    if (a.length > b.length) {
        const tmp = a;
        a = b;
        b = tmp;
    }

    let la = a.length;
    let lb = b.length;

    while (la > 0 && (a.charCodeAt(la - 1) === b.charCodeAt(lb - 1))) {
        la--;
        lb--;
    }

    let offset = 0;

    while (offset < la && (a.charCodeAt(offset) === b.charCodeAt(offset))) {
        offset++;
    }

    la -= offset;
    lb -= offset;

    if (la === 0 || lb === 1) {
        return lb;
    }

    let x;
    let y;
    let d0;
    let d1;
    let d2;
    let d3;
    let dd;
    let dy;
    let ay;
    let bx0;
    let bx1;
    let bx2;
    let bx3;

    // tslint:disable-next-line:no-bitwise
    const vector = new Array(la << 1);

    for (y = 0; y < la; ) {
        vector[la + y] = a.charCodeAt(offset + y);
        vector[y] = ++y;
    }

    for (x = 0;
        (x + 3) < lb; ) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        bx1 = b.charCodeAt(offset + (d1 = x + 1));
        bx2 = b.charCodeAt(offset + (d2 = x + 2));
        bx3 = b.charCodeAt(offset + (d3 = x + 3));
        dd = (x += 4);
        for (y = 0; y < la; ) {
            ay = vector[la + y];
            dy = vector[y];
            d0 = _min(dy, d0, d1, bx0, ay);
            d1 = _min(d0, d1, d2, bx1, ay);
            d2 = _min(d1, d2, d3, bx2, ay);
            dd = _min(d2, d3, dd, bx3, ay);
            vector[y++] = dd;
            d3 = d2;
            d2 = d1;
            d1 = d0;
            d0 = dy;
        }
    }

    for (; x < lb; ) {
        bx0 = b.charCodeAt(offset + (d0 = x));
        dd = ++x;
        for (y = 0; y < la; y++) {
            dy = vector[y];
            vector[y] = dd = dy < d0 || dd < d0 ?
                dy > dd ? dd + 1 : dy + 1 :
                bx0 === vector[la + y] ?
                    d0 :
                    d0 + 1;
            d0 = dy;
        }
    }

    return dd;
};
