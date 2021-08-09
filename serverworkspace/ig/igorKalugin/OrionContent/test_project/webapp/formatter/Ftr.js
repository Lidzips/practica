sap.ui.define([
	"sap/ui/core/ValueState"
], function(ValueState) {
	"use strict";

	return {
		getTextByCode: function (sCode) {
			var resourceBundle = this.getView().getModel("i18n").getResourceBundle();
			switch (sCode) {
				case "1":
					return resourceBundle.getText("priorityText1");
				case "2":
					return resourceBundle.getText("priorityText2");
				case "3":
					return resourceBundle.getText("priorityText3");
				case "4":
					return resourceBundle.getText("priorityText4");
				default:
					return sCode;
			}
		},
		
		getColourByCode: function (sCode) {
			switch (sCode) {
				case "1":
					return ValueState.Error;
				case "2":
					return ValueState.Warning;
				case "3":
					return ValueState.Warning;
				case "4":
					return ValueState.Success;
				default:
					return sCode;
			}
		}
	};
});