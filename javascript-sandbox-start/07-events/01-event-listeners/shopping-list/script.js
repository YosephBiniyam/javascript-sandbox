// not recommended to put the listener in the html file - inline

function onClear() {
	// alert('Clear Items')
	// allList = document.querySelector('#item-list')
	// allList.remove()
	// while (allList.firstChild) {
	// 	allList.removeChild(allList.firstChild)
	// }
	allList = document.querySelectorAll('li')
	allList.forEach((element) => {
		element.remove()
	})
}

const clearBtn = document.querySelector('#clear')

// JavaScript Event Listener
// clearBtn.onclick = function () {
// 	alert('Clear Items Better')
// }

// the 3rd way - most recommended way
// an add as many event listeners (events) as you want
// addEventListener()
// clearBtn.addEventListener('click', function () {
// 	alert('Clear Items Much more Better')
// })
// clearBtn.addEventListener('click', function () {
// 	console.log('Clear Items Much more Better')
// })
// clearBtn.addEventListener('click', function () {
// 	console.log('Name is biniyam, yosef biniyam')
// })

// can use named functions with addEventListener - dont add the parentesis ()
clearBtn.addEventListener('click', onClear)

// removeEventListener
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000)

// set our events programmatically
// example below will click itself after 5 seconds
// setTimeout(() => clearBtn.click(), 5000)
