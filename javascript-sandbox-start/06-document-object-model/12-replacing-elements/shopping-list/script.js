// using replaceWith()
function replaceFirstItem() {
	const firstItem = document.querySelector('li:first-child')

	const li = document.createElement('li')
	li.textContent = 'Replaced First'

	firstItem.replaceWith(li)
}

// using outerHTML
function replaceSecondItem() {
	const secondItem = document.querySelector('li:nth-child(2)')

	secondItem.outerHTML = '<li>Replace Second</li>'
}

// using forEach() loop - To replace all
function replaceAllItems() {
	const list = document.querySelectorAll('li')

	// list.forEach((item, index) => {
	// 	if (index === 1) {
	// 		item.innerHTML = 'Second Item'
	// 	} else {
	// 		// item.outerHTML = '<li>Replace All</li>'
	// 		item.innerHTML = 'Replace All'
	// 	}
	// })

	// Shorter Way
	list.forEach(
		(item, index) =>
			(item.outerHTML = index === 1 ? '<li>Second Item</li>' : '<li>Item</li>')
	)
}

// using replaceChild()
function replaceChildHeading() {
	const header = document.querySelector('header')
	const h1 = document.querySelector('header h1')

	const h2 = document.createElement('h2')
	h2.id = 'app-title'
	h2.textContent = 'Shopping List'

	header.replaceChild(h2, h1)
}

replaceFirstItem()
replaceSecondItem()
replaceAllItems()
replaceChildHeading()
