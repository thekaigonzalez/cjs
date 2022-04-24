// Licensed under the GNU GPL v3 License

// A class wrapper around a file.
// Always include stdio before using stdfile, as
// it provides the necessary functions. (to prevent bloating)

/*
The file class.

This is used as a wrapper around the syscreate, and sysread functions.

*/
var File = {
    Wpath: "",
    Wmode: "",

    open: function (path, mode) {
        this.Wpath = path;
        this.Wmode = mode
    },

    write: function (text) {
        if (this.Wmode == "w" || this.Wmode == "w+") {
            _syscreate(this.Wpath, text);
        } else {
            printf("You can not write to a file not made for writing. (mode != w/w+)")
        }
    },

    read: function() {
        if (this.Wmode == "r") {
            return _sysread(this.Wpath)
        } else {
            printf("You can not read a file not made for reading (mode != r)")
        }
    }
}

/*
open(dir, mode) => Fole
*/