#kb: current
left: {
    // 1 1# 2 2# 3
    q:0, w:1, e:2, r:3, t:4,
    // 4 4# 5 5# 6
    a:5, s:6, d:7, f: 8, g:9
    // 6# 7 1 1#
    z:10, x:11, c:12, v:13, b:14

    Q:12, W:13, E:14, R:15, T:16
    A:17, S:18, D:19, F:20, G:21
    Z:22, X:23, C:24, V:25, B:26
}
right: {
    // 1 1# 2 2# 3
    y:0, u:1, i:2, o:3, p:4,
    // 4 4# 5 5# 6
    h:5, j:6, k:7, l: 8, ';':9
    // 6# 7 1 1#
    n:10, m:11, ',':12, '.':13, '/':14

    Y:12, U:13, I:14, O:15, P:16
    H:17, J:18, K:19, L:20, ":":21
    N:22, M:23, "<":24, ">":25, "?":26

}
bases: {
    '1': {left: 16} //..1
    '!': {left: 20} //..3
    '2': {left: 28} //.1
    '@': {left: 32} //.3
    '3': {left: 40} //1
    '#': {left: 44} //3
    '4': {left: 52} //1!
    '$': {left: 56} //3!
    '5': {left: 64} //1!!
    '%': {left: 68} //3!!
    '6': {right: 16} //..1
    '^': {right: 20} //..3
    '7': {right: 28} //.1
    '&': {right: 32} //.3
    '8': {right: 40} //1
    '*': {right: 44} //3
    '9': {right: 52} //1!
    '(': {right: 56} //3!
    '0': {right: 64} //1!!
    ')': {right: 68} //3!!
}