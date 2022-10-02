import { useEffect, useState } from "react";
import axios from "axios";
import ContentLoader from "react-content-loader";

import s from "./Weather.module.scss";


const Weather = () => {
    const [weatherData, setWeatherData] = useState<{
        success: boolean;
        temp: number;
        icon: string;
        condition: string;
    }>();

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const { data } = await axios.get("https://litvin0d-news.herokuapp.com/weather");
                setWeatherData(data);
            } catch (e) {
                console.log(e);
            }
        }

        fetchWeatherData();
    }, []);

    if (!weatherData) {
        return (
            <ContentLoader
                speed={2}
                width={145.17}
                height={28}
                viewBox="0 0 145.17 28"
                backgroundColor="#dcdcdc"
                foregroundColor="#d0d0d0"
            >
                <rect x="0" y="0" rx="10" ry="10" width="28" height="28" />
                <rect x="40" y="0" rx="10" ry="10" width="100" height="28" />
            </ContentLoader>
        );
    }

    const condTranslation: object = {
        "clear": "Ясно" as string,
        "partly-cloudy": "Малооблачно" as string,
        "cloudy": "Облачно с прояснениями" as string,
        "overcast": "Пасмурно" as string,
        "drizzle": "Морось" as string,
        "light-rain": "Небольшой дождь" as string,
        "rain": "Дождь" as string,
        "moderate-rain": "Умеренно сильный дождь" as string,
        "heavy-rain": "Сильный дождь" as string,
        "continuous-heavy-rain": "Длительный сильный дождь" as string,
        "showers": "Ливень" as string,
        "wet-snow": "Дождь со снегом" as string,
        "light-snow": "Небольшой снег" as string,
        "snow": "Снег" as string,
        "snow-showers": "Снегопад" as string,
        "hail": "Град" as string,
        "thunderstorm": "Гроза" as string,
        "thunderstorm-with-rain": "Дождь с грозой" as string,
        "thunderstorm-with-hail": "Гроза с градом" as string,
    }

    return (
        <a className={s.root} href={"https://yandex.ru/pogoda/chelyabinsk?utm_medium=web&utm_source=home&utm_campaign=informer&utm_content=main_informer&lat=55.159897&lon=61.402554"} target={"_blank"}>
            <div className={s.info}>
                <img src={`/assets/weatherIcons/${weatherData.icon}.svg`} alt={weatherData.icon} />
                <span>{weatherData.temp}&deg;</span>
                <span>{condTranslation[weatherData.condition as keyof typeof condTranslation]}</span>
            </div>
        </a>
    );
}

export default Weather;
