var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'الحاسب الالي',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> الحاسب الالي'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'الانشطة ',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الانشطة '
            });
var format__3 = new ol.format.GeoJSON();
var features__3 = format__3.readFeatures(json__3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__3.addFeatures(features__3);
var lyr__3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__3, 
                style: style__3,
                popuplayertitle: 'الكهرباء انشائية ',
                interactive: true,
                title: '<img src="styles/legend/_3.png" /> الكهرباء انشائية '
            });
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__4, 
                style: style__4,
                popuplayertitle: 'تمديدات صحية',
                interactive: true,
                title: '<img src="styles/legend/_4.png" /> تمديدات صحية'
            });
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__5, 
                style: style__5,
                popuplayertitle: 'ميكانيكا عامة',
                interactive: true,
                title: '<img src="styles/legend/_5.png" /> ميكانيكا عامة'
            });
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__6, 
                style: style__6,
                popuplayertitle: 'تبريد وتكيف',
                interactive: true,
                title: '<img src="styles/legend/_6.png" /> تبريد وتكيف'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__7, 
                style: style__7,
                popuplayertitle: 'ميكانيكا سيارات ',
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> ميكانيكا سيارات '
            });
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__8, 
                style: style__8,
                popuplayertitle: 'سمكرة ودهان',
                interactive: true,
                title: '<img src="styles/legend/_8.png" /> سمكرة ودهان'
            });
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__9, 
                style: style__9,
                popuplayertitle: 'الالكترونيات',
                interactive: true,
                title: '<img src="styles/legend/_9.png" /> الالكترونيات'
            });
var format__10 = new ol.format.GeoJSON();
var features__10 = format__10.readFeatures(json__10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__10.addFeatures(features__10);
var lyr__10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__10, 
                style: style__10,
                popuplayertitle: 'نجارة عامة',
                interactive: true,
                title: '<img src="styles/legend/_10.png" /> نجارة عامة'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__11, 
                style: style__11,
                popuplayertitle: 'الكفتيريا',
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> الكفتيريا'
            });
var format__12 = new ol.format.GeoJSON();
var features__12 = format__12.readFeatures(json__12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__12.addFeatures(features__12);
var lyr__12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__12, 
                style: style__12,
                popuplayertitle: 'الخدمات الطلابية',
                interactive: true,
                title: '<img src="styles/legend/_12.png" /> الخدمات الطلابية'
            });
var format_2to_1_13 = new ol.format.GeoJSON();
var features_2to_1_13 = format_2to_1_13.readFeatures(json_2to_1_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2to_1_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2to_1_13.addFeatures(features_2to_1_13);
var lyr_2to_1_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2to_1_13, 
                style: style_2to_1_13,
                popuplayertitle: 'الالكترونيات2 — to_1',
                interactive: true,
                title: '<img src="styles/legend/2to_1_13.png" /> الالكترونيات2 — to_1'
            });
var format_3400900009_14 = new ol.format.GeoJSON();
var features_3400900009_14 = format_3400900009_14.readFeatures(json_3400900009_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_3400900009_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_3400900009_14.addFeatures(features_3400900009_14);
var lyr_3400900009_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_3400900009_14, 
                style: style_3400900009_14,
                popuplayertitle: '3400900009',
                interactive: true,
                title: '<img src="styles/legend/3400900009_14.png" /> 3400900009'
            });
var group_halls = new ol.layer.Group({
                                layers: [lyr_3400900009_14,],
                                fold: 'open',
                                title: 'halls'});
var group_hallway = new ol.layer.Group({
                                layers: [lyr_2to_1_13,],
                                fold: 'open',
                                title: 'hall way'});
var group_bulding = new ol.layer.Group({
                                layers: [lyr__1,lyr__2,lyr__3,lyr__4,lyr__5,lyr__6,lyr__7,lyr__8,lyr__9,lyr__10,lyr__11,lyr__12,],
                                fold: 'open',
                                title: 'bulding'});

lyr_GoogleSatellite_0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr__3.setVisible(true);lyr__4.setVisible(true);lyr__5.setVisible(true);lyr__6.setVisible(true);lyr__7.setVisible(true);lyr__8.setVisible(true);lyr__9.setVisible(true);lyr__10.setVisible(true);lyr__11.setVisible(true);lyr__12.setVisible(true);lyr_2to_1_13.setVisible(true);lyr_3400900009_14.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_bulding,group_hallway,group_halls];
lyr__1.set('fieldAliases', {'id': 'id', });
lyr__2.set('fieldAliases', {'id': 'id', });
lyr__3.set('fieldAliases', {'id': 'id', });
lyr__4.set('fieldAliases', {'id': 'id', });
lyr__5.set('fieldAliases', {'id': 'id', });
lyr__6.set('fieldAliases', {'id': 'id', });
lyr__7.set('fieldAliases', {'id': 'id', });
lyr__8.set('fieldAliases', {'id': 'id', });
lyr__9.set('fieldAliases', {'id': 'id', });
lyr__10.set('fieldAliases', {'id': 'id', });
lyr__11.set('fieldAliases', {'id': 'id', });
lyr__12.set('fieldAliases', {'id': 'id', });
lyr_2to_1_13.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_3400900009_14.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr__1.set('fieldImages', {'id': 'TextEdit', });
lyr__2.set('fieldImages', {'id': 'TextEdit', });
lyr__3.set('fieldImages', {'id': 'TextEdit', });
lyr__4.set('fieldImages', {'id': 'TextEdit', });
lyr__5.set('fieldImages', {'id': 'TextEdit', });
lyr__6.set('fieldImages', {'id': 'TextEdit', });
lyr__7.set('fieldImages', {'id': 'TextEdit', });
lyr__8.set('fieldImages', {'id': 'TextEdit', });
lyr__9.set('fieldImages', {'id': 'TextEdit', });
lyr__10.set('fieldImages', {'id': 'TextEdit', });
lyr__11.set('fieldImages', {'id': 'TextEdit', });
lyr__12.set('fieldImages', {'id': 'TextEdit', });
lyr_2to_1_13.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_3400900009_14.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr__1.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__2.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__3.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__4.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__5.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__6.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__7.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__8.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__9.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__10.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__11.set('fieldLabels', {'id': 'inline label - always visible', });
lyr__12.set('fieldLabels', {'id': 'inline label - always visible', });
lyr_2to_1_13.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', });
lyr_3400900009_14.set('fieldLabels', {'fid': 'inline label - always visible', 'id': 'inline label - always visible', });
lyr_3400900009_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});