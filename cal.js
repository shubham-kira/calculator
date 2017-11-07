var p=false;
function display(n1){
	if(p==true){
		newdisplay();
		p=false;
	}
	calc.txt1.value=calc.txt1.value+n1;
}
function newdisplay(){
	calc.txt1.value=' ';
}
document.onkeydown=function(event){
	var keyp=String.fromCharCode(event.keyCode);
	var keyc=event.keyCode;
	if(keyc==61){
		var x=eval(calc.txt1.value);
		calc.txt1.value=x;
		p=true;
	}
	else{
		if(p==true){
			newdisplay();
			p=false;
		}
		else{
			document.getElementById('txt1').innerhtml=keyp
		}
	}
}
function backs(){
	calc.txt1.value=calc.txt1.value.slice(0,calc.txt1.value.length-1);
}
function evaluation(){
	var x=eval(calc.txt1.value);
	if(x!="Infinity")
			calc.txt1.value=eval(calc.txt1.value);
	else
		calc.txt1.value="Error";
	p=true;
}