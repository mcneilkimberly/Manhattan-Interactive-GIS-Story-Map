var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_manhattan_tracts_1 = new ol.format.GeoJSON();
var features_manhattan_tracts_1 = format_manhattan_tracts_1.readFeatures(json_manhattan_tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manhattan_tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manhattan_tracts_1.addFeatures(features_manhattan_tracts_1);
var lyr_manhattan_tracts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_manhattan_tracts_1, 
                style: style_manhattan_tracts_1,
                popuplayertitle: 'manhattan_tracts',
                interactive: true,
    title: 'manhattan_tracts<br />\
    <img src="styles/legend/manhattan_tracts_1_0.png" /> 0 - 24845<br />\
    <img src="styles/legend/manhattan_tracts_1_1.png" /> 24845 - 30864<br />\
    <img src="styles/legend/manhattan_tracts_1_2.png" /> 30864 - 34220<br />\
    <img src="styles/legend/manhattan_tracts_1_3.png" /> 34220 - 40395<br />\
    <img src="styles/legend/manhattan_tracts_1_4.png" /> 40395 - 63170<br />' });
var format_tourist_locations_2 = new ol.format.GeoJSON();
var features_tourist_locations_2 = format_tourist_locations_2.readFeatures(json_tourist_locations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tourist_locations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tourist_locations_2.addFeatures(features_tourist_locations_2);
var lyr_tourist_locations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tourist_locations_2, 
                style: style_tourist_locations_2,
                popuplayertitle: 'tourist_locations',
                interactive: true,
                title: '<img src="styles/legend/tourist_locations_2.png" /> tourist_locations'
            });
var format_manhattan_street_areas_3 = new ol.format.GeoJSON();
var features_manhattan_street_areas_3 = format_manhattan_street_areas_3.readFeatures(json_manhattan_street_areas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_manhattan_street_areas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_manhattan_street_areas_3.addFeatures(features_manhattan_street_areas_3);
var lyr_manhattan_street_areas_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_manhattan_street_areas_3, 
                style: style_manhattan_street_areas_3,
                popuplayertitle: 'manhattan_street_areas',
                interactive: true,
                title: '<img src="styles/legend/manhattan_street_areas_3.png" /> manhattan_street_areas'
            });
var format_bike_routes_4 = new ol.format.GeoJSON();
var features_bike_routes_4 = format_bike_routes_4.readFeatures(json_bike_routes_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bike_routes_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bike_routes_4.addFeatures(features_bike_routes_4);
var lyr_bike_routes_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bike_routes_4, 
                style: style_bike_routes_4,
                popuplayertitle: 'bike_routes',
                interactive: true,
                title: '<img src="styles/legend/bike_routes_4.png" /> bike_routes'
            });
var format_bike_parking_5 = new ol.format.GeoJSON();
var features_bike_parking_5 = format_bike_parking_5.readFeatures(json_bike_parking_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bike_parking_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bike_parking_5.addFeatures(features_bike_parking_5);
var lyr_bike_parking_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bike_parking_5, 
                style: style_bike_parking_5,
                popuplayertitle: 'bike_parking',
                interactive: true,
                title: '<img src="styles/legend/bike_parking_5.png" /> bike_parking'
            });
var format_bridges_6 = new ol.format.GeoJSON();
var features_bridges_6 = format_bridges_6.readFeatures(json_bridges_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bridges_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bridges_6.addFeatures(features_bridges_6);
var lyr_bridges_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_bridges_6, 
                style: style_bridges_6,
                popuplayertitle: 'bridges',
                interactive: true,
                title: '<img src="styles/legend/bridges_6.png" /> bridges'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_manhattan_tracts_1.setVisible(true);lyr_tourist_locations_2.setVisible(true);lyr_manhattan_street_areas_3.setVisible(true);lyr_bike_routes_4.setVisible(true);lyr_bike_parking_5.setVisible(true);lyr_bridges_6.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_manhattan_tracts_1,lyr_tourist_locations_2,lyr_manhattan_street_areas_3,lyr_bike_routes_4,lyr_bike_parking_5,lyr_bridges_6];
lyr_manhattan_tracts_1.set('fieldAliases', {'CTLabel': 'CTLabel', 'BoroCode': 'BoroCode', 'BoroName': 'BoroName', 'CT2020': 'CT2020', 'BoroCT2020': 'BoroCT2020', 'CDEligibil': 'CDEligibil', 'NTAName': 'NTAName', 'NTA2020': 'NTA2020', 'CDTA2020': 'CDTA2020', 'CDTANAME': 'CDTANAME', 'GEOID': 'GEOID', 'PUMA': 'PUMA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'manhattan_median_Name': 'manhattan_median_Name', 'manhattan_median_Household_Income_at_Age_35_rP_gP_p25': 'manhattan_median_Household_Income_at_Age_35_rP_gP_p25', });
lyr_tourist_locations_2.set('fieldAliases', {'id': 'id', 'name': 'name', });
lyr_manhattan_street_areas_3.set('fieldAliases', {'Borough': 'Borough', 'Feat_Type': 'Feat_Type', 'Jurisdicti': 'Jurisdicti', 'Record_ST': 'Record_ST', 'Edit_Date': 'Edit_Date', });
lyr_bike_routes_4.set('fieldAliases', {'segmentid': 'segmentid', 'bikeid': 'bikeid', 'prevbikeid': 'prevbikeid', 'status': 'status', 'boro': 'boro', 'street': 'street', 'fromstreet': 'fromstreet', 'tostreet': 'tostreet', 'onoffst': 'onoffst', 'facilitycl': 'facilitycl', 'allclasses': 'allclasses', 'bikedir': 'bikedir', 'lanecount': 'lanecount', 'ft_facilit': 'ft_facilit', 'tf_facilit': 'tf_facilit', 'ft2facilit': 'ft2facilit', 'tf2facilit': 'tf2facilit', 'date_instd': 'date_instd', 'time_instd': 'time_instd', 'date_ret_d': 'date_ret_d', 'time_ret_d': 'time_ret_d', 'grnwy': 'grnwy', 'gwsystem': 'gwsystem', 'gwsys2': 'gwsys2', 'spur': 'spur', 'gwyjuris': 'gwyjuris', });
lyr_bike_parking_5.set('fieldAliases', {'borocode': 'borocode', 'boroname': 'boroname', 'borocd': 'borocd', 'coundist': 'coundist', 'assemdist': 'assemdist', 'stsendist': 'stsendist', 'congdist': 'congdist', 'program': 'program', 'site_id': 'site_id', 'group_id': 'group_id', 'borough': 'borough', 'ifoaddress': 'ifoaddress', 'onstreet': 'onstreet', 'fromstreet': 'fromstreet', 'tostreet': 'tostreet', 'side_of_st': 'side_of_st', 'racktype': 'racktype', 'date_date_': 'date_date_', 'time_date_': 'time_date_', 'latitude': 'latitude', 'longitude': 'longitude', 'ntaname': 'ntaname', 'femafldz': 'femafldz', 'femafldt': 'femafldt', 'hrcevac': 'hrcevac', });
lyr_bridges_6.set('fieldAliases', {'ObjectID': 'ObjectID', 'BIN': 'BIN', 'Carried': 'Carried', 'Crossed': 'Crossed', 'PrimaryOwn': 'PrimaryOwn', 'PrimaryMai': 'PrimaryMai', 'County': 'County', 'Region': 'Region', 'GTMSStruct': 'GTMSStruct', 'GTMSMateri': 'GTMSMateri', 'NumberOfSp': 'NumberOfSp', 'ConditionR': 'ConditionR', 'LastInspec': 'LastInspec', 'BridgeLeng': 'BridgeLeng', 'DeckAreaSq': 'DeckAreaSq', 'AADT': 'AADT', 'YearBuilt': 'YearBuilt', 'PostedLoad': 'PostedLoad', 'RPosted': 'RPosted', 'Other': 'Other', 'REDC': 'REDC', 'NBI_DeckCo': 'NBI_DeckCo', 'NBI_Substr': 'NBI_Substr', 'NBI_Supers': 'NBI_Supers', 'LocationLa': 'LocationLa', 'FHWA_Condi': 'FHWA_Condi', });
lyr_manhattan_tracts_1.set('fieldImages', {'CTLabel': 'TextEdit', 'BoroCode': 'TextEdit', 'BoroName': 'TextEdit', 'CT2020': 'TextEdit', 'BoroCT2020': 'TextEdit', 'CDEligibil': 'TextEdit', 'NTAName': 'TextEdit', 'NTA2020': 'TextEdit', 'CDTA2020': 'TextEdit', 'CDTANAME': 'TextEdit', 'GEOID': 'TextEdit', 'PUMA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'manhattan_median_Name': 'TextEdit', 'manhattan_median_Household_Income_at_Age_35_rP_gP_p25': 'Range', });
lyr_tourist_locations_2.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', });
lyr_manhattan_street_areas_3.set('fieldImages', {'Borough': 'TextEdit', 'Feat_Type': 'TextEdit', 'Jurisdicti': 'TextEdit', 'Record_ST': 'TextEdit', 'Edit_Date': 'DateTime', });
lyr_bike_routes_4.set('fieldImages', {'segmentid': 'TextEdit', 'bikeid': 'TextEdit', 'prevbikeid': 'TextEdit', 'status': 'TextEdit', 'boro': 'TextEdit', 'street': 'TextEdit', 'fromstreet': 'TextEdit', 'tostreet': 'TextEdit', 'onoffst': 'TextEdit', 'facilitycl': 'TextEdit', 'allclasses': 'TextEdit', 'bikedir': 'TextEdit', 'lanecount': 'TextEdit', 'ft_facilit': 'TextEdit', 'tf_facilit': 'TextEdit', 'ft2facilit': 'TextEdit', 'tf2facilit': 'TextEdit', 'date_instd': 'DateTime', 'time_instd': 'TextEdit', 'date_ret_d': 'DateTime', 'time_ret_d': 'TextEdit', 'grnwy': 'TextEdit', 'gwsystem': 'TextEdit', 'gwsys2': 'TextEdit', 'spur': 'TextEdit', 'gwyjuris': 'TextEdit', });
lyr_bike_parking_5.set('fieldImages', {'borocode': 'TextEdit', 'boroname': 'TextEdit', 'borocd': 'TextEdit', 'coundist': 'TextEdit', 'assemdist': 'TextEdit', 'stsendist': 'TextEdit', 'congdist': 'TextEdit', 'program': 'TextEdit', 'site_id': 'TextEdit', 'group_id': 'TextEdit', 'borough': 'TextEdit', 'ifoaddress': 'TextEdit', 'onstreet': 'TextEdit', 'fromstreet': 'TextEdit', 'tostreet': 'TextEdit', 'side_of_st': 'TextEdit', 'racktype': 'TextEdit', 'date_date_': 'DateTime', 'time_date_': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'ntaname': 'TextEdit', 'femafldz': 'TextEdit', 'femafldt': 'TextEdit', 'hrcevac': 'TextEdit', });
lyr_bridges_6.set('fieldImages', {'ObjectID': 'Range', 'BIN': 'TextEdit', 'Carried': 'TextEdit', 'Crossed': 'TextEdit', 'PrimaryOwn': 'TextEdit', 'PrimaryMai': 'TextEdit', 'County': 'TextEdit', 'Region': 'TextEdit', 'GTMSStruct': 'TextEdit', 'GTMSMateri': 'TextEdit', 'NumberOfSp': 'Range', 'ConditionR': 'TextEdit', 'LastInspec': 'DateTime', 'BridgeLeng': 'TextEdit', 'DeckAreaSq': 'TextEdit', 'AADT': 'TextEdit', 'YearBuilt': 'Range', 'PostedLoad': 'Range', 'RPosted': 'TextEdit', 'Other': 'Range', 'REDC': 'TextEdit', 'NBI_DeckCo': 'TextEdit', 'NBI_Substr': 'TextEdit', 'NBI_Supers': 'TextEdit', 'LocationLa': 'DateTime', 'FHWA_Condi': 'TextEdit', });
lyr_manhattan_tracts_1.set('fieldLabels', {'CTLabel': 'no label', 'BoroCode': 'no label', 'BoroName': 'no label', 'CT2020': 'no label', 'BoroCT2020': 'no label', 'CDEligibil': 'no label', 'NTAName': 'no label', 'NTA2020': 'no label', 'CDTA2020': 'no label', 'CDTANAME': 'no label', 'GEOID': 'no label', 'PUMA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'manhattan_median_Name': 'no label', 'manhattan_median_Household_Income_at_Age_35_rP_gP_p25': 'no label', });
lyr_tourist_locations_2.set('fieldLabels', {'id': 'no label', 'name': 'no label', });
lyr_manhattan_street_areas_3.set('fieldLabels', {'Borough': 'no label', 'Feat_Type': 'no label', 'Jurisdicti': 'no label', 'Record_ST': 'no label', 'Edit_Date': 'no label', });
lyr_bike_routes_4.set('fieldLabels', {'segmentid': 'no label', 'bikeid': 'no label', 'prevbikeid': 'no label', 'status': 'no label', 'boro': 'no label', 'street': 'no label', 'fromstreet': 'no label', 'tostreet': 'no label', 'onoffst': 'no label', 'facilitycl': 'no label', 'allclasses': 'no label', 'bikedir': 'no label', 'lanecount': 'no label', 'ft_facilit': 'no label', 'tf_facilit': 'no label', 'ft2facilit': 'no label', 'tf2facilit': 'no label', 'date_instd': 'no label', 'time_instd': 'no label', 'date_ret_d': 'no label', 'time_ret_d': 'no label', 'grnwy': 'no label', 'gwsystem': 'no label', 'gwsys2': 'no label', 'spur': 'no label', 'gwyjuris': 'no label', });
lyr_bike_parking_5.set('fieldLabels', {'borocode': 'no label', 'boroname': 'no label', 'borocd': 'no label', 'coundist': 'no label', 'assemdist': 'no label', 'stsendist': 'no label', 'congdist': 'no label', 'program': 'no label', 'site_id': 'no label', 'group_id': 'no label', 'borough': 'no label', 'ifoaddress': 'no label', 'onstreet': 'no label', 'fromstreet': 'no label', 'tostreet': 'no label', 'side_of_st': 'no label', 'racktype': 'no label', 'date_date_': 'no label', 'time_date_': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'ntaname': 'no label', 'femafldz': 'no label', 'femafldt': 'no label', 'hrcevac': 'no label', });
lyr_bridges_6.set('fieldLabels', {'ObjectID': 'no label', 'BIN': 'no label', 'Carried': 'no label', 'Crossed': 'no label', 'PrimaryOwn': 'no label', 'PrimaryMai': 'no label', 'County': 'no label', 'Region': 'no label', 'GTMSStruct': 'no label', 'GTMSMateri': 'no label', 'NumberOfSp': 'no label', 'ConditionR': 'no label', 'LastInspec': 'no label', 'BridgeLeng': 'no label', 'DeckAreaSq': 'no label', 'AADT': 'no label', 'YearBuilt': 'no label', 'PostedLoad': 'no label', 'RPosted': 'no label', 'Other': 'no label', 'REDC': 'no label', 'NBI_DeckCo': 'no label', 'NBI_Substr': 'no label', 'NBI_Supers': 'no label', 'LocationLa': 'no label', 'FHWA_Condi': 'no label', });
lyr_bridges_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});