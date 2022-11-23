import { MockedProvider } from '@apollo/client/testing'
import { render, screen } from '@testing-library/react'
import { getNearestDrivers } from '../queries'
import NearestDrivers from '../components/drivers/nearestDrivers'

const mocks = [
  {
    request: {
      query: getNearestDrivers,
      variables: { lat: 50.11201, lon: 8.68305 }
    },
    result: {
      data: {
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
      }
    }
  }
]

it('should fetch and render', async () => {
  const locationInfo = {
    Latitude: 50.11201,
    Longitude: 8.68305
  }

  await new Promise(process.nextTick)
  const { findByText, getByTestId } = render(
    <MockedProvider mocks={mocks}>
      <NearestDrivers locationInfo={locationInfo} />
    </MockedProvider>
  )
  screen.debug()
  expect(await findByText('Samir Franecki')).toBeInTheDocument()
  expect(await findByText('Ralph Jast')).toBeInTheDocument()

  // style component test
  const DriversWrapper = getByTestId('DriversWrapper')

  expect(DriversWrapper).toHaveStyle('margin: 32px auto 0')
})
