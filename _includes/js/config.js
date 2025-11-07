var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "literatureSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "LITERATURE"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "locale": "en",
    "mapStyles": {
      "defaultProjection": "ANTARCTIC",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "messages": {
    "en": {
      "dataset.siteScopeSmallerThanDataset": "Not all records from the dataset is included on this site. Visit [GBIF.org]({datasetUrl}) to view the full dataset. This portal's scope is detailed in the [FAQ](/faq)."
    },
    "fr": {
      "dataset.siteScopeSmallerThanDataset": "Not all records from the dataset is included on this site. Visit [GBIF.org]({datasetUrl}) to view the full dataset. This portal's scope is detailed in the [FAQ](/faq)."
    },
    "es": {
      "dataset.siteScopeSmallerThanDataset": "Not all records from the dataset is included on this site. Visit [GBIF.org]({datasetUrl}) to view the full dataset. This portal's scope is detailed in the [FAQ](/faq)."
    },
    "ru": {
      "dataset.siteScopeSmallerThanDataset": "Not all records from the dataset is included on this site. Visit [GBIF.org]({datasetUrl}) to view the full dataset. This portal's scope is detailed in the [FAQ](/faq)."
    }
  },
  "occurrenceSearch": {
    "scope": {
      "type": "within",
      "key": "geometry",
      "value": "POLYGON((180 -44.3,173 -44.3,173 -47.5,170 -47.5,157 -47.5,157 -45.9,150 -45.9,150 -47.5,143 -47.5,143 -45.8,140 -45.8,140 -44.5,137 -44.5,137 -43,135 -43,135 -41.7,131 -41.7,131 -40.1,115 -40.1,92 -40.1,92 -41.4,78 -41.4,78 -42.3,69 -42.3,69 -43.3,47 -43.3,47 -41.7,30 -41.7,12 -41.7,12 -40.3,10 -40.3,10 -38.3,-5 -38.3,-5 -38.9,-9 -38.9,-9 -40.2,-13 -40.2,-13 -41.4,-21 -41.4,-21 -42.5,-39 -42.5,-39 -40.7,-49 -40.7,-49 -48.6,-54 -48.6,-54 -55.7,-62.7972582608082 -55.7,-64 -55.7,-64 -57.8,-71 -57.8,-71 -58.9,-80 -58.9,-80 -40,-125 -40,-167 -40,-167 -42.6,-171 -42.6,-171 -44.3,-180 -44.3,-180 -90, 0 -90,180 -90,180 -44.3))"
    },
    "highlightedFilters": [
      "q",
      "datasetKey",
      "taxonKey",
      "occurrenceStatus",
      "basisOfRecord",
      "year",
      "samplingProtocol",
      "depth",
      "issue",
      "networkKey"
    ],
    "availableTableColumns": [
      "features",
      "basisOfRecord",
      "preparations",
      "coordinates",
      "locality",
      "year",
      "dataset",
      "institutionCode"
    ],
    "tabs": [
      "table",
      "gallery",
      "map",
      "datasets",
      "dashboard",
      "clusters",
      "download"
    ],
    "mapSettings": {
      "lat": -90,
      "lng": 0,
      "zoom": 2
    }
  },
  "collectionSearch": {},
  "institutionSearch": {},
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {
    "scope": {
      "type": "in",
      "key": "countriesOfCoverage",
      "values": [
        "AQ",
        "BV",
        "HM",
        "GS",
        "TF"
      ]
    },
    "highlightedFilters": [
      "q",
      "literatureType",
      "relevance",
      "countriesOfResearcher",
      "countriesOfCoverage",
      "year"
    ]
  }
}
