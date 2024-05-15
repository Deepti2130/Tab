const cl = console.log;

const alllis =[...document.querySelectorAll(".tabheading li")]
const alltabcontent = [...document.querySelectorAll(".tabcontent")]



const ontabHeadchange = (event) => {
	//alllis.forEach(li => li.classList.remove("active"))
	document.querySelector(".tabheading li.active").classList.remove("active");
	event.target.classList.add("active")
	
	let getid = event.target.getAttribute("Data-id");
	cl(getid);
	
	//alltabcontent.forEach(tab => tab.classList.remove("active"))
	document.querySelector(".tabcontent.active").classList.remove("active");
	document.getElementById(getid).classList.add("active")
	
}
	

alllis.forEach(li => {
	li .addEventListener ("click", ontabHeadchange)
})