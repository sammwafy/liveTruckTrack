export const formatTime = (time: number): string => {
  const hours = Math.floor(time)
  const minutes = time % 1

  const formatedTime = `${hours}h ${Math.ceil(minutes * 60)}m`
  return formatedTime
}
