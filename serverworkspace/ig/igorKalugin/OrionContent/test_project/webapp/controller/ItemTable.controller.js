sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"test/projecttest_project/formatter/Ftr",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator",
	"sap/ui/model/json/JSONModel"
], function(Controller, Ftr, Filter, FilterOperator, JSONModel) {
	"use strict";

	return Controller.extend("test.projecttest_project.controller.ItemTable", {
		sFormatter : Ftr,
		onInit: function () {
			var oView = this.getView();
			var sViewModelPath = jQuery.sap.getModulePath("test.projecttest_project.model.Reports", ".json");
			var oViewModel = new JSONModel(sViewModelPath);
			
			this.FilterBar = oView.byId("FilterBar");
			this.Table = oView.byId("itemTable");
			
			this.FilterBar.bindElement("view>/filter");
			
			oView.setModel(oViewModel, "view");
		},
		
		onReset : function (oEvent) {

		},
		
		onFiltersApply: function (oEvent) {
			var oLstBinding = this.Table.getBinding("items");
			var aFilters = [];
			
			var oFiltersData = this.getView().getModel("view").getProperty("/filter");
			
			for (var sKey in oFiltersData) {
				var oFilterData = oFiltersData[sKey];
				if (oFilterData.value1) {
					var oFilter;
					if (oFilterData.value2) {
						oFilter = new Filter(sKey, oFilterData.operator, oFilterData.value1, oFilterData.value2);
					} else {
						oFilter = new Filter(sKey, oFilterData.operator, oFilterData.value1);
					}
					aFilters.push(oFilter);
				}
			} 
			oLstBinding.filter(aFilters);
		},
		
		onItemPress: function (oEvent) {
			this.getOwnerComponent().getRouter().navTo("ItemTableDetail", {
				Guid : oEvent.getSource().getBindingContext().getProperty("Guid")
			});
		}
		
	});
});