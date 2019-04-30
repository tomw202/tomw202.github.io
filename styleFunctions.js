//decile Styling function
function decileRamp(decile){
return decile == 1 ? '#a50026':
       decile == 2 ? '#d73027':
       decile == 3 ? '#f46d43':
       decile == 4 ? '#fdae61':
       decile == 5 ? '#fee08b':
       decile == 6 ? '#d9ef8b':
       decile == 7 ? '#a6d96a':
       decile == 8 ? '#66bd63':
       decile == 9 ? '#1a9850':
       decile == 10 ?'#006837':
                    '';
                            }

//IMD Style Function
function styleIMD(feature){
return{
  fillColor: decileRamp(feature.properties.IMD_Decile),
  weight:0,
  fillOpacity: 0.5
};
}

//IMD Style Function
function styleCrime(feature){
return{
  fillColor: decileRamp(feature.properties.Crime_Decile),
  weight:0,
  fillOpacity: 0.5
};
}
