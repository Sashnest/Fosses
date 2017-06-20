const initialState = {
  tab:'pink',
  newPrada:'closeNewPrada',
  bestPrada:'closeBestPrada',
  newPink:'closeNewPink',
  bestPink:'closeBestPink',
  newMellow:'closeNewMellow',
  bestMellow:'closeBestMellow',
  newField:'closeNewField',
  bestField:'closeBestField',
  newCasadie:'closeNewCasadie',
  bestCasadie:'closeBestCasadie',
}

const Reduser = (state = initialState, action) => {
	switch(action.type){
    case 'prada/ContentNewPrada':
		return Object.assign({}, state, {
			newPrada: action.payload.newPrada
		})
    case 'prada/ContentBestPrada':
		return Object.assign({}, state, {
			bestPrada: action.payload.bestPrada
		})
    case 'pink/ContentNewPink':
		return Object.assign({}, state, {
			newPink: action.payload.newPink
		})
    case 'pink/ContentBestPink':
		return Object.assign({}, state, {
			bestPink: action.payload.bestPink
		})
    case 'mellow/ContentNewMellow':
		return Object.assign({}, state, {
			newMellow: action.payload.newMellow
		})
    case 'mellow/ContentBestMellow':
		return Object.assign({}, state, {
			bestMellow: action.payload.bestMellow
		})
    case 'field/ContentNewField':
		return Object.assign({}, state, {
			newField: action.payload.newField
		})
    case 'field/ContentBestField':
		return Object.assign({}, state, {
			bestField: action.payload.bestField
		})
    case 'casadie/ContentNewCasadie':
		return Object.assign({}, state, {
			newCasadie: action.payload.newCasadie
		})
    case 'casadie/ContentBestCasadie':
		return Object.assign({}, state, {
			bestCasadie: action.payload.bestCasadie
		})
    case "selectNav/switch_tab":
		return Object.assign({}, state, {
			tab: action.payload.tab
		})
  }
	return state;
}
export default Reduser;
