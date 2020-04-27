console.log("i am running")
const pwd = (cmd) => {
    if (cmd === 'pwd') {
        console.log('if statement executed')
        process.stdout.write(process.cwd())
        process.stdout.write('\nprompt > ')
    }
}

module.exports.pwd = pwd