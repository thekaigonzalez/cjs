// Licensed under the GNU GPL v3 License

var Buffer = {
    val: "",

    append: function(ch) {
        this.val += ch
    },

    set: function(value) {
        this.val = value;
    },

    clean: function() {
        this.val = ""
    },
    
    get_value: function() {
        return this.val
    }

}