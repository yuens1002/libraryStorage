'use strict';
libraryStorage.librarySystem('a', function() {
	var a = {
		name: 'john',
		sayName: function() {
			console.log(this.name);
		}
		};
	return a;
});
