sap.ui.define([
		"sap/ui/core/Fragment",
		"sap/ui/core/mvc/Controller",
		"sap/ui/model/json/JSONModel",
		"test/projecttest_project/formatter/DetailFormatter",
		"test/projecttest_project/utill/utill"
	], function(Fragment, Controller, JSONModel, DetailFormatter, utill) {
	"use strict";

	return Controller.extend("test.projecttest_project.controller.ItemTableDetail", {
		sFormatter: DetailFormatter,
		utill: utill,
		onInit: function (oEvent) {
			this.getOwnerComponent().getRouter().getRoute("ItemTableDetail").attachPatternMatched(this.onPatternMatched, this);
		},
		
		onPatternMatched: function (oEvent) {
			var oDataModel = this.getView().getModel();
			var oArgs = oEvent.getParameter("arguments");
			oDataModel.metadataLoaded().then(function() {
				var sPath = oDataModel.createKey("/IncidentSet", {Guid : oArgs.Guid});
				this.getView().bindElement({
					path: sPath,
					events: {
						change: function(){
							utill.setVisibleByContent(this.getView().byId("SF_With_ItemDetails").getContent());
						}.bind(this)
					}
				});
			}.bind(this));
		},
		
		onBackPress: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("ItemTable");
		}
	});
});