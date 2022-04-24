// Licensed under the GNU GPL v3 License

function assert(r) {
    if (r) return 0
    else {
        printf("Assertion failed!\nexpression: (" + r + ") != true")
        return exit(-1)
    }
}