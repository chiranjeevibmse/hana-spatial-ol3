sap.ui.jsview("maptest.view.OL3Map", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf maptest.OL3Map
	*/ 
	getControllerName : function() {
		return "maptest.controller.OL3Map";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf maptest.OL3Map
	*/ 
	createContent : function(oController) {
 		return new sap.m.Page({
			title: "OL3 Map",
			content: [
			   new chiru.map.maptest.Map()
			]
		});
	}

});