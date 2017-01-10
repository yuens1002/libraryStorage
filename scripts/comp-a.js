var a = {
	name: 'john',
	sayName: function() {
		console.log(this.name);
	}
};
libraryStorage.librarySystem('a', function() {
	return a;
});
