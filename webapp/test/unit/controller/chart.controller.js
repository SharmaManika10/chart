/*global QUnit*/

sap.ui.define([
	"chart/chart/controller/chart.controller"
], function (Controller) {
	"use strict";

	QUnit.module("chart Controller");

	QUnit.test("I should test the chart controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});