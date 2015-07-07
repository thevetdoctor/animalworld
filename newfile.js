(function () {
	'use strict';

	var app = {
		truthyValues: function (arr) {
			return arr.filter(function (item) {
				return !!item;
			});
		},
		falsyValues: function (arr) {
			return arr.filter(function (item) {
				return !item;
			});
		},
		increaseByTwo: function (arr) {
			return arr.map(function (item) {
				if (typeof item === 'number') {
					return item * 2;
				} else {
					throw 'error error error!!!';
				}
			});
		}
	}
} ());