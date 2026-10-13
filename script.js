
// HavaAz - JavaScript + AJAX (XMLHttpRequest)
// Rayonlar üçün rayon mərkəzlərinin koordinatları istifadə edilir.

const cities = [
    { name: "Bakı", lat: 40.3667, lon: 49.8352 },
    { name: "Gəncə", lat: 40.6828, lon: 46.3606 },
    { name: "Sumqayıt", lat: 40.5961, lon: 49.6700 },
    { name: "Mingəçevir", lat: 40.7640, lon: 47.0595 },
    { name: "Şəki", lat: 41.1919, lon: 47.1706 },
    { name: "Quba", lat: 41.3653, lon: 48.5264 },
    { name: "Qusar", lat: 41.4219, lon: 48.4214 },
    { name: "Qəbələ", lat: 40.9825, lon: 47.8491 },
    { name: "Şamaxı", lat: 40.6341, lon: 48.6383 },
    { name: "Lənkəran", lat: 38.7536, lon: 48.8511 },
    { name: "Astara", lat: 38.4400, lon: 48.8750 },
    { name: "Zaqatala", lat: 41.6336, lon: 46.6433 },
    { name: "Qax", lat: 41.4194, lon: 46.9181 },
    { name: "İsmayıllı", lat: 40.7847, lon: 48.1514 },
    { name: "Göyçay", lat: 40.6553, lon: 47.7389 },
    { name: "Bərdə", lat: 40.3831, lon: 47.1186 },
    { name: "Ağcabədi", lat: 40.0489, lon: 47.4502 },
    { name: "Şəmkir", lat: 40.8297, lon: 46.0189 },
    { name: "Tovuz", lat: 40.9924, lon: 45.6167 },
    { name: "Naxçıvan", lat: 39.2089, lon: 45.4122 },
    { name: "Xırdalan (Abşeron)", lat: 40.4486, lon: 49.7564 },
    { name: "Yevlax", lat: 40.6172, lon: 47.1500 },
    { name: "Xaçmaz", lat: 41.4681, lon: 48.8028 },
    { name: "Xankəndi", lat: 39.8153, lon: 46.7519 },
    { name: "Naftalan", lat: 40.5058, lon: 46.8192 },
    { name: "Ağdam", lat: 39.9833, lon: 46.9167 },
    { name: "Ağdaş", lat: 40.6500, lon: 47.4833 },
    { name: "Ağstafa", lat: 41.1167, lon: 45.4500 },
    { name: "Ağsu", lat: 40.5703, lon: 48.4009 },
    { name: "Balakən", lat: 41.7186, lon: 46.4165 },
    { name: "Beyləqan", lat: 39.7692, lon: 47.6156 },
    { name: "Biləsuvar", lat: 39.4553, lon: 48.5458 },
    { name: "Cəbrayıl", lat: 39.4000, lon: 47.0261 },
    { name: "Cəlilabad", lat: 39.2042, lon: 48.4958 },
    { name: "Culfa", lat: 38.9558, lon: 45.6308 },
    { name: "Daşkəsən", lat: 40.5209, lon: 46.0814 },
    { name: "Füzuli", lat: 39.6003, lon: 47.1431 },
    { name: "Gədəbəy", lat: 40.5656, lon: 45.8161 },
    { name: "Goranboy", lat: 40.6100, lon: 46.7872 },
    { name: "Göygöl", lat: 40.5905, lon: 46.3239 },
    { name: "Hacıqabul", lat: 40.0386, lon: 48.9428 },
    { name: "İmişli", lat: 39.8697, lon: 48.0600 },
    { name: "Kəlbəcər", lat: 40.1067, lon: 46.0383 },
    { name: "Kürdəmir", lat: 40.3383, lon: 48.1608 },
    { name: "Laçın", lat: 39.6408, lon: 46.5469 },
    { name: "Lerik", lat: 38.7753, lon: 48.4153 },
    { name: "Masallı", lat: 39.0324, lon: 48.6722 },
    { name: "Neftçala", lat: 39.3791, lon: 49.2486 },
    { name: "Oğuz", lat: 41.0714, lon: 47.4653 },
    { name: "Ordubad", lat: 38.9047, lon: 46.0231 },
    { name: "Qazax", lat: 41.0933, lon: 45.3661 },
    { name: "Qobustan", lat: 40.5333, lon: 48.9333 },
    { name: "Qubadlı", lat: 39.3439, lon: 46.5797 },
    { name: "Saatlı", lat: 39.9311, lon: 48.3697 },
    { name: "Sabirabad", lat: 40.0053, lon: 48.4719 },
    { name: "Salyan", lat: 39.5961, lon: 48.9847 },
    { name: "Samux", lat: 40.7642, lon: 46.4083 },
    { name: "Sədərək", lat: 39.7000, lon: 44.8600 },
    { name: "Siyəzən", lat: 41.0783, lon: 49.1061 },
    { name: "Şabran", lat: 41.2012, lon: 48.9871 },
    { name: "Şahbuz", lat: 39.4072, lon: 45.5739 },
    { name: "Şərur", lat: 39.5544, lon: 44.9826 },
    { name: "Şirvan", lat: 39.9319, lon: 48.9203 },
    { name: "Şuşa", lat: 39.7602, lon: 46.7504 },
    { name: "Tərtər", lat: 40.3353, lon: 46.9303 },
    { name: "Ucar", lat: 40.5183, lon: 47.6542 },
    { name: "Xızı", lat: 40.9111, lon: 49.0694 },
    { name: "Xocalı", lat: 39.9131, lon: 46.7903 },
    { name: "Xocavənd", lat: 39.7953, lon: 47.1131 },
    { name: "Yardımlı", lat: 38.9078, lon: 48.2406 },
    { name: "Zəngilan", lat: 39.0837, lon: 46.6599 },
    { name: "Zərdab", lat: 40.2199, lon: 47.7100 },
    { name: "Babək", lat: 39.1519, lon: 45.4417 },
    { name: "Qıvraq (Kəngərli)", lat: 39.4041, lon: 45.1145 }
];

// Əlifba sırası
cities.sort(function(a, b) {
    return a.name.localeCompare(b.name, "az");
});

// HTML elementləri
const citySearch = document.getElementById("citySearch");
const citySelect = document.getElementById("citySelect");
const searchInfo = document.getElementById("searchInfo");
const refreshBtn = document.getElementById("refreshBtn");
const statusMessage = document.getElementById("statusMessage");
const weatherSection = document.getElementById("weatherSection");
const forecastCards = document.getElementById("forecastCards");

let selectedCity = null;
let activeRequest = null;
let requestNumber = 0;

// Axtarışda ə/e, ş/s kimi fərqlərə icazə veririk.
function normalizeText(text) {
    return text.toLocaleLowerCase("az-AZ")
        .replace(/ə/g, "e")
        .replace(/ı/g, "i")
        .replace(/ş/g, "s")
        .replace(/ğ/g, "g")
        .replace(/ö/g, "o")
        .replace(/ü/g, "u")
        .replace(/ç/g, "c");
}

function findCities(text) {
    const query = normalizeText(text.trim());
    return cities.filter(function(city) {
        return normalizeText(city.name).includes(query);
    });
}

// Axtarışa uyğun olaraq select-i doldururuq.
function fillCitySelect(text = "") {
    const matches = findCities(text);
    citySelect.innerHTML = '<option value="">Ərazi seçin</option>';

    matches.forEach(function(city) {
        const option = document.createElement("option");
        option.value = city.name;
        option.textContent = city.name;
        citySelect.appendChild(option);
    });

    if (matches.length === 0) {
        searchInfo.textContent = "Bu adda şəhər və ya rayon tapılmadı.";
    } else if (text.trim() !== "") {
        searchInfo.textContent = matches.length + " nəticə tapıldı. Seç və ya Enter bas.";
    } else {
        searchInfo.textContent = cities.length + " ərazi mövcuddur. Şəhər seç və ya axtar.";
    }
    return matches;
}

function selectCity(city) {
    selectedCity = city;
    citySearch.value = "";
    fillCitySelect();
    citySelect.value = city.name;
    loadWeather(city);
}

citySearch.addEventListener("input", function() {
    fillCitySelect(citySearch.value);
});

citySearch.addEventListener("keydown", function(event) {
    if (event.key !== "Enter") return;
    event.preventDefault();

    const matches = findCities(citySearch.value);
    if (matches.length === 0) {
        searchInfo.textContent = "Bu adda ərazi tapılmadı.";
        return;
    }
    // Dəqiq uyğunluq varsa onu, yoxdursa ilk nəticəni seçirik.
    const exact = matches.find(function(city) {
        return normalizeText(city.name) === normalizeText(citySearch.value.trim());
    });
    selectCity(exact || matches[0]);
});

citySelect.addEventListener("change", function() {
    const city = cities.find(function(item) {
        return item.name === citySelect.value;
    });
    if (city) selectCity(city);
});

refreshBtn.addEventListener("click", function() {
    if (selectedCity) loadWeather(selectedCity);
    else showStatus("Əvvəlcə şəhər və ya rayon seç.", "error");
});

function showStatus(message, type) {
    statusMessage.hidden = false;
    statusMessage.className = "status-message " + (type || "");
    statusMessage.textContent = message;
}

function hideStatus() {
    statusMessage.hidden = true;
    statusMessage.textContent = "";
}

function handleRequestError(message) {
    weatherSection.hidden = true;
    showStatus(message, "error");
}

// AJAX: yeni şəhər seçildikdə real hava məlumatlarını yükləyirik.
function loadWeather(city) {
    requestNumber++;
    const thisRequest = requestNumber;

    // Köhnə sorğu yenisinin nəticəsini əvəz etməsin.
    if (activeRequest) activeRequest.abort();

    weatherSection.hidden = true;
    showStatus(city.name + " üçün hava proqnozu yüklənir...", "loading");

    const url = "https://api.open-meteo.com/v1/forecast" +
        "?latitude=" + city.lat +
        "&longitude=" + city.lon +
        "&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,is_day,wind_speed_10m" +
        "&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max" +
        "&timezone=Asia%2FBaku&forecast_days=7";

    const xhr = new XMLHttpRequest();
    activeRequest = xhr;
    xhr.open("GET", url, true);
    xhr.timeout = 15000;

    xhr.onload = function() {
        if (thisRequest !== requestNumber) return;
        activeRequest = null;

        if (xhr.status < 200 || xhr.status >= 300) {
            handleRequestError("Server xətası: HTTP " + xhr.status);
            return;
        }

        let data;
        try {
            data = JSON.parse(xhr.responseText);
        } catch (error) {
            handleRequestError("Serverdən düzgün JSON cavabı gəlmədi.");
            return;
        }

        if (data.error) {
            handleRequestError("API xətası: " + (data.reason || "Naməlum xəta"));
            return;
        }
        if (!data.current || !data.daily ||
            !Array.isArray(data.daily.time) || data.daily.time.length === 0) {
            handleRequestError("Bu ərazi üçün hava məlumatı tapılmadı.");
            return;
        }

        displayCurrentWeather(data.current, data.daily, city.name);
        displayForecast(data.daily);
        weatherSection.hidden = false;
        hideStatus();
    };

    xhr.onerror = function() {
        if (thisRequest !== requestNumber) return;
        activeRequest = null;
        handleRequestError("Şəbəkə xətası. İnternet bağlantını yoxla.");
    };

    xhr.ontimeout = function() {
        if (thisRequest !== requestNumber) return;
        activeRequest = null;
        handleRequestError("Sorğu vaxtı bitdi. Yenilə düyməsini yoxla.");
    };

    xhr.send();
}

// Rəsmi WMO weather_code -> Azərbaycan dilində təsvir + ikon
function getWeatherInfo(code, isDay = 1) {
    const types = {
        0: ["Açıq səma", "☀️"],
        1: ["Əsasən açıq", "🌤️"],
        2: ["Az buludlu", "⛅"],
        3: ["Buludlu", "☁️"],
        45: ["Dumanlı", "🌫️"], 48: ["Şaxtalı duman", "🌫️"],
        51: ["Zəif çiskin", "🌦️"], 53: ["Orta çiskin", "🌦️"],
        55: ["Güclü çiskin", "🌧️"],
        56: ["Zəif donan çiskin", "🌧️"], 57: ["Güclü donan çiskin", "🌧️"],
        61: ["Zəif yağış", "🌧️"], 63: ["Orta yağış", "🌧️"],
        65: ["Güclü yağış", "🌧️"],
        66: ["Zəif donan yağış", "🌧️"], 67: ["Güclü donan yağış", "🌧️"],
        71: ["Zəif qar", "🌨️"], 73: ["Orta qar", "🌨️"],
        75: ["Güclü qar", "❄️"], 77: ["Qar dənəcikləri", "❄️"],
        80: ["Zəif leysan", "🌦️"], 81: ["Orta leysan", "🌧️"],
        82: ["Güclü leysan", "🌧️"],
        85: ["Zəif qar leysanı", "🌨️"], 86: ["Güclü qar leysanı", "🌨️"],
        95: ["Göy gurultulu hava", "⛈️"],
        96: ["Dolu ilə tufan", "⛈️"],
        97: ["Güclü tufan", "⛈️"],
        99: ["Güclü dolu ilə tufan", "⛈️"]
    };

    if (!types[code]) return { text: "Məlumat yoxdur", icon: "❔" };
    if (isDay === 0 && (code === 0 || code === 1)) {
        return { text: types[code][0], icon: "🌙" };
    }
    return { text: types[code][0], icon: types[code][1] };
}

function formatValue(value, unit) {
    if (typeof value !== "number" || !Number.isFinite(value)) {
        return "Məlumat yoxdur";
    }
    return Math.round(value) + unit;
}

function dayValue(daily, field, index) {
    if (!Array.isArray(daily[field])) return null;
    return daily[field][index] ?? null;
}

function displayCurrentWeather(current, daily, cityName) {
    const weather = getWeatherInfo(current.weather_code, current.is_day);

    document.getElementById("selectedCity").textContent = cityName;
    document.getElementById("temperature").textContent = formatValue(current.temperature_2m, "°C");
    document.getElementById("weatherDescription").textContent = weather.text;

    const weatherIcon = document.getElementById("weatherIcon");
    weatherIcon.textContent = weather.icon;
    weatherIcon.setAttribute("aria-label", weather.text);

    document.getElementById("feelsLike").textContent = formatValue(current.apparent_temperature, "°C");
    document.getElementById("humidity").textContent = formatValue(current.relative_humidity_2m, "%");
    document.getElementById("windSpeed").textContent = formatValue(current.wind_speed_10m, " km/saat");

    // Cari ehtimal deyil: bu gün üçün maksimum yağıntı ehtimalıdır.
    document.getElementById("rainChance").textContent = formatValue(
        dayValue(daily, "precipitation_probability_max", 0), "%"
    );

    const min = dayValue(daily, "temperature_2m_min", 0);
    const max = dayValue(daily, "temperature_2m_max", 0);
    document.getElementById("todayRange").textContent =
        formatValue(min, "°") + " / " + formatValue(max, "°");

    document.getElementById("updateTime").textContent = current.time
        ? "Proqnoz vaxtı: " + current.time.replace("T", " • ") + " (Bakı vaxtı)"
        : "Proqnoz vaxtı məlum deyil";
}

function displayForecast(daily) {
    forecastCards.innerHTML = "";
    const count = Math.min(daily.time.length, 7);

    for (let i = 0; i < count; i++) {
        // Günlər yerli təqvim üzrə hesablanır.
        const date = new Date(daily.time[i] + "T12:00:00");
        if (Number.isNaN(date.getTime())) continue;

        const dayName = i === 0 ? "Bu gün" : date.toLocaleDateString("az-AZ", { weekday: "long" });
        const shortDate = date.toLocaleDateString("az-AZ", { day: "numeric", month: "short" });
        const weather = getWeatherInfo(dayValue(daily, "weather_code", i));
        const min = dayValue(daily, "temperature_2m_min", i);
        const max = dayValue(daily, "temperature_2m_max", i);
        const rain = dayValue(daily, "precipitation_probability_max", i);

        const card = document.createElement("article");
        card.className = "forecast-card";
        // Kartın daxilinə yalnız API-dən gələn rəqəmləri və
        // proqramdakı sabit təsvirləri əlavə edirik.
        card.innerHTML = `
            <p class="forecast-day">${dayName}</p>
            <p class="forecast-date">${shortDate}</p>
            <div class="forecast-icon" aria-hidden="true">${weather.icon}</div>
            <p class="forecast-description">${weather.text}</p>
            <div class="forecast-temps">
                <strong>${formatValue(max, "°")}</strong>
                <span>${formatValue(min, "°")}</span>
            </div>
            <p class="forecast-rain">☔ Max: ${formatValue(rain, "%")}</p>
        `;
        forecastCards.appendChild(card);
    }

    if (forecastCards.children.length === 0) {
        forecastCards.textContent = "7 günlük proqnoz tapılmadı.";
    }
}

// Sayt açılanda siyahı yaransın və Bakı avtomatik yüklənsin.
fillCitySelect();
selectCity(cities.find(function(city) { return city.name === "Bakı"; }));
