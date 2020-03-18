import * as types from './actionTypes'
import axios from 'axios';
import { bindActionCreators, Dispatch} from 'redux'

function url() {
  return 'https://ctsgreetingsbeta.cerner.com:9086/api/associates/detailsWithImageStatusfuture'
}

export function receiveActiveOrganization(data) {
  return { type: types.RECEIVE_USER, userList: data }
}

export function fetchActiveOrganization() {
  return dispatch => {
    return axios
      .get(url())
      .then(response => response.data)
      .then(data => dispatch(receiveActiveOrganization(data)))
  }
}
