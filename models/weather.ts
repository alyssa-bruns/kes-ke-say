export interface WeatherModel {
  queryCost: number
  latitude: number
  longitude: number
  resolvedAddress: string
  address: string
  timezone: string
  tzoffset: number
  description: string
  days: CurrentConditions[]
  alerts: Alert[]
  stations: { [key: string]: Station }
  currentConditions: CurrentConditions
}

export interface Alert {
  event: string
  headline: string
  ends: Date
  endsEpoch: number
  onset: Date
  onsetEpoch: number
  id: string
  language: string
  link: string
  description: string
}

export interface CurrentConditions {
  datetime: string
  datetimeEpoch: number
  temp: number
  feelslike: number
  humidity: number
  dew: number
  precip: number
  precipprob: number
  snow: number
  snowdepth: number
  preciptype: Icon[] | null
  windgust: number
  windspeed: number
  winddir: number
  pressure: number
  visibility: number
  cloudcover: number
  solarradiation: number
  solarenergy: number
  uvindex: number
  conditions: Conditions
  icon: Icon
  stations: string[] | null
  source: Source
  sunrise?: string
  sunriseEpoch?: number
  sunset?: string
  sunsetEpoch?: number
  moonphase?: number
  tempmax?: number
  tempmin?: number
  feelslikemax?: number
  feelslikemin?: number
  precipcover?: number
  severerisk?: number
  description?: string
  hours?: CurrentConditions[]
}

export enum Conditions {
  Clear = 'Clear',
  Overcast = 'Overcast',
  PartiallyCloudy = 'Partially cloudy',
  Rain = 'Rain',
  RainOvercast = 'Rain, Overcast',
  RainPartiallyCloudy = 'Rain, Partially cloudy',
}

export enum Icon {
  ClearDay = 'clear-day',
  ClearNight = 'clear-night',
  Cloudy = 'cloudy',
  PartlyCloudyDay = 'partly-cloudy-day',
  PartlyCloudyNight = 'partly-cloudy-night',
  Rain = 'rain',
}

export enum Source {
  Comb = 'comb',
  Fcst = 'fcst',
  Obs = 'obs',
}

export interface Station {
  distance: number
  latitude: number
  longitude: number
  useCount: number
  id: string
  name: string
  quality: number
  contribution: number
}
