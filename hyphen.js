#!/usr/bin/env node

import { argv } from "yargs";

 console.dir(argv);
 console.log('(%d,%d)', argv.x, argv.y);
    console.log(argv._);
// console.log(argv["a"]);

// var arguments = {};

// for (var c in argv){
//     console.log(argv[c]);
//     arguments[c] = argv[c];
// }

// var keys = Object.keys(arguments)

// if(keys.length == 2 && (arguments['a'] == true)){

//     console.log("all the files does not exclude anything");
// }
// else if(argv['a'] == true){

//     console.log("one more option.");
// }
// else{
//     console.log("else condition");
// }


