import { useQuery } from '@apollo/client'
import React from 'react'
import { getNearestDrivers } from '../../queries'
import { formatTime } from '../../utils/formatTime'
import { DriversWrapper, TimeStyled } from './styles/nearestDrivers.styled'

export interface keyable {
  [key: string]: any
}

export interface info {
  id: number
  name: string
  telephone: string
}

export interface driver {
  driver: info
  time: number
}

interface GetNearestDrivers {
  getNearestDrivers: driver[]
}

const NearestDrivers: React.FC<keyable> = ({ locationInfo }) => {
  const { loading, error, data } = useQuery<GetNearestDrivers>(getNearestDrivers, {
    variables: { lat: locationInfo.Latitude, lon: locationInfo.Longitude }
  })

  const drivers = data?.getNearestDrivers ?? []

  if (error != null) {
    return (
      <div
        style={{
          margin: '50px auto',
          display: 'block',
          width: 'fit-content',
          color: '#BE2F40'
        }}
      >
        OOPS ... Error while fetching drivers data, please try again !
      </div>
    )
  }

  return loading ? (
    <div
      style={{ margin: '50px auto', display: 'block', width: 'fit-content' }}
    >
      loading ...
    </div>
  ) : (
    <DriversWrapper data-testid='DriversWrapper'>
      <div className='nearestTitle'>
        <h1>Top matching drivers</h1>
        <h2>ETA</h2>
      </div>
      {drivers.map((driver) => {
        return (
          <div className='driver' key={driver.driver.id}>
            <div>
              <h3>{driver.driver.name}</h3>
              <p>{driver.driver.telephone}</p>
            </div>
            <TimeStyled background={driver.time}>
              {formatTime(driver.time)}
            </TimeStyled>
          </div>
        )
      })}
    </DriversWrapper>
  )
}
export default NearestDrivers
