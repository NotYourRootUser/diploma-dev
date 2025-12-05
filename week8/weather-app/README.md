# 🌤️ Weather App Notes  
React • API Fetching • State • Async/Await • useEffect • Dynamic Input

---

## 1. Fetching Data From an API

You communicate with a backend (WeatherAPI) using `fetch()`.

`fetch(url)` returns a **Promise** → an object representing a value that arrives in the future.

### Promise states
- pending  
- fulfilled  
- rejected  

### async/await refresher
```js
async function fetchData() {
  const res = await fetch(url);
  const data = await res.json();
}
```

- `async` → function returns a Promise  
- `await` → pauses inside *that* async function until the Promise resolves  
- Non-blocking (your UI stays responsive)

---

## 2. React State for Storing API Results

```js
const [weatherData, setWeatherData] = useState("");
```

- **weatherData** → current result  
- **setWeatherData** → updates value and forces re-render  

Setting state after a fetch:

```js
setWeatherData(data);
```

---

## 3. Display Weather Data in JSX

```jsx
<p>
  {weatherData?.location?.name}'s temperature is {weatherData?.current?.temp_c}°C
</p>

<p>It's {weatherData?.current?.condition?.text}</p>

<img src={weatherData?.current?.condition?.icon} />
```

### Why use optional chaining `?.`?
Prevents errors like:

```
Cannot read properties of undefined (reading 'condition')
```

Because async data is not instantly available.

---

## 4. Controlled Input (User Types City Name)

Input state:

```js
const [userEnteredCity, setUserEnteredCity] = useState("");
```

Update on keystroke:

```js
function handleChange(event) {
  setUserEnteredCity(event.target.value);
}
```

Input element:

```jsx
<input onChange={handleChange} />
```

This keeps the input field synced with React state.

---

## 5. Search Button → Set “Current City”

```js
function handleClick() {
  setCurrentCity(userEnteredCity);
}
```

This prevents the API from fetching on every keystroke.  
Only fetch when the user intentionally searches.

---

## 6. Dynamic API URL

```js
const API_URL =
  `https://api.weatherapi.com/v1/current.json?key=KEY&q=${currentCity}&aqi=no`;
```

React rebuilds this string whenever `currentCity` changes.

This is what makes the weather data dynamic.

---

## 7. Fetch Weather When Current City Changes (useEffect)

```js
useEffect(() => {
  async function fetchWeatherData() {
    const res = await fetch(API_URL);
    const data = await res.json();
    setWeatherData(data);
  }

  fetchWeatherData();
}, [currentCity]);
```

### Why?
- `useEffect` runs every time `currentCity` changes
- This triggers an automatic fetch
- Weather UI updates instantly

---

## 8. Why the Result Prints Twice in Console

React Strict Mode:
- Intentionally runs effects twice in development
- Helps detect bugs
- Does **not** do this in production

Not your fault — this is normal.

---

## 9. Full Data Flow (The Mental Model)

```
User types → handleChange → update userEnteredCity
User clicks Search → setCurrentCity
currentCity changes → useEffect triggers
useEffect fetches API → setWeatherData
weatherData updates → UI re-renders automatically
```

This is real-world React architecture.

---

## 10. Final Structure Principles (Production-Grade React)

- **State separation**  
  - Input text  
  - Selected city  
  - Fetched weather data  

- **Clean structure**  
  - Input handling logic  
  - Dynamic API URL  
  - Async fetch logic  
  - JSX rendering  

- **Use async/await** for clarity  
- **Optional chaining** for safety  
- **Effects** synced to relevant state changes  

This is the professional blueprint used in real apps.

---
