import {
  API_CREATE_EMPLOYEE,
  API_READ_ALL_EMPLOYEE,
  API_UPDATE_EMPLOYEE,
  API_DELETE_EMPLOYEE,
} from '@/lib/config/constants/routes/routes'
import { supabase } from '../utilities/providers/backend/supabase'
import {
  ListenQueryParam,
  ListenQueryWithEqualFilterParam,
} from '../components/query/query.type'
import { showError, showPromise } from '../config/message/message.config'

interface ServiceReturnInterface {
  method: string
  route: string
  body?: object
  response?: object
}
interface ServiceProps {
  method?: string
  data: object
  route: string
}
export const appFetch = ({ method, data, route }: ServiceProps) => {
  showPromise({
    promise: fetch(route, {
      method: method,
      body: JSON.stringify(data),
    }),
  })
}
export const ListenToData = async ({
  setData,
  setPayload,
  database,
  range,
  isAscending = false,
  orderBy,
}: ListenQueryParam) => {
  let { data, error } = await supabase
    .from(database)
    .select('*')
    .range(range.start, range.limit)

    .order(orderBy ? orderBy : 'id', { ascending: isAscending })
  if (data) {
    setData(data)
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: database },
        async payload => {
          setPayload(payload)
          let { data, error } = await supabase
            .from(database)
            .select('*')
            .range(range.start, range.limit)
            .order(orderBy ? orderBy : 'id', { ascending: isAscending })
          if (data) {
            setData(data)
          } else {
            showError({ message: `${error?.message.toString}` })
          }
        },
      )
      .subscribe()
  } else {
    showError({ message: `${error?.message.toString}` })
  }
}
export const ListenToDataWithEqualFilter = async ({
  setData,
  setPayload,
  database,
  range,
  filter,
  isAscending = false,
  orderBy,
}: ListenQueryWithEqualFilterParam) => {
  let { data, error } = await supabase
    .from(database)
    .select('*')
    .range(range.start, range.limit)
    .eq(filter.column, filter.value)
    .order(orderBy ? orderBy : 'id', { ascending: isAscending })
  if (data) {
    setData(data)
    supabase
      .channel('custom-all-channel')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: database },
        async payload => {
          console.log('Change received!', payload)
          setPayload(payload)
          let { data, error } = await supabase
            .from(database)
            .select('*')
            .range(range.start, range.limit)
            .order(orderBy ? orderBy : 'id', { ascending: isAscending })
          if (data) {
            setData(data)
          } else {
            showError({ message: `${error?.message.toString}` })
          }
        },
      )
      .subscribe()
  } else {
    showError({ message: `${error?.message.toString}` })
  }
}
