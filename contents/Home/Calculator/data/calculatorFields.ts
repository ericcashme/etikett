export const calculatorFields = [
  {
    id: 'label',
    name: 'Ausführung',
    hint: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore.',
    type: 'select-radio',
    options: [
      {
        id: 'custom-roll',
        icon: 'custom-roll',
        name: 'Rolle'
      },
      {
        id: 'sheet',
        icon: 'sheet',
        name: 'Bogen'
      }
    ]
  },
  {
    id: 'shape',
    name: 'Etikettenform',
    hint: 'Lorem ipsum dolor sit amet.',
    type: 'select-radio',
    options: [
      {
        id: 'rectangular',
        icon: 'rectangular',
        name: 'eckig'
      },
      {
        id: 'circular',
        icon: 'circular',
        name: 'rund'
      },
      {
        id: 'custom-shape',
        icon: 'custom-shape',
        name: 'Sonderform'
      }
    ]
  },
  {
    id: 'dimensions',
    name: 'Abmessungen',
    type: 'input-number',
    options: [
      {
        id: 'width',
        name: 'Breite',
        unit: 'mm',
        min: '0',
        max: '585'
      },
      {
        id: 'height',
        name: 'Höhe',
        unit: 'mm',
        min: '0',
        max: '308'
      }
    ]
  },
  {
    id: 'material',
    name: 'Material',
    type: 'select-radio',
    options: [
      {
        id: 'material-1',
        name: 'Papier glänzend weiß 80g (Standard FSC Mix Credit)'
      },
      {
        id: 'material-2',
        name: 'Papier matt weiß 90g (FSC Mix Credit)'
      },
      {
        id: 'material-3',
        name: 'Papier Silber glänzend 80g (FSC Mix Credit)'
      },
      {
        id: 'material-4',
        name: 'Naturpapier mit Struktur weiß 90g (FSC Mix Credit)'
      },
      {
        id: 'material-5',
        name: 'Naturpapier mit Struktur hochweiß 90g (FSC Mix Credit)'
      }
    ]
  },
  {
    id: 'finishing',
    name: 'Veredelung - Schutzlack / Kaschierung',
    type: 'select-radio',
    options: [
      {
        id: 'finishing-1',
        name: 'keine'
      },
      {
        id: 'finishing-2',
        name: 'Schutzlack matt',
        disabled: [
          {
            id: 'material',
            value: 'material-1'
          }
        ]
      },
      {
        id: 'finishing-3',
        name: 'Schutzlack glänzend',
        disabled: [
          {
            id: 'material',
            value: 'material-2'
          },
          {
            id: 'material',
            value: 'material-5'
          }
        ]
      },
      {
        id: 'finishing-4',
        name: 'Folienkaschierung (Laminat) matt',
        disabled: [
          {
            id: 'material',
            value: 'material-1'
          },
          {
            id: 'material',
            value: 'material-5'
          }
        ]
      },
      {
        id: 'finishing-5',
        name: 'Folienkaschierung (Laminat) glänzend',
        disabled: [
          {
            id: 'material',
            value: 'material-2'
          },
          {
            id: 'material',
            value: 'material-5'
          }
        ]
      }
    ]
  },
  {
    id: 'hotFoilStamping',
    name: 'Heißfolienprägung',
    type: 'select-radio',
    options: [
      {
        id: 'none',
        icon: 'none',
        name: 'keine'
      },
      {
        id: 'silver-matt',
        icon: 'silver-matt',
        name: 'Silber matt'
      },
      {
        id: 'silver-shiny',
        icon: 'silver-shiny',
        name: 'Silber glänzend'
      },
      {
        id: 'gold-matte',
        icon: 'gold-matte',
        name: 'Gold matt'
      },
      {
        id: 'gold-shiny',
        icon: 'gold-shiny',
        name: 'Gold glänzend'
      },
      {
        id: 'copper-shiny',
        icon: 'copper-shiny',
        name: 'Kupfer glänzend'
      },
      {
        id: 'glossy-bronze',
        icon: 'glossy-bronze',
        name: 'Bronze glänzend'
      },
      {
        id: 'rose-gold-shiny',
        icon: 'rose-gold-shiny',
        name: 'Roségold glänzend'
      },
      {
        id: 'transparent-glossy',
        icon: 'transparent-glossy',
        name: 'Transparent glänzend'
      },
      {
        id: 'red-glossy',
        icon: 'red-glossy',
        name: 'Rot glänzend'
      },
      {
        id: 'blue-shiny',
        icon: 'blue-shiny',
        name: 'Blau glänzend'
      },
      {
        id: 'glossy-green',
        icon: 'glossy-green',
        name: 'Grün glänzend'
      },
      {
        id: 'mint-green-glossy',
        icon: 'mint-green-glossy',
        name: 'Mintgrün glänzend'
      }
    ]
  },
  {
    id: 'colors',
    name: 'Farben',
    type: 'select-radio',
    options: [
      {
        id: 'cmyk',
        icon: 'cmyk',
        name: 'CMYK'
      },
      {
        id: 'black',
        icon: 'black',
        name: 'schwarz'
      },
      {
        id: 'no-color',
        icon: 'no-color',
        name: 'keine'
      }
    ]
  },
  {
    id: 'varieties',
    name: 'Verschiedene Sorten drucken',
    type: 'input-number',
    exclude: [
      {
        id: 'colors',
        value: 'no-color'
      }
    ],
    options: [
      {
        id: 'varieties',
        name: 'Anzahl',
        unit: 'x',
        min: '0',
        max: '1000'
      }
    ]
  },
  {
    id: 'amount',
    name: 'Gesamtmenge',
    type: 'input-number',
    options: [
      {
        id: 'amount',
        name: 'Anzahl',
        unit: 'Stück',
        min: '0',
        max: '1000000'
      }
    ]
  }
]
