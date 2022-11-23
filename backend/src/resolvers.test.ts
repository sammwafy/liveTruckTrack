import { resolvers } from './resolvers'
import { typeDefs } from './typeDefs'
import { createTestClient } from 'apollo-server-testing'
import { ApolloServer, gql } from 'apollo-server'

const server: any = new ApolloServer({
  typeDefs,
  resolvers
})

// mock against object
describe('getAllDrivers', () => {
  it('should return all drivers!', () => {
    const allDrivers = resolvers.Query.getAllDrivers()
    expect(allDrivers).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: 'Jovan Sanford',
          telephone: '+1352276045072'
        })
      ])
    )
  })
})

// mock against object and pass variable
describe('getNearestDrivers', () => {
  it('should return the nearest drivers!', async () => {
    const { query } = createTestClient(server)
    const { data } = await query({
      query: gql`
        {
          getNearestDrivers(lat: 50.11201, lon: 8.68305) {
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
    })
    expect(data).toMatchInlineSnapshot(`
Object {
  "getNearestDrivers": Array [
    Object {
      "driver": Object {
        "averageSpeedKmPerHour": "70.3478776685207",
        "id": 499,
        "name": "Samir Franecki",
        "telephone": "+1747165513420",
      },
      "time": 0.840181707805072,
    },
    Object {
      "driver": Object {
        "averageSpeedKmPerHour": "69.68871717718592",
        "id": 219,
        "name": "Ralph Jast",
        "telephone": "+4373654397315",
      },
      "time": 0.9007196938409004,
    },
    Object {
      "driver": Object {
        "averageSpeedKmPerHour": "86.82371052323089",
        "id": 354,
        "name": "Verna Conroy",
        "telephone": "+0456230071079",
      },
      "time": 1.3725628550292626,
    },
    Object {
      "driver": Object {
        "averageSpeedKmPerHour": "65.82616143250837",
        "id": 124,
        "name": "Telly Smith",
        "telephone": "+3454941343541",
      },
      "time": 1.5042347578101338,
    },
    Object {
      "driver": Object {
        "averageSpeedKmPerHour": "80.2437259525712",
        "id": 67,
        "name": "Sim Gleason",
        "telephone": "+9033213030788",
      },
      "time": 1.538562654393344,
    },
  ],
}
`)
    expect(data).toEqual({
      getNearestDrivers: [
        {
          driver: {
            id: 499,
            name: 'Samir Franecki',
            telephone: '+1747165513420',
            averageSpeedKmPerHour: '70.3478776685207'
          },
          time: 0.840181707805072
        },
        {
          driver: {
            id: 219,
            name: 'Ralph Jast',
            telephone: '+4373654397315',
            averageSpeedKmPerHour: '69.68871717718592'
          },
          time: 0.9007196938409004
        },
        {
          driver: {
            id: 354,
            name: 'Verna Conroy',
            telephone: '+0456230071079',
            averageSpeedKmPerHour: '86.82371052323089'
          },
          time: 1.3725628550292626
        },
        {
          driver: {
            id: 124,
            name: 'Telly Smith',
            telephone: '+3454941343541',
            averageSpeedKmPerHour: '65.82616143250837'
          },
          time: 1.5042347578101338
        },
        {
          driver: {
            id: 67,
            name: 'Sim Gleason',
            telephone: '+9033213030788',
            averageSpeedKmPerHour: '80.2437259525712'
          },
          time: 1.538562654393344
        }
      ]
    })
  })
})
