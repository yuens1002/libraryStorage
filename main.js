'use strict';
var libraryStorage = {
	librarySystem: function (libraryName, callback) {
		libraryStorage[libraryName] = callback();
	}
};
window.libraryStorage = libraryStorage;
