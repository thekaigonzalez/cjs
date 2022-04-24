// Licensed under the GNU GPL v3 License

include ("algo/remove")

var String = {
    internal: "",

    initialize: function (init_value) {
        this.internal = init_value
    },

    get: function() {
        return this.internal
    },

    rmAt: function(index) {
        this.internal = remove(this.internal, index)
    }
}