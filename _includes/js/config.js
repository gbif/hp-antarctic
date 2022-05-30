var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary
}});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'taxonKey', value: 5 }
};

var siteTheme = gbifReactComponents.themeBuilder.extend({baseTheme: 'light', extendWith: {
  primary: themeStyle.colors.primary,
  fontSize: '16px'
}});

var siteConfig = {
  routes: {
    occurrenceSearch: {
      // The route you are currently using for occurrence search. The language prefix will be added automatically
      // If you need special routes per language, then you have to add locale specific overwrites. The page language is available as a global variable called `pageLang`
      // route: '/data'
    }
  },
  occurrence: {
    mapSettings: {
      lat: -50,
      lng: 0,
      zoom: 1
    },
    rootPredicate: {
       "type": "and",
       "predicates": [
         {
           "type": "within",
           "key": "geometry",
           "value": "POLYGON((-180 -90, -10 -90,10 -90, 180 -90,180 -45,100 -45,-50 -45,-50 -62,-80 -62,-80 -45,-180 -45,-180 -90))" // simplified geometry to be reviewed
         },
         {
          "type": "in",
          "key": "networkKey",
          "values": ["8534dd20-c368-4a1f-bdaf-e6b390710f89", "2b7c7b4f-4d4f-40d3-94de-c28b6fa054a6"] // SCAR and OBIS networks
        }
       ]
     },
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS']
  }
};
