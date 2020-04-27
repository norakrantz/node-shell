const {pwd} = require('./pwd.js')
const {ls} = require('./ls.js')
const {cat} = require('./cat.js')

process.stdout.write('prompt > ')
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim()
    console.log('console log: ' + cmd)
    pwd(cmd)
    ls(cmd)
    cat(cmd, path)
    process.stdout.write('\nyou typed: ' + cmd)
    process.stdout.write('\nprompt > ')
})
