// Licensed under the GNU GPL v3 License


var Prefix = {
    tH: "",

    setPrefix: function(f) {
        this.tH = f;
    },

    prepend: function (string) {
        return this.tH + string
    }
}