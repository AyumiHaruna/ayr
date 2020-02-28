//for all pages when page is loaded create navbar
document.addEventListener("DOMContentLoaded", function() {
    // function fron this script
    printNavBar();
});

//generate the NavBar
function printNavBar() {
    toPrint = `
        <nav class="navbar nav_ayr navbar-expand-lg navbar-light">
            <button class="navbar-toggler" id="navgar-toggler-button" type="button" data-toggle="collapse" data-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
                
            <div class="navbar-collapse collapse" id="navbarToggler" style="">
                <div class="navbar-nav mr-auto mt-2 mt-lg-0">           
                </div>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="index.html"><i class="fas fa-lg fa-home"></i> Inicio </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="nosotros.html"><i class="fas fa-lg fa-users"></i> Nosotros </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="aplicaciones.html"><i class="fas fa-lg fa-mobile-alt"></i> Aplicaciones </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="e_books.html"><i class="fas fa-lg fa-book-open"></i> e-books </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="cartelera.html"><i class="far fa-lg fa-calendar-alt"></i> Cartelera </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#"><i class="far fa-lg fa-envelope"></i> Suscríbete </a>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="col-12 subNav">
            <a href="index.html">
                <img src="img/ayr1.png" alt="logo de alas y raices" class="navBrand">
            </a>                
        </div>
    `;
    const navAyr = document.getElementsByClassName("nav_ayr")[0];
    navAyr.innerHTML = toPrint;

    // set active the current section
    navAyr.querySelectorAll("li").forEach( (elm) => {
        if( window.location.href === elm.querySelector("a").href ){
            // console.log( elm.querySelector("a").href );
            elm.classList.add("active");
        }        
    });
    

}