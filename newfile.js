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
		}
	}
} ());