# Instrukcja konfiguracji OpenWeatherMap API

## Krok 1: Rejestracja

1. Wejdź na stronę: https://openweathermap.org/api
2. Kliknij "Sign Up" (Zarejestruj się)
3. Wypełnij formularz rejestracyjny
4. Potwierdź adres email

## Krok 2: Uzyskanie klucza API

1. Zaloguj się na konto OpenWeatherMap
2. Przejdź do sekcji "API keys" w swoim profilu
3. Skopiuj domyślny klucz API (lub utwórz nowy)
4. **UWAGA:** Aktywacja klucza może zająć do 2 godzin!

## Krok 3: Dodanie klucza do aplikacji

W pliku `src/services/weatherApi.js` znajdź linię:

```javascript
const API_KEY = 'YOUR_API_KEY_HERE';
```

Zamień `YOUR_API_KEY_HERE` na swój klucz API:

```javascript
const API_KEY = 'abc123def456...'; // Twój prawdziwy klucz
```

## Krok 4: Test aplikacji

Po dodaniu klucza uruchom aplikację:

```bash
npm run dev
```

Jeśli zobaczysz dane pogodowe - wszystko działa! 🎉

## Troubleshooting

### Błąd 401 (Unauthorized)
- Sprawdź czy klucz API jest poprawny
- Poczekaj do 2 godzin na aktywację klucza
- Sprawdź czy klucz został skopiowany bez dodatkowych spacji

### Błąd 404 (Not Found)
- Sprawdź czy nazwa miasta jest poprawna
- Spróbuj wpisać miasto po angielsku (np. "Warsaw" zamiast "Warszawa")

### Brak danych
- Sprawdź połączenie z internetem
- Sprawdź konsolę przeglądarki (F12) pod kątem błędów

## Plan darmowy OpenWeatherMap

- **Darmowy** - 0 PLN/miesiąc
- **Limity:**
  - 1,000 wywołań API / dzień
  - 60 wywołań / minutę
  - Prognoza na 5 dni
  - Aktualna pogoda

Więcej niż wystarczające dla projektu zaliczeniowego! 😊

## Alternatywa: Mockowane dane (bez API)

Jeśli nie chcesz używać prawdziwego API, możesz stworzyć mockowane dane:

1. W pliku `src/services/weatherApi.js` zakomentuj wywołania axios
2. Zwróć przykładowe dane JSON zamiast prawdziwych odpowiedzi

**Uwaga:** Mockowane dane nie spełniają wymagań na ocenę 5.0!
