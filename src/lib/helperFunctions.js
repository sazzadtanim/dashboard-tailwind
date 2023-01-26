function findTotal(dataList) {
	return dataList.reduce((accumulator, currentValue) => accumulator + currentValue.amount, 0)
}

export function addPercentageToDataList(dataList) {
	const totalAmount = findTotal(dataList)
	return dataList.map(item => ({
		...item,
		percentage: (item.amount / totalAmount) * 100,
	}))
}
