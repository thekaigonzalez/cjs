// Licensed under the GNU GPL v3 License

include("pipe/buffer")

// removes a character at the index
function remove(str, index) {

    let s = Buffer

    s.set("")

    for (let i = 0; i < str.length; ++i) {
        if (i == index) {
            continue
        } else {
            s.append(str[i])
        }
    }

    return s.get_value();
}