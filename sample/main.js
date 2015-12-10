'use strict';

let fdialog = require('../index.js');

class Dialog {
	
	constructor() {
		
	}
	
	open(accept, multiple, path, callback) {
		let Dialog = new fdialog.FDialog({
	    	type: 'open',
	    	accept: accept ? accept : null,
	    	multiple: multiple,
	    	path: path
	  	});
	  	Dialog.getFilePath(function (err, filePath) {
		  	console.log('Dialog', filePath);
		  	callback(err, filePath);
	    });
	}
	
}

module.exports.Dialog = new Dialog();