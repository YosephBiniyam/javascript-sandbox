keyClass = document.querySelectorAll('.key')

const keyIdentify = (e) => {
	// console.log(e.key)
	// console.log(e.keyCode)
	// console.log(e.code)

	keyClass.forEach((element, index) => {
		// console.log(element.innerHTML)
		if (index === 0) {
			element.innerHTML = `
                ${e.key}
                <small>e.key</small>
            `
		} else if (index === 1) {
			element.innerHTML = `
                ${e.keyCode}
                <small>e.keyCode</small>
            `
		} else if (index == 2) {
			element.innerHTML = `
                ${e.code}
                <small>event.code</small>
            `
		}
	})
}
// document.body.innerText

// key.forEach((element) => {
// 	console.log(element.innerHTML)
// })

// event listener on body
document.body.addEventListener('keypress', keyIdentify)
