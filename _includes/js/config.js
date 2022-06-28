var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  rootPredicate: { type: 'equals', key: 'taxonKey', value: 5 }
};

var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary,
    fontSize: '16px'
  }
});

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
        //  geomPredicate,
        {
          "type": "within",
          "key": "geometry",
          "value": "POLYGON((180 -44.3,173 -44.3,173 -47.5,170 -47.5,157 -47.5,157 -45.9,150 -45.9,150 -47.5,143 -47.5,143 -45.8,140 -45.8,140 -44.5,137 -44.5,137 -43,135 -43,135 -41.7,131 -41.7,131 -40.1,115 -40.1,92 -40.1,92 -41.4,78 -41.4,78 -42.3,69 -42.3,69 -43.3,47 -43.3,47 -41.7,30 -41.7,12 -41.7,12 -40.3,10 -40.3,10 -38.3,-5 -38.3,-5 -38.9,-9 -38.9,-9 -40.2,-13 -40.2,-13 -41.4,-21 -41.4,-21 -42.5,-39 -42.5,-39 -40.7,-49 -40.7,-49 -48.6,-54 -48.6,-54 -55.7,-62.7972582608082 -55.7,-64 -55.7,-64 -57.8,-71 -57.8,-71 -58.9,-80 -58.9,-80 -40,-125 -40,-167 -40,-167 -42.6,-171 -42.6,-171 -44.3,-180 -44.3,-180 -90, 0 -90,180 -90,180 -44.3))"
        },
        {
          "type": "in",
          "key": "networkKey",
          "values": ["8534dd20-c368-4a1f-bdaf-e6b390710f89", "2b7c7b4f-4d4f-40d3-94de-c28b6fa054a6"] // SCAR and OBIS networks
        }
      ]
    },
    occurrenceSearchTabs: ['TABLE', 'GALLERY', 'MAP', 'DATASETS']
  },
  maps: {
    locale: 'en',
    defaultProjection: 'ANTARCTIC',
    defaultMapStyle: 'BRIGHT',
    mapStyles: {
      ANTARCTIC: ['NATURAL', 'BRIGHT', 'DARK'],
      PLATE_CAREE: ['NATURAL', 'BRIGHT', 'DARK'],
      MERCATOR: ['NATURAL', 'BRIGHT', 'DARK'],
    }
  }
};
