var size = 0;
function categories_TIPOREGISTRO(feature, value) {
                switch(value) {case "DEMA":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,26,28,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), fill: new ol.style.Fill({color: 'rgba(251,154,153,1.0)'})
    })];
                    break;
case "PGMF":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(31,120,180,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 1}), 
    })];
                    break;
case "PO":
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(114,133,132,1.0)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: 'rgba(165,191,221,1.0)'})
    })];
                    break;}};
var styleCache_TIPOREGISTRO={}
var style_TIPOREGISTRO = function(feature, resolution){
    var value = feature.get("Tipo_Regis");
    var style = categories_TIPOREGISTRO(feature, value);
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_TIPOREGISTRO[key]){
        var text = new ol.style.Text({
              font: '10.725px \'MS Shell Dlg 2\', sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: 'rgba(0, 0, 0, 255)'
              }),
            });
        styleCache_TIPOREGISTRO[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_TIPOREGISTRO[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};