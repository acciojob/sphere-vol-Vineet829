function volume_sphere(){
     let temp = document.getElementById('radius').value
     if(parseInt(temp) < 0 || typeof temp === "string"){
		 temp = NaN
	 }
	else{temp = (4/3) * Math.PI * Math.pow(parseInt(temp), 3)}  
     document.getElementById('volume').value = temp
    
   
	

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
