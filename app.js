window.addEventListener('load', function(){
    let extra = document.getElementById('extra')
    let shareOptions = document.getElementById('active-share')
    let main = document.getElementById('main-info')
    let shareButton1 = document.getElementById('icon-share')
    let shareButton2 = document.getElementById('icon-share2')
    let popUp = document.getElementById('social-media-container-desktop')
    
    
    var count = 0;
    if (window.innerWidth < '800px') {
        
        shareButton1.addEventListener('click', function(){
            console.log(window.innerWidth < '800px')
            console.log(window.innerWidth > '800px')
            extra.style.display = 'none'
            shareOptions.style.display = 'flex'
            main.style.paddingBottom = '0'
        })
    
        shareButton2.addEventListener('click', function(){
            extra.style.display = 'flex'
            shareOptions.style.display = 'none'
            main.style.paddingBottom = '20px'
        })
    }else{
    
        shareButton1.addEventListener('click', function(){
            if(count%2 == 0){
                
                count++
                popUp.style.display = 'flex'
            }else{
                
                count++
                popUp.style.display = 'none'
            }
            
        })      
    }
})