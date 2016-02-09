/**
 * Created by epotignano on 09/02/16.
 */


import { UPDATE_PROFILE } from '../constants/ActionTypes';


export function UpdateProfile(data) {
  return {
    type: UPDATE_PROFILE,
    data
  }
}
