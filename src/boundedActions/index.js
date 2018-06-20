import { 
  SETTING_ORDER, 
  SETTING_TOGGLE_VISIBILITY, 
  RECEIVE_CONJUGATIONS, 
  RECEIVE_URL,
  ADD_RECENT_VERB,
  RECEIVE_CONJUGATIONS_URL_AND_RECENT_VERB,
  CARD_TOGGLE_VIEW_STATE
 } from './../reducers/actions';
import Store from './../store';

export const boundSettingOrder = ({ from, to }) => {
  Store.dispatch({
    type: SETTING_ORDER,
    from,
    to
  })
};

export const boundSettingToggleVisibility = (tense) => {
  Store.dispatch({
    type: SETTING_TOGGLE_VISIBILITY,
    tense
  })
}
export const boundCardToggleViewState = ({ at, view }) => {
  Store.dispatch({
    type: CARD_TOGGLE_VIEW_STATE,
    at,
    view,
  })
}

export const boundReceiveConjugations = ({conjugations}) => {
  Store.dispatch({
    type: RECEIVE_CONJUGATIONS,
    conjugations
  })
}

export const boundReceiveURL = (url) => {
  Store.dispatch({
    type: RECEIVE_URL,
    url
  })
}

export const boundAddRecentVerb = verb => {
  Store.dispatch({
    type: ADD_RECENT_VERB,
    verb
  })
}

export const boundReceiveConjugationsUrlAndRecentVerb = (
  { conjugations, url, verb }
) => {
  Store.dispatch({
    type: RECEIVE_CONJUGATIONS_URL_AND_RECENT_VERB,
    conjugations,
    url,
    verb
  })
}