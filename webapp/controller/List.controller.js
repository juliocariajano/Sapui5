sap.ui.define([
    "./Base.controller",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
],
    function (Controller,Filter,FilterOperator) {
        "use strict";

        return Controller.extend("appviewcatalog.controller.List", {
            onInit: function () {
            
            },
            onPressProduct: function(oEvent){
                let oItem= oEvent.getSource().getSelectedItem().getBindingContext("mProduct").getObject();
                let idxProduct = this.getView().getModel("mProduct").getData().ProductCollection.indexOf(oItem)
             
                this.onNavTo("ViewDetail",{
                    productId: idxProduct
                })              
            },
            onSearch: function(oEvent){
                let aFilters = [];
                let sQuery = oEvent.getSource().getValue();

                if(sQuery && sQuery.length > 0){
                    let oFilter = new Filter("Name", FilterOperator.Contains,sQuery);
                    aFilters.push(oFilter)
                }

                let oList = this.byId("listProducts");
                console.log("olist",oList)
                let oBinding = oList.getBinding("items")
                oBinding.filter(aFilters)
            }
        });
    });
