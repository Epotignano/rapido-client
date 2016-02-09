import {TITLE_CHANGED, CALL_EMILIANO} from '../constants/ActionTypes';

export function changeTitle(text) {
  return {
    type: TITLE_CHANGED,
    text
  }
}

export function callEmiliano() {
  return {
    type: CALL_EMILIANO,
    text: 'Emiliano was here'
  }
}


