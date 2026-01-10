const images = ()=>{
    const imgElements = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');

    imgElements.classList.add('popup');

    workSection.appendChild(imgElements);

    imgElements.style.justifyContent = 'center';
    imgElements.style.alignItems = 'center';
    imgElements.style.display = 'none';

    imgElements.appendChild(bigImage);

    workSection.addEventListener('click',(e)=>{
        e.preventDefault();
        let target = e.target;

        if(target && target.classList.contains('preview')){
            imgElements.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
        }

        if(target && target.matches('div.popup')){
            imgElements.style.display = 'none';
        }
    })




}
export default images ;