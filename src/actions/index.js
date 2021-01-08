const setHeaderVisibility = (status) => {
	return {type: 'headerVisibility', payload: status }
}
const colorChange = (key, value) => {
	return {type: 'colorChange', payload: {key, value}}
}

export {
	setHeaderVisibility,
	colorChange
}