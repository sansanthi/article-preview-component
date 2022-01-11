const shareBtn = document.querySelector('.share-btn');
const cardFooter = document.querySelector('.card-footer');
const footerContainer = document.querySelector('.container');

shareBtn.addEventListener('click', function(e){
    
    const mediaList = window.matchMedia('(min-width: 60em)');
    // console.log(mediaList)
    if(mediaList.matches){
        cardFooter.classList.toggle('share-desktop');
    }else {
        cardFooter.classList.toggle('share-mobile');
        if(cardFooter.classList.contains('share-mobile')){
            footerContainer.style.backgroundColor = 'hsl(217, 19%, 35%)';
        }else {
            footerContainer.style.backgroundColor = '#fff';
        }
    }
    
});