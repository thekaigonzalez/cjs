// Licensed under the GNU GPL v3 License

/* Print format */
/* this function is a wrapper around the _printf and print() functions. */
function printf(fmt, e) {
    if (e) {
        _printf(fmt, e)
    } else {
        print(fmt); // without any extra formatting
    }
}

function read() {
    return _syslstash();
}