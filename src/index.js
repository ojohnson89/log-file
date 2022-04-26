
let fs = require('fs'),
    util = require('util'),
    file = './log/fileLog.log',
    log_file,
    log_stdout,
    folder = './log',
    printConsole = false;


const createFolderAndFile = async ()=>{


    fs.mkdirSync(folder,{recursive:true});

    fs.writeFile(file, "", (err) => {
        if (err) throw err;
    }); 
    log_file = fs.createWriteStream(file, { flags: 'w' });
    log_stdout = process.stdout;
}

createFolderAndFile();

module.exports.settings = async( print = true ) =>{
    
    printConsole = print;
}


module.exports.logSuccess = ( process,...args) => {
    
    let arg = util.format(args.join(' '));
    saveFile( 'success', process, arg );
};
module.exports.logInfo = (...args) => {
    let arg = util.format(args.join(' '));
    saveFile( 'info', process, arg );
};
module.exports.logError = (...args) => {
    let arg = util.format(args.join(' '));
    saveFile( 'error', process, arg );
};
module.exports.logWarning = (...args) => {
    let arg = util.format(args.join(' '));
    saveFile( 'warning', process, arg );
};
module.exports.logFatal = (...args) => {
    let arg = util.format(args.join(' '));
    saveFile( 'fatal', process, arg );
};


function saveFile( status ,process, arg ){
    let idTransaction = Date.now();
    let date = new Date().toISOString();
    log_file.write(`${status} [${date}] ${process} ${idTransaction} ${arg}\n`);
    if (printConsole) log_stdout.write(`${status} [${date}] ${process} ${idTransaction} ${arg}\n`);
}



