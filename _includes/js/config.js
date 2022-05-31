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

// this is a test based on geometries from the mail Anton sent
var someOfTheGeometriesFromMail = [
  'POLYGON((-125 -65.2,-125 -90,-70 -90,-64.5 -66,-60 -64,-55.05448 -63.2606,-59 -59.40791,-59 -61,-65 -61,-65 -62.9,-71 -62.9,-71 -65.2,-75 -65.2,-75 -66.6,-85 -66.6,-85 -68.3,-106 -68.3,-106 -65.2,-125 -65.2))',
  'POLYGON((115 -59.5,115 -90,158 -90,158 -75,170 -71.6,170 -62.2,166 -62.2,166 -61.6,158 -61.6,158 -62.3,156 -62.3,156 -63.2,132 -63.2,132 -62.4,130 -62.4,130 -61.6,128 -61.6,128 -60.9,116 -60.9,116 -59.5,115 -59.5))',
  'POLYGON((-64.5 -66,-70 -90,30 -90,30 -56.5,28 -56.5,28 -52,-5 -52,-5 -52.7,-7 -52.7,-7 -54.2,-8 -54.2,-8 -55.2,-9 -55.2,-9 -56.2,-12 -56.2,-12 -57.7,-19 -57.7,-19 -56.2,-21 -56.2,-21 -54,-23 -54,-23 -52.9,-28 -52.9,-28 -51.1,-35 -51.1,-35 -51.9,-43 -51.9,-43 -53.3,-33 -53.3,-33 -57.4,-51 -57.4,-51 -58.6,-59 -58.6,-59 -59.40791,-55.05448 -63.2606,-60 -64,-64.5 -66))',
  'POLYGON((30 -56.5,30 -90,115 -90,115 -59.5,106 -59.5,106 -57.7,99 -57.7,99 -57,93 -57,93 -58.3,91 -58.3,91 -59.4,87 -59.4,87 -58,84 -58,84 -64.1,78 -64.1,78 -62.8,63 -62.8,63 -61.7,58 -61.7,58 -61.09999,53.8 -61.09999,53.8 -60,50 -60,50 -59.5,44 -59.5,44 -58,38 -58,38 -56.5,30 -56.5))',
  'POLYGON((-180 -64.7,-180 -90,-125 -90,-125 -65.2,-128 -65.2,-128 -60.7,-142 -60.7,-142 -58.4,-154 -58.4,-154 -60.5,-159 -60.5,-159 -62.2,-166 -62.2,-166 -64.7,-180 -64.7))',
  'POLYGON((158 -75,158 -90,180 -90,180 -64.7,176 -64.7,176 -63.9,173 -63.9,173 -62.9,171 -62.9,171 -62.2,170 -62.2,170 -71.6,158 -75))',
];
var geomPredicates = someOfTheGeometriesFromMail.map(x => ({
  type: 'within',
  key: 'geometry',
  value: x
}));

var geomPredicate = {
  type: 'or',
  predicates: geomPredicates
};

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
         geomPredicate,
        //  {
        //    "type": "within",
        //    "key": "geometry",
        //    "value": "POLYGON((-180 -90, -10 -90,10 -90, 180 -90,180 -45,100 -45,-50 -45,-50 -62,-80 -62,-80 -45,-180 -45,-180 -90))" // simplified geometry to be reviewed
        //  },
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
