// Mockowane dane pogodowe - statyczne dane spełniające wymagania funkcjonalne

export const MOCK_WEATHER_DATA = {
  Warsaw: {
    id: 1,
    name: 'Warsaw',
    sys: { country: 'PL' },
    weather: [
      {
        icon: '01d',
        description: 'bezchmurnie'
      }
    ],
    main: {
      temp: 5.2,
      feels_like: 2.8,
      humidity: 65,
      pressure: 1013
    },
    wind: {
      speed: 3.5,
      deg: 270
    },
    clouds: {
      all: 10
    },
    visibility: 10000,
    rain: null
  },
  Krakow: {
    id: 2,
    name: 'Krakow',
    sys: { country: 'PL' },
    weather: [
      {
        icon: '02d',
        description: 'lekkie zachmurzenie'
      }
    ],
    main: {
      temp: 4.8,
      feels_like: 2.1,
      humidity: 70,
      pressure: 1015
    },
    wind: {
      speed: 4.2,
      deg: 315
    },
    clouds: {
      all: 25
    },
    visibility: 9500,
    rain: null
  },
  Gdansk: {
    id: 3,
    name: 'Gdansk',
    sys: { country: 'PL' },
    weather: [
      {
        icon: '10d',
        description: 'deszcz'
      }
    ],
    main: {
      temp: 3.5,
      feels_like: 0.2,
      humidity: 85,
      pressure: 1008
    },
    wind: {
      speed: 6.8,
      deg: 180
    },
    clouds: {
      all: 80
    },
    visibility: 7000,
    rain: {
      '1h': 2.5
    }
  },
  Wroclaw: {
    id: 4,
    name: 'Wroclaw',
    sys: { country: 'PL' },
    weather: [
      {
        icon: '03d',
        description: 'pochmurno'
      }
    ],
    main: {
      temp: 6.1,
      feels_like: 3.9,
      humidity: 60,
      pressure: 1012
    },
    wind: {
      speed: 2.8,
      deg: 90
    },
    clouds: {
      all: 55
    },
    visibility: 10000,
    rain: null
  },
  Poznan: {
    id: 5,
    name: 'Poznan',
    sys: { country: 'PL' },
    weather: [
      {
        icon: '04d',
        description: 'pochmurno'
      }
    ],
    main: {
      temp: 5.5,
      feels_like: 2.7,
      humidity: 68,
      pressure: 1011
    },
    wind: {
      speed: 4.5,
      deg: 225
    },
    clouds: {
      all: 75
    },
    visibility: 8500,
    rain: null
  }
};

export const MOCK_FORECAST_DATA = {
  Warsaw: {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 5.2 },
        weather: [{ icon: '01d', description: 'bezchmurnie' }],
        pop: 0.05,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 86400,
        main: { temp: 6.5 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.15,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 172800,
        main: { temp: 7.2 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.30,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 259200,
        main: { temp: 8.1 },
        weather: [{ icon: '10d', description: 'deszcz' }],
        pop: 0.70,
        rain: { '3h': 3.5 }
      },
      {
        dt: Date.now() / 1000 + 345600,
        main: { temp: 6.8 },
        weather: [{ icon: '04d', description: 'pochmurno' }],
        pop: 0.25,
        rain: null
      }
    ]
  },
  Krakow: {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 4.8 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.10,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 86400,
        main: { temp: 5.9 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.20,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 172800,
        main: { temp: 7.5 },
        weather: [{ icon: '04d', description: 'pochmurno' }],
        pop: 0.35,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 259200,
        main: { temp: 9.2 },
        weather: [{ icon: '09d', description: 'przelotne opady' }],
        pop: 0.65,
        rain: { '3h': 2.8 }
      },
      {
        dt: Date.now() / 1000 + 345600,
        main: { temp: 7.1 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.15,
        rain: null
      }
    ]
  },
  Gdansk: {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 3.5 },
        weather: [{ icon: '10d', description: 'deszcz' }],
        pop: 0.80,
        rain: { '3h': 4.2 }
      },
      {
        dt: Date.now() / 1000 + 86400,
        main: { temp: 4.2 },
        weather: [{ icon: '09d', description: 'przelotne opady' }],
        pop: 0.60,
        rain: { '3h': 2.1 }
      },
      {
        dt: Date.now() / 1000 + 172800,
        main: { temp: 5.8 },
        weather: [{ icon: '04d', description: 'pochmurno' }],
        pop: 0.40,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 259200,
        main: { temp: 6.5 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.25,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 345600,
        main: { temp: 5.1 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.20,
        rain: null
      }
    ]
  },
  Wroclaw: {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 6.1 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.20,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 86400,
        main: { temp: 7.8 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.10,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 172800,
        main: { temp: 9.3 },
        weather: [{ icon: '01d', description: 'bezchmurnie' }],
        pop: 0.05,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 259200,
        main: { temp: 8.7 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.30,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 345600,
        main: { temp: 7.4 },
        weather: [{ icon: '04d', description: 'pochmurno' }],
        pop: 0.45,
        rain: null
      }
    ]
  },
  Poznan: {
    list: [
      {
        dt: Date.now() / 1000,
        main: { temp: 5.5 },
        weather: [{ icon: '04d', description: 'pochmurno' }],
        pop: 0.25,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 86400,
        main: { temp: 6.9 },
        weather: [{ icon: '03d', description: 'pochmurno' }],
        pop: 0.20,
        rain: null
      },
      {
        dt: Date.now() / 1000 + 172800,
        main: { temp: 8.4 },
        weather: [{ icon: '10d', description: 'deszcz' }],
        pop: 0.75,
        rain: { '3h': 5.1 }
      },
      {
        dt: Date.now() / 1000 + 259200,
        main: { temp: 7.2 },
        weather: [{ icon: '09d', description: 'przelotne opady' }],
        pop: 0.55,
        rain: { '3h': 1.8 }
      },
      {
        dt: Date.now() / 1000 + 345600,
        main: { temp: 6.3 },
        weather: [{ icon: '02d', description: 'lekkie zachmurzenie' }],
        pop: 0.15,
        rain: null
      }
    ]
  }
};

export const DEFAULT_CITIES = [
  'Warsaw',
  'Krakow',
  'Gdansk',
  'Wroclaw',
  'Poznan',
];

export const getWeatherIcon = (iconCode) => {
  const iconMap = {
    '01d': '☀️',
    '02d': '🌤️',
    '03d': '☁️',
    '04d': '☁️',
    '09d': '🌧️',
    '10d': '🌦️',
    '11d': '⛈️',
    '13d': '❄️',
    '50d': '🌫️'
  };
  return iconMap[iconCode] || '🌤️';
};

export const getCurrentWeather = (cityName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = MOCK_WEATHER_DATA[cityName];
      if (data) {
        resolve(data);
      } else {
        resolve(null);
      }
    }, 300);
  });
};

export const getForecast = (cityName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = MOCK_FORECAST_DATA[cityName];
      if (data) {
        resolve(data);
      } else {
        resolve({ list: [] });
      }
    }, 300);
  });
};
