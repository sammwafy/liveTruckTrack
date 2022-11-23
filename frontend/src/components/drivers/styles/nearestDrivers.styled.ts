import styled from 'styled-components'

export const DriversWrapper = styled.div`
  background-color: #fdfdfd;
  width: 448px;
  margin: 32px auto 0;
  padding: 16px 24px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border: 1px solid #ebebea;
  border-radius: 4px;
  .nearestTitle {
    padding: 16px 24px;
    border-bottom: 1px solid #ebebea;
    margin-bottom: 24px;
    width: 100%;
    display: flex;
    justify-content: space-between;

    h2 {
      margin-right: 12px;
    }
  }
  .driver {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    height: 50px;
    > div {
      display: flex;
      flex-direction: column;
      h3,
      p {
        margin: 0;
      }
      h3 {
        color: #0d0d0c;
      }
      p {
        color: #69665c;
      }
    }
  }
`

export interface TimeStyledProps {
  background: number
}

const colorHandler = (time: number): string => {
  switch (true) {
    case time > 10:
      return '#F8EAEC'
    case time > 5:
      return '#F9F0E7'
    case time > 2:
      return '#E8F0F7'
    default:
      return '#EAF2EE'
  }
}
const fontColorHandler = (time: number): string => {
  switch (true) {
    case time > 10:
      return '#BE2F40'
    case time > 5:
      return '#C76A14'
    case time > 2:
      return '#1E68B1'
    default:
      return '#2D7E58'
  }
}

export const TimeStyled = styled.span<TimeStyledProps>`
  border-radius: 80px;
  padding: 2px 8px;
  font-size: 12px;
  background: ${({ background }) => colorHandler(Math.trunc(background))};
  color: ${({ background }) => fontColorHandler(Math.trunc(background))};
`
