LoadModule('jsstd');
LoadModule('jsio');

var thisDir = arguments[0].replace(/[^\\/]+$/, '');

Exec(thisDir + 'coffee-script.js');

var retries = 3;
var script;

do {
	
	var script = File.stdin.Read(undefined)
} while (script != undefined && 
         script.length <= 0 && 
		 retries >= 0)


File.stdout.Write(
	  CoffeeScript.compile(
		script, {bare: true}));