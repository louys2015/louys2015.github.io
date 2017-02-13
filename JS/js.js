window.onload=function(){
	var oMenu=document.querySelector('.menu');
	var oClose=document.querySelector('.close');
	var oNavBox=document.querySelector('.nav_box');
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
	
	
	
<!--	work-->
	var oContainer=document.querySelector('.container');
	var aSection=document.querySelectorAll('.container > section');
	var oPrev=document.querySelector('.prev');
	var oNext=document.querySelector('.next');
	var oDiv=document.getElementById('box1');
	var aSpan=document.querySelectorAll('#box1 > span');
	
	var count=0;
	var timer=null;
	
	function fnTab(aaa){
			for(var i=0;i<aSpan.length;i++){
				aSpan[i].className='';
				aSection[i].className='';
			}
			aSection[aaa].className='active';
			aSpan[aaa].className='show';
		}
		
		for(var i=0;i<aSpan.length;i++){
			aSpan[i].index=i;
			aSpan[i].onmouseover=function(){
				fnTab(this.index);
			}
		}
		
		function next(){
			count++;
			
			if(count>=3)count=0;

			fnTab(count);

		}
		//右
		oNext.onclick=next;
		//左
		oPrev.onclick=function(){
			count--;
			if(count<0)count=aSpan.length-1;
			fnTab(count);
		}
		
		
		
<!--demo-->
	var aDemoBox=document.querySelectorAll('.container > section > .demo_box');	
	var aDemo=document.querySelectorAll('.contentbox > .demo');
	var oDemoClose=document.querySelectorAll('.demo_close');
	
	for(var i=0;i<aDemoBox.length;i++){
		aDemoBox[i].index=i;
		aDemoBox[i].onclick=function(){
			aDemo[this.index].style.transform=`translate(-1040px)`;
			
			
			for(var i=0;i<oDemoClose.length;i++){
				oDemoClose[i].index=i;
				oDemoClose[i].onclick=function(){
					aDemo[this.index].style.transform=`translate(0)`;
				}
			}
			
		}
	}


}