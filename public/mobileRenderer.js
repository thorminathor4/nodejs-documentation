mobileResponsiveLayout();
window.addEventListener('resize', mobileResponsiveLayout);
function mobileResponsiveLayout(){
    displaySize();
    if(isMobile()) setMobileLayout();
    else setRegularLayout();
}
function isMobile(){
    return ( window.innerWidth <= 900 );
}
function setMobileLayout(){
    getAllNavItems().forEach(element => {
        element.style.display = 'none';
    });
    document.getElementsByClassName('mobile-menu')[0].style.display = 'inline-block';
}
function setRegularLayout(){
    getAllNavItems().forEach(element => {
        element.style.display = 'inline-block';
    });
    document.getElementsByClassName('mobile-menu')[0].style.display = 'none';
}
function displaySize(){
    document.getElementById('width').innerText = window.innerWidth;
    document.getElementById('height').innerText = window.innerHeight;
}
function getAllNavItems(){
    return [
        ...document.getElementsByClassName('dropdown-menu'),
        ...document.getElementsByClassName('menu-item')
    ];
}