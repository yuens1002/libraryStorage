libraryStorage = {
	librarySystem: function librarySystem(libraryName, callback) {
		// creates the library
		if (arguments.length > 1) {
			libraryStorage[libraryName] = callback();
		} else {
			return libraryStorage[libraryName];
		}
	}
};
