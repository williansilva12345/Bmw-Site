	
	
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
		
		
		
		
		
	let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    const offset = -currentSlide * 100; // Move the slides
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Change slide function
function changeSlide(direction) {
    showSlide(currentSlide + direction);
}

// Auto slide (opcional)
setInterval(() => {
    changeSlide(1);
}, 3000); // Muda a cada 3 segundos