// Licensed under the GNU GPL v3 License

var WebPipe = {
    buffer : "",
    getData: function() {
        return this.buffer
    },
    Append: function(s) {
        this.buffer += s
    }
}

function downloadWebString(pipe, url) {
    pipe.Append(_sysHttpGet(url))
}