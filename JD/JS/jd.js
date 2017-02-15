window.onload=function(){
		var aLi = document.querySelectorAll('ul>li');
		var oUl = document.querySelector('ul');
		var oContainer = document.querySelector('.hot');
		var doc = document.documentElement;
		var oDots = document.querySelector('ol');
		var aDot = oDots.querySelectorAll('ol>li');
		var bReady = true;

		var currentIndex = 1;
		var distance = 20;

		var left = -aLi[0].offsetWidth;

	
		oContainer.addEventListener('touchstart',function(ev){

			if( !bReady )  return;
			bReady = false;

			ev.preventDefault();

			oUl.style.transition = '';

			var startX = ev.targetTouches[0].clientX;
			var disX = ev.targetTouches[0].clientX - left;

			function fnMove(ev){
				var deltaX = ev.targetTouches[0].clientX - disX;

				left = deltaX;

				oUl.style.transform = `translateX(${left}px)`

			}

			document.addEventListener('touchmove',fnMove,false)
			document.addEventListener('touchend',fnEnd,false)

			function fnEnd(ev){
				document.removeEventListener('touchmove',fnMove,false)

				document.removeEventListener('touchend',fnEnd,false)

				var moveX = ev.changedTouches[0].clientX - startX;

				if( !(Math.abs(moveX) < distance) ){
					// move
					if( moveX < 0 ){
						currentIndex++;
					} else {
						currentIndex--
					}
				}

				moveToSlide();
			}

		},false)

		oUl.addEventListener('transitionend',function(){

			if( currentIndex == 0 ){
				currentIndex = 8;
			}

			if( currentIndex == 9 ){
				currentIndex = 1;
			}

			oUl.style.transition = "";
			left = -currentIndex*aLi[0].offsetWidth
			oUl.style.transform = `translate(${left}px)`

			setDotActive((currentIndex-1)%8);

			bReady = true;

		},false)

		function moveToSlide(){
			oUl.style.transition = '.3s';
			oUl.style.transform = `translate(${-currentIndex*aLi[0].offsetWidth}px)`
		}

		doc.style.fontSize = doc.clientWidth/414*100 + 'px';


		function setDotActive(index){
			var active = document.querySelector('.active');

			active.classList.remove('active');
			aDot[index].classList.add('active');
		}
}