//document.write("Hello World"); 
//not sure how to get this to execute after html content
function message(msg){
	document.getElementById('output').innerHTML = msg + " event"
}
//message("My message is 'Hi!'");
function displayDate(){
	document.getElementById("demo").innerHTML=Date();
}
function closeMe(){
	x=document.getElementById("demo2"); 
	x.style.display="none"; //changing style attribute directly
	//x.className="closed"; //changing the class
}
function openMe(){
	x=document.getElementById("demo2"); 
	x.style.display="block"; //changing style attribute directly
	//x.className="open"; //changing the class
}
function displayId(element) {
	console.log(element.id);
}
function showProperties(element){
	document.getElementById('message').innerHTML=element.alt; 
}