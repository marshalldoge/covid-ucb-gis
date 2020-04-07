let view;
require([
	"esri/Map",
	"esri/views/MapView",
	"esri/widgets/BasemapToggle",
	"esri/widgets/BasemapGallery",
	"esri/layers/FeatureLayer"
], function(Map, MapView, BasemapToggle, BasemapGallery, FeatureLayer) {


	var map = new Map({
		basemap: "dark-gray-vector"
	});

	view = new MapView({
		container: "viewDiv",
		map: map,
		center: [-63.588654, -16.290154], // longitude, latitude
		zoom: 5
	});

	var municipiosNamesLabels = {
		symbol: {
			type: "text",
			color: "#FFFFFF",
			haloColor: "#5E8D74",
			haloSize: "2px",
			font: {
				size: "12px",
				family: "Noto Sans",
				style: "italic",
				weight: "normal"
			}
		},
		labelPlacement: "above-center",
		labelExpressionInfo: {
			expression: "$feature.PROVINCIA"
		}
	};

	var municipiosLayer = new FeatureLayer({
		url: "https://services9.arcgis.com/vYNBcEUBietJofSS/arcgis/rest/services/municipios339/FeatureServer",
		labelingInfo: [municipiosNamesLabels]
	});

	map.add(municipiosLayer);
});
