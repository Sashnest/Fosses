import history from "../utils/history.js";

export function changeTab(tab){
  return {
  	type: "selectNav/switch_tab",
  	payload: {
  		tab: tab
  	}
  }
}

export function showAllNew(val){
  return {
  	type: "showNew/NavTabsContentNew",
  	payload: {
  		newfoses: val
  	}
  }
}
export function CloseNew(val){
  return {
  	type: "closeNew/NavTabsContentNew",
  	payload: {
  		newfoses: val
  	}
  }
}
export function showBest(val){
  return {
  	type: "showBest/NavTabsContentBest",
  	payload: {
  		bestFoses: val
  	}
  }
}
export function CloseBest(val){
  return {
  	type: "closeBest/NavTabsContentBest",
  	payload: {
  		bestFoses: val
  	}
  }
}
