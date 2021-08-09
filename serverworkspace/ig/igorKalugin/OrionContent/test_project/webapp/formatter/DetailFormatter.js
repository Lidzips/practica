sap.ui.define([
	"sap/ui/core/ValueState",
	"sap/ui/core/IndicationColor"
], function(ValueState, IndicationColor) {
	"use strict";

	return {
	
		getPriorityColourByCode: function (sCode) {
			switch (sCode) {
				case "1":
					return IndicationColor.Indication01;
				case "2":
					return IndicationColor.Indication02;
				case "3":
					return IndicationColor.Indication03;
				case "4":
					return IndicationColor.Indication04;
				default:
					return sCode;
			}
		},
		
		getColourByBool: function (sCode) {
			switch (sCode) {
				case true:
					return IndicationColor.Indication04;
				case false:
					return IndicationColor.Indication02;
				default:
					return sCode;
			}
		}
	};
});