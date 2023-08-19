// querySelectorAll()

const listItems = document.querySelectorAll('.item')
console.log(listItems[1].innerText)

// listItems[1].style.color = 'red'

// listItems.forEach((item, index) => {
// 	item.style.color = 'red'

// 	if (index === 1) {
// 		item.remove()
// 	}

// 	if (index === 0) {
// 		// item.innerHTML = `Oranges` // will remove every child of the item
// 		// so use this instead
// 		item.innerHTML = `
// 		    Oranges
// 		    <button class="remove-item btn-link text-red">
// 		        <i class="fa-solid fa-xmark"></i>
// 		    </button>
// 		`
// 	}
// })

// But using the old way
const listItems2 = document.getElementsByClassName('item')
console.log(listItems2[2].innerText)

const listItemsArray = Array.from(listItems2) // Convert to an array

listItemsArray.forEach((item) => {
	// Then use array methods
	console.log(item.innerText)
})

const listItems3 = document.getElementsByTagName('li')
console.log(listItems3[0].innerText)
