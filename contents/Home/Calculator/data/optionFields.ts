export const optionFields = [
  {
    id: 'order',
    name: 'Auftrag',
    type: 'textarea',
    options: [
      {
        id: 'jobName',
        name: 'Auftragsname',
        dimension: 'small'
      },
      {
        id: 'comment',
        name: 'Bemerkung',
        dimension: 'medium'
      }
    ]
  },
  {
    id: 'processing',
    name: 'Verarbeitung',
    type: 'select-radio',
    options: [
      {
        id: 'processing-1',
        name: 'keine maschinelle Verarbeitung'
      },
      {
        id: 'processing-2',
        name: 'maschinelle Verarbeitung'
      }
    ]
  },
  {
    id: 'windingDirection',
    name: 'Wickelrichtung',
    type: 'select-radio-vertical',
    options: [
      {
        id: 'winding-direction-1',
        name: 'Wickelrichtung',
        icon: 'inner-winding'
      },
      {
        id: 'winding-direction-2',
        name: 'Außenwicklung',
        icon: 'outside-winding'
      }
    ]
  },
  {
    id: 'orientation',
    name: 'Orientierung',
    type: 'select-radio-vertical',
    options: [
      {
        id: 'orientation-1',
        name: 'oben voraus',
        icon: 'above-ahead'
      },
      {
        id: 'orientation-2',
        name: 'unten voraus',
        icon: 'down-ahead'
      },
      {
        id: 'orientation-3',
        name: 'links voraus',
        icon: 'left-ahead'
      },
      {
        id: 'orientation-4',
        name: 'rechts voraus',
        icon: 'right-ahead'
      }
    ]
  },
  {
    id: 'rollDiameter',
    name: 'Durchmesser des Rollenkern',
    type: 'select-radio',
    options: [
      {
        id: 'roll-diameter-1',
        name: '76 mm'
      },
      {
        id: 'roll-diameter-2',
        name: '40 mm',
        description: '(+5,00 €)'
      },
      {
        id: 'roll-diameter-3',
        name: '25 mm',
        description: '(+5,00 €)'
      }
    ]
  },
  {
    id: 'assembly',
    name: 'Konfektionierung',
    type: 'input-number',
    options: [
      {
        id: 'maximumRollDiameter',
        name: 'Maximaler Rollen-Durchmesser',
        unit: 'mm',
        min: '0',
        max: '10000'
      },
      {
        id: 'labelsNumberPerRoll',
        name: 'Anzahl der Etiketten pro Rolle',
        unit: 'mm',
        min: '0',
        max: '10000'
      }
    ]
  },
  {
    id: 'punching',
    name: 'Durchmesser des Rollenkern',
    type: 'select-radio',
    options: [
      {
        id: 'punching-1',
        name: 'Laser',
        description: '(0,00 €)'
      },
      {
        id: 'punching-2',
        name: 'Stanzblech',
        description: '(+143,00 €)'
      }
    ]
  },
  {
    id: 'extra',
    name: 'Extra',
    type: 'checkbox',
    options: [
      {
        id: 'express',
        name: 'Express Produktion',
        description: '(+37,48 €)'
      },
      {
        id: 'separatedCopies',
        name: 'Separate Belegexemplare anfordern',
        description: '(+10,00 €)'
      }
    ]
  },
  {
    id: 'testPrint',
    name: 'Probedruck',
    type: 'select-radio',
    options: [
      {
        id: 'test-print-1',
        name: 'kein Probedruck',
        description: '(0,00 €)'
      },
      {
        id: 'test-print-2',
        name: 'Basic',
        description: '(+60,00 €)'
      },
      {
        id: 'test-print-3',
        name: 'Medium',
        description: '(+90,00 €)'
      },
      {
        id: 'test-print-4',
        name: 'Premium',
        description: '(+220,00 €)'
      }
    ]
  },
  {
    id: 'printData',
    name: 'Druckdaten',
    type: 'select-radio',
    options: [
      {
        id: 'print-data-1',
        name: 'kein Korrekturpaket',
        description: '(0,00 €)'
      },
      {
        id: 'print-data-2',
        name: 'Smart',
        description: '(+30,00 €)'
      },
      {
        id: 'print-data-3',
        name: 'Profi',
        description: '(+65,00 €)'
      }
    ]
  }
]
