# CJS

> *from the creator of NFy, RCBash, and SDKL,*

Presenting, IronJS! (CJS)

IronJS is a javascript runtime that has a standard library similar to C's, following many C principles, allows for more readability, and simplicity. 

[View the builtins here](./built.md)

## Examples
(**Print Hello world**)

```js

include("stdio")

function main() {
    printf("hello, CJS!");
}

main()

```

(**Create a file**)

```js

include ("stdio") // for printf() -> required for stdfile
inclide ("stdfile") // for File class

let myFileStream = File;

myFileStream.open("hello.txt", "w")

myFileStream.write("Hello, CJS!")

```

(**Get a file from the internet**)

```js

include ("net/client") // for WebPipe & downloadWebString

let pipe = WebPipe // Create a pipe - this holds data about a website (or website(s)) (a buffer)

// download the contents into the pipe
downloadWebString(pipe, "https://example.com")

// Print the data from the buffer
printf(pipe.getData())

```

(**Add text to the beginning of a string**)

```js

include ("stdio") // printf
include ("stdprefix") // Prefix class

let preGen = Prefix // create a new prefix generator

preGen.setPrefix("[Text before] - "); // Set the internal prefix as [Text before] - {TEXT}

printf(preGen.prepend("This is text after my prefix!")) // Print a result of prepending the text.

```

(**Run help from another process**)

```js

include ("sub/process") // fork() a wrapper around the _fork() builtin, objectively.

fork("cmd.exe", "/c help") // fork new process. This is equivalent to running cmd.exe /c help on the command line.

```

(**Iterate an array using foreach**)

```js

include ("algo/for")
include ("stdio")

foreach ([1,2,3], function (num) {
    printf(num + 1)
}) // Output - 2, 3, 4

```

(**Remove the first letter of a string**)

Basic method:

```js

include("stdio")
include("algo/remove")

// basic approach
function RemoveFirstLetter(myString) {
    return remove(myString, 0)
}

```

Object oriented approach:

```js

include ("stringutil")

// Object-based approach (OOP)
function ORemoveFirstLetter(myStringBase) {

    let Converted = String // use the string object
    
    Converted.initialize(myStringBase) // Initialize it with value of "myStringBase"

    Converted.rmAt(0) // Remove the character at the index

    return Converted.get(); // Return the resulting string.
}

```

```