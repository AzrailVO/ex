//= phoneJS.js
//= navbar.js
//DOM
const sec2 = document.querySelector('.sec-sec2-row')
const [...sec2Sq] = document.querySelectorAll('.sec-sec2-square')
const more = document.getElementById('more')
//Variables & Arrays
let sec2Count = -1
let inter = 3
let sec2SqTextes = [
	'Gymnastics',
	'Crossfit',
	'Aerobics',
	'Science',
	'Nature',
	'Quarry'
]
let colors = ['#863806', '#5cf8cc', '#544038', '#42ba0f', '#a0c394', '#24817a']
let color = null
//Code

async function morebtn(){
	const response = await fetch('http://localhost:3010/rand')
	console.log('response')
	if (response.ok) {
		let json = await response.json()
		console.log(json)
	} else {
		console.log(response.status)
	}
}
morebtn()
more.onclick = () =>{
	if (sec2Count < sec2SqTextes.length - 3) {
			for (var i = 0; i < inter; i++) {
				sec2Count++
				let crEl = document.createElement('div')
				crEl.innerHTML = `
					<div class="col-lg-4 sec-sec2-square">
						<div class="sec-sec2-square-napol col-10">
							<div class="sec-sec2-square-point"></div>
							<div class="sec-sec2-square-title">${sec2SqTextes[sec2Count]}</div>
						</div>
					</div>
				`
				crEl.style.background = `${colors[sec2Count]}`
				crEl.insertAdjacentElement(`beforeend`, crEl)

			}
		}else {
			more.style.display = 'none'
		}
}
