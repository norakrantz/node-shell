const fs = require('fs')

const cat = (cmd, path) =>  {
    if (cmd === 'cat') {
        fs.readFile(`./${path}`, 'utf8', (err, data) => {
            if (err) {
                throw err
            } else {
                console.log(data)
                process.stdout.write("prompt > ")
            }
        })
    }
}

module.exports.cat = cat
