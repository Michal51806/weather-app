# Aplikacja Prognozy Pogody - Weather App

Projekt zaliczeniowy z kursu Programowanie Frontend - aplikacja React do wyświetlania prognozy pogody.

## 📋 Spełnione wymagania - ocena 5.0

### Wymagania konieczne (3.0)
- ✅ Wyświetlanie listy co najmniej 5 miejscowości
- ✅ Podgląd szczegółów prognozy dla każdej miejscowości:
  - Bieżąca temperatura w °C
  - Ikona warunków pogodowych
  - Prognoza na 5 dni
  - Prawdopodobieństwo opadów (%)
  - Rodzaj i ilość opadów (mm/m²)
  - Prędkość i kierunek wiatru
  - Stopień zachmurzenia
- ✅ Użycie hooków: useState, useCallback, useMemo, useEffect
- ✅ Przełączanie między widokami
- ✅ Reużywalne komponenty
- ✅ Style CSS

### Wymagania na 3.5
- ✅ React Router - nawigacja między podstronami
- ✅ Redux - globalna zmiana jednostek temperatury (°C/°F/K)

### Wymagania na 4.0
- ✅ Formularz wyszukiwania miast

### Wymagania na 4.5
- ✅ Oznaczanie ulubionych miast (gwiazdka)
- ✅ Osobna podstrona z ulubionymi
- ✅ Local Storage - zachowanie ustawień po odświeżeniu

### Wymagania na 5.0
- ✅ Integracja z OpenWeatherMap API (Axios)
- ✅ Wyświetlanie rzeczywistych danych pogodowych

## 🚀 Instalacja i uruchomienie

### 1. Zainstaluj zależności
```bash
npm install
```

### 2. Konfiguracja API Key
Zarejestruj się na [OpenWeatherMap](https://openweathermap.org/api) i uzyskaj darmowy klucz API.

Następnie w pliku `src/services/weatherApi.js` zamień:
```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```
na:
```javascript
const API_KEY = 'twój_klucz_api';
```

### 3. Uruchom aplikację
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

## 📁 Struktura projektu

```
weather-app/
├── src/
│   ├── components/          # Komponenty wielokrotnego użytku
│   │   ├── CityCard.jsx     # Karta miasta
│   │   ├── SearchBar.jsx    # Pasek wyszukiwania
│   │   └── Navigation.jsx   # Nawigacja
│   ├── pages/              # Główne strony aplikacji
│   │   ├── Home.jsx        # Lista wszystkich miast
│   │   ├── Favorites.jsx   # Lista ulubionych miast
│   │   └── CityDetails.jsx # Szczegóły pogody dla miasta
│   ├── store/              # Redux store
│   │   ├── store.js        # Konfiguracja store
│   │   ├── settingsSlice.js # Ustawienia (jednostki temperatury)
│   │   └── favoritesSlice.js # Ulubione miasta
│   ├── services/           # Usługi API
│   │   └── weatherApi.js   # OpenWeatherMap API
│   ├── utils/              # Funkcje pomocnicze
│   │   └── temperatureUtils.js # Konwersja temperatur
│   ├── App.jsx             # Główny komponent
│   └── main.jsx            # Entry point
└── package.json
```

## 🎨 Funkcjonalności

### Strona główna
- Lista domyślnych polskich miast (Warszawa, Kraków, Gdańsk, Wrocław, Poznań)
- Wyszukiwanie nowych miast
- Oznaczanie ulubionych (gwiazdka)
- Kliknięcie karty → szczegóły miasta

### Strona szczegółów
- Bieżąca temperatura i warunki
- Szczegółowe informacje (wilgotność, wiatr, ciśnienie, zachmurzenie)
- Prognoza na 5 dni
- Prawdopodobieństwo i ilość opadów

### Ulubione miasta
- Osobna strona z ulubionymi miastami
- Szybki dostęp do ulubionych lokalizacji

### Ustawienia globalne
- Przełączanie jednostek temperatury (°C/°F/K)
- Zapisywanie w Local Storage
- Zachowanie po odświeżeniu strony

## 🛠️ Technologie

- **React 18** - biblioteka UI
- **Vite** - build tool
- **React Router** - routing
- **Redux Toolkit** - zarządzanie stanem globalnym
- **Axios** - HTTP client dla API
- **CSS3** - stylowanie
- **OpenWeatherMap API** - dane pogodowe

## 📝 Użyte hooki

- `useState` - stan lokalny komponentów
- `useEffect` - pobieranie danych, side effects
- `useCallback` - memoizacja funkcji
- `useMemo` - memoizacja wartości
- `useSelector` - odczyt ze store Redux
- `useDispatch` - dispatch akcji Redux
- `useParams` - parametry z URL
- `useNavigate` - nawigacja programowa

## 💾 Local Storage

Aplikacja zapisuje w przeglądarce:
- Wybraną jednostkę temperatury
- Listę ulubionych miast

Dane są automatycznie przywracane przy każdym uruchomieniu.

## 🌐 API

Aplikacja używa darmowego API od OpenWeatherMap:
- `/weather` - aktualna pogoda
- `/forecast` - prognoza 5-dniowa

## 📱 Responsywność

Aplikacja jest w pełni responsywna i dostosowuje się do różnych rozdzielczości ekranu dzięki CSS Grid i Flexbox.

## 🎓 Autor

Projekt wykonany na zaliczenie kursu Programowanie Frontend.
