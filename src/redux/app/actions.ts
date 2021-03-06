import { TOGGLE_DARK_MODE, AppActions, TOGGLE_TOOLTAB_COLLAPSE, SET_WORKSPACE, GENERATE_NEW_ID } from './app.d';

export const toggleDarkMode = ( ) => {
  return {
    type: TOGGLE_DARK_MODE
  } as AppActions
}
export const toggleTooltabCollapse = ( ) => {
  return {
    type: TOGGLE_TOOLTAB_COLLAPSE,
  } as AppActions
}
export const setWorkspace = ( workspace: string ) => {
  return {
    type: SET_WORKSPACE,
    workspace
  } as AppActions
}

export const generateNewId = () => {
  return {
    type: GENERATE_NEW_ID,
  } as AppActions
}

