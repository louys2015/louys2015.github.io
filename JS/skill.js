window.onload=function(){


	var oMenu=document.querySelector('.menu');
	var oClose=document.querySelector('.close');
	var oNavBox=document.querySelector('.nav_box');
	var oOverLay=document.querySelector('.overlay');
	
	var oSection=document.querySelector('section');
	var oLeftImage=document.querySelector('.left > img');
	
	
	oMenu.onclick=function(){
		oNavBox.style.zIndex=`89`;
		oNavBox.style.transition=`0.6s`;
		oNavBox.style.transform=`translate(266px)`;
		oClose.style.display='block';
		oClose.style.zIndex=`89`;
		oClose.style.transition=`0.6s`;
		oClose.style.transform=`translate(266px)`;		
		oSection.classList.add('active');
	}
	
	oClose.onclick=function(){
		oNavBox.style.transition=`1s`;
		oNavBox.style.transform=`translate(-266px)`;
		oClose.style.transition=`1s`;
		oClose.style.transform=`translate(-266px)`;
		oMenu.style.display='block';
		oSection.classList.remove('active');
	}
	


	
	var aP=document.querySelectorAll('p');
	
	aP.forEach(function(oP,index){
		oP.style.transition=`0.8s ${index*0.8}s`;
		oP.style.transform=`translate(-750px)`;
	});
}