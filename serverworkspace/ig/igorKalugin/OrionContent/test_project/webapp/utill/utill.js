sap.ui.define([

], function() {
	"use strict";

	return {
		
		setVisibleByContent: function (aFields) {
			
			//установка property visible для элементов SimpleForm
			aFields.forEach(function(oItem) {
				if (oItem instanceof sap.m.Label) {
					return;
				} else if (oItem instanceof sap.m.ProgressIndicator) {
					if(oItem.getDisplayValue()) {
						oItem.setVisible(true);
					} else {
						oItem.setVisible(false);
					}                  
				} else {
					if(oItem.getText()) {
						oItem.setVisible(true);
					} else {
						oItem.setVisible(false);
					} 
				}
			});
		}
	};
});