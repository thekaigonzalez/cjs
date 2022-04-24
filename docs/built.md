# Builtins

The builtins consist of only about `12` functions, for printing text, HTTP, reading input, reading ARGV, and including.

## Functions

### `include(filename)`

Run the file at path `filename`, and run it as if the code was in the current file.

### _printf

A basic print format function, a wrapper around this exists, and should be used.

### _sysread

A file reading function, returns all the text in the specified file.

### _syscreate

Creates a file.

### _syslist

Returns a list of files in a directory

### exit

Exits the programming

### _syslstash

Reads a line of input from stdin

### _fork

Creates a new process.

### _sysHttpGet

Returns a string with source from given url