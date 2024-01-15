import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
dayjs.extend(relativeTime)
export const dateTemplate: string = 'dddd, MMM DD, YYYY'
export const timeTemplate: string = 'hh:MM:ss a'
export const formatDate = (date: string): string => {
  return dayjs(date).format(dateTemplate)
}

export const formatTime = (time: string): string => {
  return dayjs(time).format(timeTemplate)
}

export const transformToRelativeDate = (date: string): string => {
  return dayjs(date).fromNow()
}
