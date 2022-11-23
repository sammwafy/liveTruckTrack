import { convertDistance, getDistance } from 'geolib'

import drivers = require('./data.json')
export interface currentLocation {
  lat: number
  lon: number
}
export interface driver {
  id: number
  name: String
  currentLocation: currentLocation
  averageSpeedKmPerHour: number
  telephone: String
}

export interface driverList {
  driver: object
  time: number
}
export const resolvers = {
  Query: {
    getNearestDrivers: (_: any, location: any) => {
      const driversList: driverList[] = drivers.map((driver: driver) => ({
        driver: driver,
        time:
          convertDistance(
            getDistance(
              { latitude: location.lat, longitude: location.lon },
              {
                latitude: driver.currentLocation.lat,
                longitude: driver.currentLocation.lon
              }
            ),
            'km'
          ) / driver.averageSpeedKmPerHour
      }))
      const sortedDriverList = driversList.sort(function (a: driverList, b: driverList) {
        return a.time - b.time
      })

      return sortedDriverList.slice(0, 5)
    },
    getAllDrivers: () => drivers
  }
}
