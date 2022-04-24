// Licensed under the GNU GPL v3 License

// contains callbacks for specific array operations.

function foreach(arr, callback) {
    for (let i = 0 ; i < arr.length ; ++ i) {
        callback(arr[i])
    }
}

