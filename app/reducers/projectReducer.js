const initialState = {
  newfoses:'closeNew',
  bestFoses:'closeBest'
}

const Reduser = (state = initialState, action) => {
	switch(action.type){
		case 'showNew/NavTabsContentNew':
		return Object.assign({}, state, {
			newfoses: action.payload.newfoses
		})
    case "closeNew/NavTabsContentNew":
		return Object.assign({}, state, {
			newfoses: action.payload.newfoses
		})
    case "showBest/NavTabsContentBest":
		return Object.assign({}, state, {
			bestFoses: action.payload.bestFoses
		})
    case "closeBest/NavTabsContentBest":
		return Object.assign({}, state, {
			bestFoses: action.payload.bestFoses
		})
  }
	return state;
}
export default Reduser;
