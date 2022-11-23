
export const typeDefs = `
  type Query {
    getNearestDrivers (lon: Float!, lat: Float!) : [nearestDrivers]
    getAllDrivers : [driver]
  }
  type nearestDrivers {
    driver: driver
    time: Float
  }

  type driver {
    id: Int
    name: String
    currentLocation: currentLocationType
    averageSpeedKmPerHour: String
    telephone: String
  } 

  type currentLocationType {
    lat: Float,
    lon: Float,
  }
`
