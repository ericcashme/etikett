export const prices = {
  label: {
    'custom-roll': 20,
    sheet: 20
  },
  shape: {
    rectangular: 0.2,
    circular: 0.35,
    'custom-shape': 0.55
  },
  width: 0.01,
  height: 0.01,
  material: {
    'material-1': 0.1,
    'material-2': 0.2,
    'material-3': 0.3,
    'material-4': 0.4,
    'material-5': 0.5
  },
  finishing: {
    'finishing-1': 0.1,
    'finishing-2': 0.2,
    'finishing-3': 0.3,
    'finishing-4': 0.4,
    'finishing-5': 0.5
  },
  hotFoilStamping: {
    none: 0,
    'silver-matt': 0.2,
    'silver-shiny': 0.2,
    'gold-matte': 0.2,
    'gold-shiny': 0.2,
    'copper-shiny': 0.2,
    'glossy-bronze': 0.2,
    'rose-gold-shiny': 0.2,
    'transparent-glossy': 0.2,
    'red-glossy': 0.2,
    'blue-shiny': 0.2,
    'glossy-green': 0.2,
    'mint-green-glossy': 0.4
  },
  colors: {
    cmyk: 1,
    black: 0.2,
    'no-color': 0.1
  },
  varieties: 0.1,
  amount: [
    {
      min: 1,
      max: 499,
      price: 20
    },
    {
      min: 500,
      max: 999,
      price: 25
    },
    {
      min: 1000,
      max: 1999,
      price: 30
    },
    {
      min: 2000,
      max: 3999,
      price: 35
    },
    {
      min: 4000,
      max: 7999,
      price: 38
    },
    {
      min: 8000,
      max: 14999,
      price: 42
    },
    {
      min: 15000,
      max: 29999,
      price: 50
    },
    {
      min: 30000,
      max: 99999999,
      price: 80
    }
  ],
  processing: {
    'processing-1': 0.1,
    'processing-2': 0.2
  },
  windingDirection: {
    'winding-direction-1': 0.2,
    'winding-direction-2': 0.3
  },
  orientation: {
    'orientation-1': 0.1,
    'orientation-2': 0.2,
    'orientation-3': 0.3,
    'orientation-4': 0.3
  },
  rollDiameter: {
    'roll-diameter-1': 0,
    'roll-diameter-2': 0.2,
    'roll-diameter-3': 0.4
  },
  maximumRollDiameter: 0.2,
  labelsNumberPerRoll: 0.4,
  punching: {
    'punching-1': 0,
    'punching-2': 143
  },
  extra: {
    express: 37.48,
    separatedCopies: 10
  },
  testPrint: {
    'test-print-1': 0,
    'test-print-2': 60,
    'test-print-3': 90,
    'test-print-4': 220
  },
  printData: {
    'print-data-1': 0,
    'print-data-2': 30,
    'print-data-3': 65
  }
}
