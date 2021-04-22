alert('Please give your feedback!')
function post() {
if(window.confirm("Are you sure you want to submit?"))
{
	window.open("https://formspree.io/f/xzbyzdwj")
}
else {
	window.open("http://127.0.0.1:5500/");
}
}