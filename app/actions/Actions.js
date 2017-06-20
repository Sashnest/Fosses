import history from "../utils/history.js";

export function changeTab(tab){
  return {
  	type: "selectNav/switch_tab",
  	payload: {
  		tab: tab
  	}
  }
}
export function pradaShowCloseNew(val){
  return {
  	type: 'prada/ContentNewPrada',
  	payload: {
  		newPrada: val
  	}
  }
}
export function pradaShowCloseBest(val){
  return {
  	type: 'prada/ContentBestPrada',
  	payload: {
  		bestPrada: val
  	}
  }
}
export function pinkShowCloseNew(val){
  return {
  	type: 'pink/ContentNewPink',
  	payload: {
  		newPink: val
  	}
  }
}
export function pinkShowCloseBest(val){
  return {
  	type: 'pink/ContentBestPink',
  	payload: {
  		bestPink: val
  	}
  }
}
export function mellowShowCloseNew(val){
  return {
  	type: 'mellow/ContentNewMellow',
  	payload: {
  		newMellow: val
  	}
  }
}
export function mellowShowCloseBest(val){
  return {
  	type: 'mellow/ContentBestMellow',
  	payload: {
  		bestMellow: val
  	}
  }
}
export function fieldShowCloseNew(val){
  return {
  	type: 'field/ContentNewField',
  	payload: {
  		newField: val
  	}
  }
}
export function fieldShowCloseBest(val){
  return {
  	type: 'field/ContentBestField',
  	payload: {
  		bestField: val
  	}
  }
}
export function casadieShowCloseNew(val){
  return {
  	type: 'casadie/ContentNewCasadie',
  	payload: {
  		newCasadie: val
  	}
  }
}
export function casadieShowCloseBest(val){
  return {
  	type: 'casadie/ContentBestCasadie',
  	payload: {
  		bestCasadie: val
  	}
  }
}
