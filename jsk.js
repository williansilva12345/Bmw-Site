	
	
		const data = document.querySelectorAll('[data-anima]');
		
		const animacao = "animacao"
		
		function animaScroll(){
			
			var topo= window.pageYOffset+350;
			
			data.forEach((ele)=>{
				
				if(topo > ele.offsetTop) {
					ele.classList.add(animacao)
				}else{
					ele.classList.remove(animacao)
				}
					
			})
			
			
		}
		
		if(data.length){
			
			window.addEventListener("scroll",()=>{
				animaScroll()
			})
			
		}
		
	