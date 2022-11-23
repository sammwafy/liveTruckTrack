import { gql } from '@apollo/client'

export const getNearestDrivers = gql`
  query nearestDrivers($lat: Float!, $lon: Float!) {
    getNearestDrivers(lat: $lat, lon: $lon) {
      driver {
        id
        name
        telephone
        averageSpeedKmPerHour
      }
      time
    }
  }
`
export const getAllDrivers = gql`
  query allDrivers {
    getAllDrivers {
      id
      name
      telephone
      currentLocation {
        lat
        lon
      }
      averageSpeedKmPerHour
    }
  }
`
