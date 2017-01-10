var b = {
	friends: {
		Sarah: {
			height: '5ft',
			'hair-color': 'red',
			interests: 'dancing'
		},
		Mike: {
			height: '5.6ft',
			'hair-color': 'brown',
			interests: 'books'
		}
	},
	printIntro: function() {
		libraryStorage.a.sayName.call(a);
	}
};
libraryStorage.librarySystem('b', function() {
	return b;
});
