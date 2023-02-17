import React, {useState,useEffect,ChangeEvent} from 'react'
import { forecastType, optionType } from '../../types'

function useForecast() {
    const [term, setTerm] = useState<string>('')
  const [options, setOptions] = useState<[]>([])
  const [city, setCity] = useState<optionType | null>(null)
  const [forecast, setForecast] = useState<forecastType | null>(null)
  const getSearchOptions = (value: string) => {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setOptions(data)
      })
  }
  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value);
    getSearchOptions(value)
  }
  const getForecast = (city: optionType) => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((res) => res.json())
      .then((data) => setForecast(data))

  }
  const onSubmit = () => {
    if (!city) return
    getForecast(city)
  }
  const onOptionSelect = (option: optionType) => {
    setCity(option)
  }

  useEffect(() => {
    if (city) {
      setTerm(city.name)
      setOptions([])
    }
  }, [city])
  return {
    term,
    options,
    forecast,
    onInputChange,
    onSubmit,
    onOptionSelect,
}
}

export default useForecast