const fetchApiData = async ({ dispatch }, params, actionGroup, resolve, reject) => {
	let actionList = actionGroup(params);
	let results = [];

	try {
		results = await Promise.all((actionList || []).map((caller, index) => {
			let data = caller.payload;
			console.log("caller", dispatch)
			return new Promise((resolve, reject) => {
				console.log("dispatch", caller['action']({ data, resolve, reject }))
				
				dispatch(caller['action']({ data, resolve, reject }))
			})
		}))
	}
	catch (error) {
		console.error('Error occured in fetching Apis ', error);
		reject(error)
	}
	return resolve(results);
}

export default fetchApiData;