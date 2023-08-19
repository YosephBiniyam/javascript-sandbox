const text = document.querySelector('p')
const itemList = document.querySelector('.item-list')
const items = itemList.querySelectorAll('li')

function run() {
	// className
	// console.log(itemList.className)
	// text.className = 'card dark' // will replace the existing class names - be sure to add the existing class names here
	//classList - better way - DOMTokenList - array of class names
	// itemList.classList.forEach((c) => console.log(c)
	// text.classList.add('dark') // no need to add the existing class names here, since it have a method to add to it. wont replace existing class names
	// text.classList.remove('card') // have methods to do stuff on it. in this case remove
	text.classList.toggle('dark')
	// text.classList.toggle('hidden')
	// text.classList.replace('card', 'dark')

	// Change style
	// itemList.style.lineHeight = '3'

	items.forEach((item, index) => {
		item.style.color = 'red'

		if (index === 2) {
			item.style.color = 'blue'
		}
	})
}

document.querySelector('button').onclick = run
