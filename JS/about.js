<!--about-->
window.onload=function(){
	
	
	var oMenu=document.querySelector('.menu');
	var oClose=document.querySelector('.close');
	var oNavBox=document.querySelector('.nav_box');	
	var oSection=document.querySelector('section');
	var oLeftImage=document.querySelector('.left > img');
	
	
	oMenu.onclick=function(){
		oNavBox.style.zIndex=`89`;
		oNavBox.style.transition=`1s`;
		oNavBox.style.transform=`translate(266px)`;
		oClose.style.display='block';
		oClose.style.zIndex=`89`;
		oClose.style.transition=`1s`;
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
	
	

	var oUl=document.querySelector('.container > ul');
	var oOl=document.querySelector('.container > ol');	
	var aLi=document.querySelectorAll('.container > ul > li');
	var aBtn=document.querySelectorAll('.container > ol > li');
	var oPrev=document.querySelector('.prev');
	var oNext=document.querySelector('.next');
	
	var n=0;
	
	
	
	function Tab(bbb){
		for(var i=0;i<aBtn.length;i++){
			aBtn[i].className='';
		}
		aBtn[bbb].className='show1';
		oUl.style.transform=`translate(${bbb*-880}px)`;
	}
	
	for(var i=0;i<aBtn.length;i++){
		aBtn[i].index=i;
		aBtn[i].onmouseover=function(){
			Tab(this.index);
		}
	}
	
	function next(){
		n++;
		
		if(n>=4)n=0;
		
		Tab(n);
	}
	
	oNext.onclick=next;
	
	oPrev.onclick=function(){
		n--;
		
		if(n<0)n=aBtn.length-1;
		
		Tab(n);
	}
}