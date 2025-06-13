var wms_layers = [];


        var lyr_SatelitegoogleMap_0 = new ol.layer.Tile({
            'title': 'Satelite googleMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.com/maps/vt?lyrs=s@180&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_GML_ParcelasCadastralParcel_1 = new ol.format.GeoJSON();
var features_GML_ParcelasCadastralParcel_1 = format_GML_ParcelasCadastralParcel_1.readFeatures(json_GML_ParcelasCadastralParcel_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GML_ParcelasCadastralParcel_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GML_ParcelasCadastralParcel_1.addFeatures(features_GML_ParcelasCadastralParcel_1);
var lyr_GML_ParcelasCadastralParcel_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GML_ParcelasCadastralParcel_1, 
                style: style_GML_ParcelasCadastralParcel_1,
                popuplayertitle: 'GML_Parcelas — CadastralParcel',
                interactive: false,
                title: '<img src="styles/legend/GML_ParcelasCadastralParcel_1.png" /> GML_Parcelas — CadastralParcel'
            });
var format_EmpresesPolgonRiuClar_2 = new ol.format.GeoJSON();
var features_EmpresesPolgonRiuClar_2 = format_EmpresesPolgonRiuClar_2.readFeatures(json_EmpresesPolgonRiuClar_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EmpresesPolgonRiuClar_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EmpresesPolgonRiuClar_2.addFeatures(features_EmpresesPolgonRiuClar_2);
var lyr_EmpresesPolgonRiuClar_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EmpresesPolgonRiuClar_2, 
                style: style_EmpresesPolgonRiuClar_2,
                popuplayertitle: 'Empreses Polígon Riu Clar',
                interactive: true,
                title: '<img src="styles/legend/EmpresesPolgonRiuClar_2.png" /> Empreses Polígon Riu Clar'
            });

lyr_SatelitegoogleMap_0.setVisible(true);lyr_GML_ParcelasCadastralParcel_1.setVisible(true);lyr_EmpresesPolgonRiuClar_2.setVisible(true);
var layersList = [lyr_SatelitegoogleMap_0,lyr_GML_ParcelasCadastralParcel_1,lyr_EmpresesPolgonRiuClar_2];
lyr_GML_ParcelasCadastralParcel_1.set('fieldAliases', {'gml_id': 'gml_id', 'areaValue': 'areaValue', 'areaValue_uom': 'areaValue_uom', 'beginLifespanVersion': 'beginLifespanVersion', 'endLifespanVersion': 'endLifespanVersion', 'localId': 'localId', 'namespace': 'namespace', 'label': 'label', 'nationalCadastralReference': 'nationalCadastralReference', 'pos': 'pos', });
lyr_EmpresesPolgonRiuClar_2.set('fieldAliases', {'id': 'id', '._NOM SABI': '._NOM SABI', '._NOM COMERCIAL': '._NOM COMERCIAL', '._NIF': '._NIF', '._IAE': '._IAE', '._ADREÇA': '._ADREÇA', '._Nº TELÈFON': '._Nº TELÈFON', '._WEB': '._WEB', '._TREBALLADORS (2023)': '._TREBALLADORS (2023)', '._IN.EXPLOT.': '._IN.EXPLOT.', 'numdecimal': 'numdecimal', });
lyr_GML_ParcelasCadastralParcel_1.set('fieldImages', {'gml_id': 'TextEdit', 'areaValue': 'Range', 'areaValue_uom': 'TextEdit', 'beginLifespanVersion': 'TextEdit', 'endLifespanVersion': 'TextEdit', 'localId': 'TextEdit', 'namespace': 'TextEdit', 'label': 'TextEdit', 'nationalCadastralReference': 'TextEdit', 'pos': 'TextEdit', });
lyr_EmpresesPolgonRiuClar_2.set('fieldImages', {'id': 'TextEdit', '._NOM SABI': 'TextEdit', '._NOM COMERCIAL': 'TextEdit', '._NIF': 'TextEdit', '._IAE': 'TextEdit', '._ADREÇA': 'TextEdit', '._Nº TELÈFON': 'TextEdit', '._WEB': 'TextEdit', '._TREBALLADORS (2023)': 'TextEdit', '._IN.EXPLOT.': 'TextEdit', 'numdecimal': 'TextEdit', });
lyr_GML_ParcelasCadastralParcel_1.set('fieldLabels', {'gml_id': 'no label', 'areaValue': 'no label', 'areaValue_uom': 'no label', 'beginLifespanVersion': 'no label', 'endLifespanVersion': 'no label', 'localId': 'no label', 'namespace': 'no label', 'label': 'no label', 'nationalCadastralReference': 'no label', 'pos': 'no label', });
lyr_EmpresesPolgonRiuClar_2.set('fieldLabels', {'id': 'hidden field', '._NOM SABI': 'header label - always visible', '._NOM COMERCIAL': 'header label - always visible', '._NIF': 'header label - always visible', '._IAE': 'header label - always visible', '._ADREÇA': 'header label - always visible', '._Nº TELÈFON': 'header label - always visible', '._WEB': 'header label - always visible', '._TREBALLADORS (2023)': 'header label - always visible', '._IN.EXPLOT.': 'header label - always visible', 'numdecimal': 'hidden field', });
lyr_EmpresesPolgonRiuClar_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});