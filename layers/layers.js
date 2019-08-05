var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_TIPOREGISTRO = new ol.format.GeoJSON();
var features_TIPOREGISTRO = format_TIPOREGISTRO.readFeatures(geojson_TIPOREGISTRO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TIPOREGISTRO = new ol.source.Vector();
jsonSource_TIPOREGISTRO.addFeatures(features_TIPOREGISTRO);var lyr_TIPOREGISTRO = new ol.layer.Vector({
                source:jsonSource_TIPOREGISTRO, 
                style: style_TIPOREGISTRO,
                title: "TIPO REGISTRO"
            });

lyr_TIPOREGISTRO.setVisible(true);
var layersList = [baseLayer,lyr_TIPOREGISTRO];
lyr_TIPOREGISTRO.set('fieldAliases', {'Cod_Per': 'Cod_Per', 'Modalidad': 'Modalidad', 'Titular': 'Titular', 'Departamen': 'Departamento', 'Prov': 'Provincia', 'Distrito': 'Distrito', 'Sector': 'Sector', 'Tipo_Regis': 'Tipo_Regis', 'Desc_Tipo_': 'Desc_Tipo_', 'Ni_Res_Apr': 'Ni_Res_Apr', 'Vigencia': 'Vigencia', 'Vol_Apro_1': 'Volumen Aprobado', 'Especies_A': 'Especies Aprobadas', });
lyr_TIPOREGISTRO.set('fieldImages', {'Cod_Per': 'TextEdit', 'Modalidad': 'TextEdit', 'Titular': 'TextEdit', 'Departamen': 'TextEdit', 'Prov': 'TextEdit', 'Distrito': 'TextEdit', 'Sector': 'TextEdit', 'Tipo_Regis': 'TextEdit', 'Desc_Tipo_': 'TextEdit', 'Ni_Res_Apr': 'TextEdit', 'Vigencia': 'TextEdit', 'Vol_Apro_1': 'TextEdit', 'Especies_A': 'TextEdit', });
lyr_TIPOREGISTRO.set('fieldLabels', {'Cod_Per': 'inline label', 'Modalidad': 'inline label', 'Titular': 'inline label', 'Departamen': 'inline label', 'Prov': 'inline label', 'Distrito': 'inline label', 'Sector': 'inline label', 'Tipo_Regis': 'inline label', 'Desc_Tipo_': 'inline label', 'Ni_Res_Apr': 'inline label', 'Vigencia': 'inline label', 'Vol_Apro_1': 'inline label', 'Especies_A': 'no label', });
lyr_TIPOREGISTRO.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});