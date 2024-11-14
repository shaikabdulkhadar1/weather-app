import { useEffect, useState } from "react";

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [localDate, setLocalDate] = useState("");
  const [localtime, setLocalTime] = useState("");
  const [currentLocation, setCurrentLocation] = useState(null);
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const countryNames = {
    AF: "Afghanistan",
    AL: "Albania",
    DZ: "Algeria",
    AS: "American Samoa",
    AD: "Andorra",
    AO: "Angola",
    AI: "Anguilla",
    AQ: "Antarctica",
    AG: "Antigua and Barbuda",
    AR: "Argentina",
    AM: "Armenia",
    AW: "Aruba",
    AU: "Australia",
    AT: "Austria",
    AZ: "Azerbaijan",
    BS: "Bahamas  ",
    BH: "Bahrain",
    BD: "Bangladesh",
    BB: "Barbados",
    BY: "Belarus",
    BE: "Belgium",
    BZ: "Belize",
    BJ: "Benin",
    BM: "Bermuda",
    BT: "Bhutan",
    BO: "Bolivia (Plurinational State of)",
    BQ: "Bonaire, Sint Eustatius and Saba",
    BA: "Bosnia and Herzegovina",
    BW: "Botswana",
    BV: "Bouvet Island",
    BR: "Brazil",
    IO: "British Indian Ocean Territory  ",
    BN: "Brunei Darussalam",
    BG: "Bulgaria",
    BF: "Burkina Faso",
    BI: "Burundi",
    CV: "Cabo Verde",
    KH: "Cambodia",
    CM: "Cameroon",
    CA: "Canada",
    KY: "Cayman Islands  ",
    CF: "Central African Republic  ",
    TD: "Chad",
    CL: "Chile",
    CN: "China",
    CX: "Christmas Island",
    CC: "Cocos (Keeling) Islands  ",
    CO: "Colombia",
    KM: "Comoros  ",
    CD: "Congo (the Democratic Republic)",
    CG: "Congo  ",
    CK: "Cook Islands  ",
    CR: "Costa Rica",
    HR: "Croatia",
    CU: "Cuba",
    CW: "Curaçao",
    CY: "Cyprus",
    CZ: "Czechia",
    CI: "Côte d'Ivoire",
    DK: "Denmark",
    DJ: "Djibouti",
    DM: "Dominica",
    DO: "Dominican Republic  ",
    EC: "Ecuador",
    EG: "Egypt",
    SV: "El Salvador",
    GQ: "Equatorial Guinea",
    ER: "Eritrea",
    EE: "Estonia",
    SZ: "Eswatini",
    ET: "Ethiopia",
    FK: "Falkland Islands [Malvinas]",
    FO: "Faroe Islands  ",
    FJ: "Fiji",
    FI: "Finland",
    FR: "France",
    GF: "French Guiana",
    PF: "French Polynesia",
    TF: "French Southern Territories  ",
    GA: "Gabon",
    GM: "Gambia  ",
    GE: "Georgia",
    DE: "Germany",
    GH: "Ghana",
    GI: "Gibraltar",
    GR: "Greece",
    GL: "Greenland",
    GD: "Grenada",
    GP: "Guadeloupe",
    GU: "Guam",
    GT: "Guatemala",
    GG: "Guernsey",
    GN: "Guinea",
    GW: "Guinea-Bissau",
    GY: "Guyana",
    HT: "Haiti",
    HM: "Heard Island and McDonald Islands",
    VA: "Holy See  ",
    HN: "Honduras",
    HK: "Hong Kong",
    HU: "Hungary",
    IS: "Iceland",
    IN: "India",
    ID: "Indonesia",
    IR: "Iran",
    IQ: "Iraq",
    IE: "Ireland",
    IM: "Isle of Man",
    IL: "Israel",
    IT: "Italy",
    JM: "Jamaica",
    JP: "Japan",
    JE: "Jersey",
    JO: "Jordan",
    KZ: "Kazakhstan",
    KE: "Kenya",
    KI: "Kiribati",
    KP: "Korea (the Democratic People's Republic)",
    KR: "Korea (the Republic)",
    KW: "Kuwait",
    KG: "Kyrgyzstan",
    LA: "Lao People's Democratic Republic  ",
    LV: "Latvia",
    LB: "Lebanon",
    LS: "Lesotho",
    LR: "Liberia",
    LY: "Libya",
    LI: "Liechtenstein",
    LT: "Lithuania",
    LU: "Luxembourg",
    MO: "Macao",
    MG: "Madagascar",
    MW: "Malawi",
    MY: "Malaysia",
    MV: "Maldives",
    ML: "Mali",
    MT: "Malta",
    MH: "Marshall Islands  ",
    MQ: "Martinique",
    MR: "Mauritania",
    MU: "Mauritius",
    YT: "Mayotte",
    MX: "Mexico",
    FM: "Micronesia (Federated States of)",
    MD: "Moldova (the Republic of)",
    MC: "Monaco",
    MN: "Mongolia",
    ME: "Montenegro",
    MS: "Montserrat",
    MA: "Morocco",
    MZ: "Mozambique",
    MM: "Myanmar",
    NA: "Namibia",
    NR: "Nauru",
    NP: "Nepal",
    NL: "Netherlands  ",
    NC: "New Caledonia",
    NZ: "New Zealand",
    NI: "Nicaragua",
    NE: "Niger  ",
    NG: "Nigeria",
    NU: "Niue",
    NF: "Norfolk Island",
    MP: "Northern Mariana Islands  ",
    NO: "Norway",
    OM: "Oman",
    PK: "Pakistan",
    PW: "Palau",
    PS: "Palestine, State of",
    PA: "Panama",
    PG: "Papua New Guinea",
    PY: "Paraguay",
    PE: "Peru",
    PH: "Philippines  ",
    PN: "Pitcairn",
    PL: "Poland",
    PT: "Portugal",
    PR: "Puerto Rico",
    QA: "Qatar",
    MK: "Republic of North Macedonia",
    RO: "Romania",
    RU: "Russian Federation  ",
    RW: "Rwanda",
    RE: "Réunion",
    BL: "Saint Barthélemy",
    SH: "Saint Helena, Ascension and Tristan da Cunha",
    KN: "Saint Kitts and Nevis",
    LC: "Saint Lucia",
    MF: "Saint Martin (French part)",
    PM: "Saint Pierre and Miquelon",
    VC: "Saint Vincent and the Grenadines",
    WS: "Samoa",
    SM: "San Marino",
    ST: "Sao Tome and Principe",
    SA: "Saudi Arabia",
    SN: "Senegal",
    RS: "Serbia",
    SC: "Seychelles",
    SL: "Sierra Leone",
    SG: "Singapore",
    SX: "Sint Maarten (Dutch part)",
    SK: "Slovakia",
    SI: "Slovenia",
    SB: "Solomon Islands",
    SO: "Somalia",
    ZA: "South Africa",
    GS: "South Georgia and the South Sandwich Islands",
    SS: "South Sudan",
    ES: "Spain",
    LK: "Sri Lanka",
    SD: "Sudan  ",
    SR: "Suriname",
    SJ: "Svalbard and Jan Mayen",
    SE: "Sweden",
    CH: "Switzerland",
    SY: "Syrian Arab Republic",
    TW: "Taiwan",
    TJ: "Tajikistan",
    TZ: "Tanzania, United Republic of",
    TH: "Thailand",
    TL: "Timor-Leste",
    TG: "Togo",
    TK: "Tokelau",
    TO: "Tonga",
    TT: "Trinidad and Tobago",
    TN: "Tunisia",
    TR: "Turkey",
    TM: "Turkmenistan",
    TC: "Turks and Caicos Islands  ",
    TV: "Tuvalu",
    UG: "Uganda",
    UA: "Ukraine",
    AE: "United Arab Emirates  ",
    GB: "United Kingdom of Great Britain and Northern Ireland  ",
    UM: "United States Minor Outlying Islands  ",
    US: "United States of America  ",
    UY: "Uruguay",
    UZ: "Uzbekistan",
    VU: "Vanuatu",
    VE: "Venezuela (Bolivarian Republic of)",
    VN: "Viet Nam",
    VG: "Virgin Islands (British)",
    VI: "Virgin Islands (U.S.)",
    WF: "Wallis and Futuna",
    EH: "Western Sahara",
    YE: "Yemen",
    ZM: "Zambia",
    ZW: "Zimbabwe",
    AX: "Åland Islands",
  };

  function getWindDirection(d) {
    let WIND_DIRECTION;
    switch (true) {
      case 0:
      case 360:
        WIND_DIRECTION = "N";
        break;
      case 90:
        WIND_DIRECTION = "E";
        break;
      case 180:
        WIND_DIRECTION = "S";
        break;
      case 270:
        WIND_DIRECTION = "W";
        break;
      case d > 0 && d < 90:
        WIND_DIRECTION = "NE";
        break;
      case d > 90 && d < 180:
        WIND_DIRECTION = "SE";
        break;
      case d > 180 && d < 270:
        WIND_DIRECTION = "SW";
        break;
      case d > 270 && d < 360:
        WIND_DIRECTION = "NW";
        break;
      default:
        WIND_DIRECTION = "-";
        break;
    }

    return WIND_DIRECTION;
  }

  useEffect(() => {
    const getCoords = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          setCurrentLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        });
      }
    };

    getCoords();
  }, []);

  useEffect(() => {
    const fetchWeatherInfo = async () => {
      if (currentLocation.latitude && currentLocation.longitude) {
        try {
          const resp = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${currentLocation.latitude}&lon=${currentLocation.longitude}&appid=046af07c64294701572e10ca4d58326f`
          );
          const res = await resp.json();
          setWeatherData(res);

          setLocalDate(new Date(res.dt * 1000).toLocaleDateString());
          setLocalTime(new Date(res.dt * 1000).toLocaleTimeString());
          setSunrise(new Date(res.sys.sunrise * 1000).toLocaleTimeString());
          setSunset(new Date(res.sys.sunset * 1000).toLocaleTimeString());
        } catch (error) {
          console.error("Error fetching weather data:", error);
        }
      }
    };

    fetchWeatherInfo();
  }, [currentLocation]);

  const getWeather = async (event) => {
    if (event.key === "Enter") {
      if (cityName.trim() === "") {
        alert("Invalid City Name");
        return;
      }
      try {
        const resp = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=046af07c64294701572e10ca4d58326f`
        );
        const res = await resp.json();
        setWeatherData(res);

        setLocalDate(new Date(res.dt * 1000).toLocaleDateString());
        setLocalTime(new Date(res.dt * 1000).toLocaleTimeString());
        setSunrise(new Date(res.sys.sunrise * 1000).toLocaleTimeString());
        setSunset(new Date(res.sys.sunset * 1000).toLocaleTimeString());
      } catch (e) {
        console.error("Error fetching weather data:", e);
      }
    }
  };

  if (!weatherData) {
    return (
      <div className="h-screen w-full flex items-center justify-center text-2xl p-3">
        Loading...
      </div>
    );
  }

  return (
    <div className="h-screen w-full flex justify-center items-center flex-col p-3 bg-slate-200 font-inter">
      <div
        id="main-window"
        className="h-full w-1/2 md:w-1/3 bg-gradient-to-br from-sky-200 via-sky-700 to-sky-700 rounded-lg shadow-2xl"
      >
        <div class="h-1/8 relative m-2">
          <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              class="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            <span class="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg"
            placeholder="Enter city name here"
            onChange={(e) => {
              setCityName(e.target.value);
            }}
            onKeyDown={getWeather}
          />
        </div>
        <div
          id="top-screen"
          className="h-2/6 w-full flex flex-row justify-between p-3"
        >
          <div id="city-name" className="m-auto ml-2 md:ml-5">
            <p className="text-sm md:text-base">
              {countryNames[weatherData.sys.country]}
            </p>
            <p className="text-3xl md:text-5xl font-bold">{weatherData.name}</p>
            <p className="text-base md:text-lg">
              {weatherData.weather[0].main}
            </p>
            <p className="text-sm md:text-base">
              {Math.round(weatherData.main.temp - 273.15)}° C feels like{" "}
              {Math.round(weatherData.main.feels_like - 273.15)}° C
            </p>
          </div>
          <div id="icon" className="m-auto">
            <img
              className="h-auto md:h-48"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            />
          </div>
        </div>
        <div
          id="bottom screen"
          className="h-3/5 w-full bg-slate-200 rounded-t-2xl rounded-xl pt-4 p-3"
        >
          <div className="grid grid-rows-6 grid-cols-3 gap-3 h-full">
            <div className="col-span-2 row-span-2 border-2 border-gray-200 shadow-lg rounded-lg flex flex-col p-2">
              <div className="flex justify-between">
                <h1 className="text-xs md:text-sm font-bold">Timings</h1>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 md:h-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M30 16C30 16.34 30 16.67 30 17C29.7667 20.3709 28.3222 23.5436 25.9329 25.9329C23.5436 28.3222 20.3709 29.7667 17 30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30C11.6291 29.7667 8.45636 28.3222 6.0671 25.9329C3.67783 23.5436 2.23329 20.3709 2 17C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15C2.23329 11.6291 3.67783 8.45636 6.0671 6.0671C8.45636 3.67783 11.6291 2.23329 15 2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2C20.3709 2.23329 23.5436 3.67783 25.9329 6.0671C28.3222 8.45636 29.7667 11.6291 30 15C30 15.33 30 15.66 30 16Z"
                      fill="#FF8F00"
                    ></path>{" "}
                    <path
                      d="M17 28V30C16.67 30 16.34 30 16 30C15.66 30 15.33 30 15 30V28C15 27.7348 15.1054 27.4804 15.2929 27.2929C15.4804 27.1054 15.7348 27 16 27C16.2652 27 16.5196 27.1054 16.7071 27.2929C16.8946 27.4804 17 27.7348 17 28Z"
                      fill="#0D47A1"
                    ></path>{" "}
                    <path
                      d="M30 16C30 16.34 30 16.67 30 17H28C27.7348 17 27.4804 16.8946 27.2929 16.7071C27.1054 16.5196 27 16.2652 27 16C27 15.7348 27.1054 15.4804 27.2929 15.2929C27.4804 15.1054 27.7348 15 28 15H30C30 15.33 30 15.66 30 16Z"
                      fill="#0D47A1"
                    ></path>{" "}
                    <path
                      d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
                      fill="#304046"
                    ></path>{" "}
                    <path
                      d="M17 2V4C17 4.26522 16.8946 4.51957 16.7071 4.70711C16.5196 4.89464 16.2652 5 16 5C15.7348 5 15.4804 4.89464 15.2929 4.70711C15.1054 4.51957 15 4.26522 15 4V2C15.33 2 15.66 2 16 2C16.34 2 16.67 2 17 2Z"
                      fill="#0D47A1"
                    ></path>{" "}
                    <path
                      d="M16 17.0001C15.8088 17.0001 15.6217 16.9453 15.4607 16.8422C15.2997 16.7391 15.1716 16.592 15.0917 16.4184C15.0117 16.2448 14.9832 16.0519 15.0094 15.8625C15.0357 15.6732 15.1157 15.4953 15.24 15.3501L21.24 8.35005C21.3254 8.25025 21.4295 8.16823 21.5466 8.10869C21.6637 8.04915 21.7913 8.01324 21.9222 8.00303C22.0532 7.99282 22.1848 8.00849 22.3097 8.04916C22.4346 8.08983 22.5502 8.15469 22.65 8.24005C22.7498 8.32541 22.8318 8.42959 22.8914 8.54665C22.9509 8.6637 22.9868 8.79134 22.997 8.92227C23.0072 9.0532 22.9916 9.18486 22.9509 9.30973C22.9102 9.43461 22.8454 9.55025 22.76 9.65005L16.76 16.6501C16.6661 16.7598 16.5496 16.8479 16.4184 16.9084C16.2872 16.9688 16.1444 17.0001 16 17.0001Z"
                      fill="#0D47A1"
                    ></path>{" "}
                    <path
                      d="M16 17H11C10.7348 17 10.4804 16.8946 10.2929 16.7071C10.1054 16.5196 10 16.2652 10 16C10 15.7348 10.1054 15.4804 10.2929 15.2929C10.4804 15.1054 10.7348 15 11 15H16C16.2652 15 16.5196 15.1054 16.7071 15.2929C16.8946 15.4804 17 15.7348 17 16C17 16.2652 16.8946 16.5196 16.7071 16.7071C16.5196 16.8946 16.2652 17 16 17Z"
                      fill="#0D47A1"
                    ></path>{" "}
                    <path
                      d="M15 2C11.6291 2.23329 8.45636 3.67783 6.0671 6.0671C3.67783 8.45636 2.23329 11.6291 2 15C2 15.33 2 15.66 2 16C2 16.34 2 16.67 2 17C2.23329 20.3709 3.67783 23.5436 6.0671 25.9329C8.45636 28.3222 11.6291 29.7667 15 30C15.33 30 15.66 30 16 30V2C15.66 2 15.33 2 15 2Z"
                      fill="#FFB300"
                    ></path>{" "}
                    <path
                      d="M15 28V30C15.33 30 15.66 30 16 30V27C15.7348 27 15.4804 27.1054 15.2929 27.2929C15.1054 27.4804 15 27.7348 15 28Z"
                      fill="#1565C0"
                    ></path>{" "}
                    <path
                      d="M5 16C5 16.2652 4.89464 16.5196 4.70711 16.7071C4.51957 16.8946 4.26522 17 4 17H2C2 16.67 2 16.34 2 16C2 15.66 2 15.33 2 15H4C4.26522 15 4.51957 15.1054 4.70711 15.2929C4.89464 15.4804 5 15.7348 5 16Z"
                      fill="#1565C0"
                    ></path>{" "}
                    <path
                      d="M15 2V4C15 4.26522 15.1054 4.51957 15.2929 4.70711C15.4804 4.89464 15.7348 5 16 5V2C15.66 2 15.33 2 15 2Z"
                      fill="#1565C0"
                    ></path>{" "}
                    <path
                      d="M15.24 15.35C15.1157 15.4952 15.0357 15.6731 15.0094 15.8624C14.9832 16.0518 15.0117 16.2447 15.0917 16.4183C15.1716 16.592 15.2997 16.739 15.4607 16.8421C15.6217 16.9452 15.8088 17 16 17V14.46L15.24 15.35Z"
                      fill="#1565C0"
                    ></path>{" "}
                    <path
                      d="M11 15C10.7348 15 10.4804 15.1054 10.2929 15.2929C10.1054 15.4804 10 15.7348 10 16C10 16.2652 10.1054 16.5196 10.2929 16.7071C10.4804 16.8946 10.7348 17 11 17H16V15H11Z"
                      fill="#1565C0"
                    ></path>{" "}
                    <path
                      d="M16 30C13.2311 30 10.5243 29.1789 8.22202 27.6406C5.91973 26.1022 4.12532 23.9157 3.06569 21.3576C2.00607 18.7994 1.72882 15.9845 2.26901 13.2687C2.80921 10.553 4.14258 8.05845 6.10051 6.10051C8.05845 4.14258 10.553 2.80921 13.2687 2.26901C15.9845 1.72882 18.7994 2.00607 21.3576 3.06569C23.9157 4.12532 26.1022 5.91973 27.6406 8.22202C29.1789 10.5243 30 13.2311 30 16C30 19.713 28.525 23.274 25.8995 25.8995C23.274 28.525 19.713 30 16 30ZM16 4.00001C13.6266 4.00001 11.3066 4.70379 9.33316 6.02237C7.35977 7.34095 5.8217 9.21509 4.91345 11.4078C4.0052 13.6005 3.76756 16.0133 4.23058 18.3411C4.69361 20.6689 5.83649 22.8071 7.51472 24.4853C9.19295 26.1635 11.3312 27.3064 13.6589 27.7694C15.9867 28.2325 18.3995 27.9948 20.5922 27.0866C22.7849 26.1783 24.6591 24.6402 25.9776 22.6668C27.2962 20.6935 28 18.3734 28 16C28 12.8174 26.7357 9.76516 24.4853 7.51472C22.2349 5.26429 19.1826 4.00001 16 4.00001Z"
                      fill="#263238"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <p className="text-sm md:text-base">Current Date: {localDate}</p>
              <p className="text-sm md:text-base">Current Time: {localtime}</p>
              <p className="text-sm md:text-base">Sunrise: {sunrise}</p>
              <p className="text-sm md:text-base">Sunset: {sunset}</p>
            </div>
            <div className="col-span-1 row-span-2 border-2 border-gray-200 shadow-lg rounded-lg p-2">
              <div className="flex justify-between">
                <h1 className="text-xs md:text-sm font-bold">Coordinates</h1>
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 md:h-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M16 27C15.7348 27 15.4804 26.8946 15.2929 26.7071C15.1054 26.5196 15 26.2652 15 26V23C15 22.7348 15.1054 22.4804 15.2929 22.2929C15.4804 22.1054 15.7348 22 16 22C16.2652 22 16.5196 22.1054 16.7071 22.2929C16.8946 22.4804 17 22.7348 17 23V26C17 26.2652 16.8946 26.5196 16.7071 26.7071C16.5196 26.8946 16.2652 27 16 27Z"
                      fill="#263238"
                    ></path>{" "}
                    <path
                      d="M27 13C27 15.9174 25.8411 18.7153 23.7782 20.7782C21.7153 22.8411 18.9174 24 16 24C15.0893 23.9998 14.1823 23.8856 13.3 23.66C12.5276 23.4641 11.7796 23.1824 11.07 22.82C9.24766 21.9063 7.71506 20.5043 6.64322 18.7703C5.57138 17.0363 5.00248 15.0385 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7183 5.18528 10.8449 5.44 9.99998C6.17929 7.4644 7.8062 5.27947 10.0235 3.84441C12.2407 2.40935 14.9003 1.81997 17.5163 2.18397C20.1322 2.54797 22.5299 3.84105 24.2712 5.82692C26.0124 7.8128 26.981 10.3589 27 13Z"
                      fill="#0277BD"
                    ></path>{" "}
                    <path
                      d="M22.93 28.63L21.73 25.63C21.6559 25.4439 21.5276 25.2844 21.3618 25.1721C21.196 25.0598 21.0003 24.9998 20.8 25H11.2C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H22C22.1634 30.0002 22.3243 29.9603 22.4687 29.8839C22.6131 29.8075 22.7366 29.6968 22.8283 29.5616C22.9201 29.4265 22.9773 29.2709 22.9951 29.1085C23.0128 28.9461 22.9904 28.7818 22.93 28.63Z"
                      fill="#263238"
                    ></path>{" "}
                    <path
                      d="M12.84 21.55C12.7633 21.6621 12.6647 21.7574 12.55 21.83L11.07 22.83C9.24615 21.9156 7.71254 20.512 6.6406 18.7761C5.56865 17.0401 5.00062 15.0403 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7184 5.18528 10.8449 5.44 10C6.81089 9.18658 8.26187 8.51638 9.77 8.00004C10.222 7.81354 10.7101 7.73108 11.1982 7.75877C11.6864 7.78647 12.162 7.92361 12.59 8.16004C14.03 9.22004 13.91 11.86 12.84 13.51C12.496 14.036 12.0507 14.4881 11.53 14.84C12.4853 15.08 13.3185 15.6639 13.87 16.48C14.57 17.76 14.23 19.4 12.84 21.55Z"
                      fill="#7CB342"
                    ></path>{" "}
                    <path
                      d="M27 13C26.9993 14.643 26.6338 16.2654 25.93 17.75L25 17.67L24.77 17.62C22.43 16.84 19.94 15 19.69 13C19.43 10.81 20.47 8.14002 24.16 7.18002C24.3338 7.13514 24.5162 7.13514 24.69 7.18002L25.47 7.41002C26.4706 9.10309 26.9989 11.0334 27 13Z"
                      fill="#558B2F"
                    ></path>{" "}
                    <path
                      d="M15 23V26C15 26.2652 15.1054 26.5196 15.2929 26.7071C15.4804 26.8946 15.7348 27 16 27V22C15.7348 22 15.4804 22.1054 15.2929 22.2929C15.1054 22.4804 15 22.7348 15 23Z"
                      fill="#455A64"
                    ></path>{" "}
                    <path
                      d="M5.44 9.94C5.18028 10.8042 5.03241 11.6982 5 12.6C5 12.73 5 12.87 5 13C5.00248 15.0385 5.57138 17.0363 6.64322 18.7703C7.71506 20.5043 9.24766 21.9064 11.07 22.82C11.7796 23.1824 12.5276 23.4641 13.3 23.66C14.1823 23.8856 15.0893 23.9998 16 24V2C13.6174 2.00126 11.2995 2.77611 9.39516 4.208C7.49078 5.63989 6.10281 7.65141 5.44 9.94Z"
                      fill="#039BE5"
                    ></path>{" "}
                    <path
                      d="M11.2 25C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H16V25H11.2Z"
                      fill="#455A64"
                    ></path>{" "}
                    <path
                      d="M12.84 21.55C12.7633 21.6621 12.6647 21.7574 12.55 21.83L11.07 22.83C9.24615 21.9156 7.71254 20.512 6.6406 18.7761C5.56865 17.0401 5.00062 15.0403 5 13C5 12.87 5 12.73 5 12.6C5.03746 11.7184 5.18528 10.8449 5.44 10C6.81089 9.18658 8.26187 8.51638 9.77 8.00004C10.222 7.81354 10.7101 7.73108 11.1982 7.75877C11.6864 7.78647 12.162 7.92361 12.59 8.16004C14.03 9.22004 13.91 11.86 12.84 13.51C12.496 14.036 12.0507 14.4881 11.53 14.84C12.4853 15.08 13.3185 15.6639 13.87 16.48C14.57 17.76 14.23 19.4 12.84 21.55Z"
                      fill="#7CB342"
                    ></path>{" "}
                    <path
                      d="M16 2C13.8244 2 11.6977 2.64514 9.88873 3.85383C8.07979 5.06253 6.66989 6.7805 5.83733 8.79048C5.00477 10.8005 4.78693 13.0122 5.21137 15.146C5.6358 17.2798 6.68345 19.2398 8.22183 20.7782C9.76021 22.3166 11.7202 23.3642 13.854 23.7886C15.9878 24.2131 18.1995 23.9952 20.2095 23.1627C22.2195 22.3301 23.9375 20.9202 25.1462 19.1113C26.3549 17.3023 27 15.1756 27 13C27 10.0826 25.8411 7.28473 23.7782 5.22183C21.7153 3.15893 18.9174 2 16 2ZM16 22C14.22 22 12.4799 21.4722 10.9999 20.4832C9.51983 19.4943 8.36628 18.0887 7.68509 16.4442C7.0039 14.7996 6.82567 12.99 7.17294 11.2442C7.5202 9.49836 8.37737 7.89471 9.63604 6.63604C10.8947 5.37737 12.4984 4.5202 14.2442 4.17293C15.99 3.82567 17.7996 4.0039 19.4442 4.68508C21.0887 5.36627 22.4943 6.51983 23.4832 7.99987C24.4722 9.47991 25 11.22 25 13C25 15.3869 24.0518 17.6761 22.364 19.364C20.6761 21.0518 18.387 22 16 22Z"
                      fill="#263238"
                    ></path>{" "}
                    <path
                      d="M21.73 25.63C21.6559 25.4439 21.5276 25.2844 21.3618 25.1721C21.196 25.0598 21.0003 24.9998 20.8 25H11.2C10.9997 24.9998 10.804 25.0598 10.6382 25.1721C10.4724 25.2844 10.3441 25.4439 10.27 25.63L9.06999 28.63C9.00954 28.7818 8.9872 28.9461 9.00492 29.1085C9.02265 29.2709 9.07989 29.4265 9.17165 29.5616C9.26341 29.6968 9.38689 29.8075 9.53129 29.8839C9.67569 29.9603 9.83662 30.0002 9.99999 30H22C22.1634 30.0002 22.3243 29.9603 22.4687 29.8839C22.6131 29.8075 22.7366 29.6968 22.8283 29.5616C22.9201 29.4265 22.9773 29.2709 22.9951 29.1085C23.0128 28.9461 22.9904 28.7818 22.93 28.63L21.73 25.63ZM11.48 28L11.88 27H20.12L20.52 28H11.48Z"
                      fill="#263238"
                    ></path>{" "}
                  </g>
                </svg>
              </div>
              <p className="text-sm md:text-base">
                Lat: {weatherData.coord.lat}
              </p>
              <p className="text-sm md:text-base">
                Lon: {weatherData.coord.lon}
              </p>
            </div>
            <div className="col-span-3 row-span-2 border-2 border-gray-200 shadow-lg rounded-lg p-2">
              <div className="flex justify-between">
                <h1 className="text-xs md:text-sm font-bold">
                  Various Temperatures
                </h1>
                <svg
                  viewBox="-2.98 0 20.014 20.014"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-4 md:h-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="thermometer-4" transform="translate(-4.942 -2)">
                      {" "}
                      <path
                        id="secondary"
                        fill="#2ca9bc"
                        d="M14,17a4,4,0,1,1-6-3.45V5a2,2,0,0,1,4,0v8.55A4,4,0,0,1,14,17Z"
                      ></path>{" "}
                      <path
                        id="primary"
                        d="M16,6h2m-2,4h2m-1,4h1m-6-.45V5A2,2,0,0,0,8,5v8.55a4,4,0,1,0,4,0Z"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex flex-row">
                <div className="rounded-lg shadow-xl h-full m-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Main Temp</h1>
                  <p>{Math.round(weatherData.main.temp - 273.15)}° C</p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Feels Like</h1>
                  <p>{Math.round(weatherData.main.feels_like - 273.15)}° C</p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Max Temp</h1>
                  <p>{Math.round(weatherData.main.temp_max - 273.15)}° C</p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Min Temp</h1>
                  <p>{Math.round(weatherData.main.temp_min - 273.15)}° C</p>
                </div>
              </div>
            </div>
            <div className="col-span-3 row-span-2 border-2 border-gray-200 shadow-lg rounded-lg p-2">
              <div className="flex justify-between">
                <h1 className="text-xs md:text-sm font-bold">Other Details</h1>
                <svg
                  viewBox="-2.98 0 20.014 20.014"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                  className="h-4 md:h-6"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g id="thermometer-4" transform="translate(-4.942 -2)">
                      {" "}
                      <path
                        id="secondary"
                        fill="#2ca9bc"
                        d="M14,17a4,4,0,1,1-6-3.45V5a2,2,0,0,1,4,0v8.55A4,4,0,0,1,14,17Z"
                      ></path>{" "}
                      <path
                        id="primary"
                        d="M16,6h2m-2,4h2m-1,4h1m-6-.45V5A2,2,0,0,0,8,5v8.55a4,4,0,1,0,4,0Z"
                        fill="none"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      ></path>{" "}
                    </g>{" "}
                  </g>
                </svg>
              </div>
              <div className="flex flex-row">
                <div className="rounded-lg shadow-xl h-full m-2 mr-0 md:mr-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Wind</h1>
                  <p>
                    {(weatherData.wind.speed * 3.6).toFixed(1)}km/hr in{" "}
                    {getWindDirection(weatherData.wind.deg)}
                  </p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 mr-0 md:mr-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Visibility</h1>
                  <p>{(weatherData.visibility / 1000).toFixed(1)}km</p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 mr-0 md:mr-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Pressure</h1>
                  <p>{weatherData.main.pressure}hPa</p>
                </div>
                <div className="rounded-lg shadow-xl h-full m-2 p-2 md:p-3 text-sm md:temp-base">
                  <h1>Humidity</h1>
                  <p>{weatherData.main.humidity}%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
