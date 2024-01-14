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
import { showError } from '../config/message/message.config'

interface ServiceReturnInterface {
  method: string
  route: string
  body?: object
  response?: object
}
interface ServiceProps {
  route: string
}
export const AppService = ({ route }: ServiceProps) => {
  let method: string = ''
  let body: object = {}
  let response: object = {}

  let result: ServiceReturnInterface = {
    method: '',
    route: '',
    body: {},
    response: {},
  }
  switch (route) {
    case API_READ_ALL_EMPLOYEE:
      method = 'GET'
      break
    case API_CREATE_EMPLOYEE:
    case API_UPDATE_EMPLOYEE:
    case API_DELETE_EMPLOYEE:
      method = 'POST'
      break
  }

  result.method = method
  result.route = route
  result.body = body
  result.response = response

  return result
}
export const ListenToData = async ({
  setData,
  setPayload,
  database,
  range,
}: ListenQueryParam) => {
  let { data, error } = await supabase
    .from(database)
    .select('*')
    .range(range.start, range.limit)
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
}: ListenQueryWithEqualFilterParam) => {
  let { data, error } = await supabase
    .from(database)
    .select('*')
    .range(range.start, range.limit)
    .eq(filter.column, filter.value)
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
