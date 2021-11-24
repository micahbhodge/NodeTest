import {animalList} from './animals.js'
import * as term from 'terminal-kit';
import {message, link} from './message.js'
import * as prompt from 'prompt';
import { megaDeathJuggernaut } from './initialText.js'

const terminal = term.default.terminal;
let animalArray = [];
Object.keys(animalList).sort().forEach(function(key) {
  animalArray += animalList[key].replace('$', 'B').replace('$', 'b')+"\n";
});

const printStrk = function(){ return terminal.slowTyping(
	animalArray ,
	{ flashStyle: term.brightWhite, delay: 20 } ,
	function() { megaDeathJuggernautType() ; }
) ;
};

const finalMessage = function(){ return prompt.default.get(['Press Enter again for final message'], function (err, result) {
    if (err) { return onErr(err); }
    terminal.drawImage(
        link ,
        {shrink: {width: terminal.width, height: terminal.height * 1.7} },
        function() { printMessage() ; }
    );
});
};
const megaDeathJuggernautType = function(){ return terminal.slowTyping(
	megaDeathJuggernaut ,
	{ flashStyle: term.brightWhite, delay: 20 } ,
	function() { 
        console.log();
        finalMessage() ; }
) ;
};
const printMessage = function(){
    return message.forEach(obj => console.log(obj));
};



prompt.default.start();

prompt.default.get(['Press enter to view secret message...'], function (err, result) {
    if (err) { return onErr(err); }
    printStrk();
});