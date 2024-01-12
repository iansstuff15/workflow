import {
  API_CREATE_EMPLOYEE,
  API_READ_ALL_EMPLOYEE,
  API_UPDATE_EMPLOYEE,
  API_DELETE_EMPLOYEE,
} from '@/lib/config/constants/routes/routes'

interface serviceReturnInterface {
  method: string
  route: string
  body?: object
  response?: object
}
interface serviceProps {
  route: string
}
export const AppService = ({ route }: serviceProps) => {
  let method: string = ''
  let body: object = {}
  let response: object = {}

  let result: serviceReturnInterface = {
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
