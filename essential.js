// Licensed under the GNU GPL v3 License

include("stdio")

function help() {
    printf("Welcome to CJS!")
    printf("CJS (Also called IronJS) is a JavaScript runtime with a tiny standard library inspired by C's standard library.")
}

function defclass() {
    let classObj = {}
    classObj["new"] = function( ) { return classObj }
    return classObj
}