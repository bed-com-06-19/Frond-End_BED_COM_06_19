const createNav =() => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">

    <img src="image/free-fashion-logo-design.jpg" class="brand-logo" alt="">
            <div class ="nav-items">
    <div class="search">
        <input type = "text" class ="search-box" placeholder="search brand, product">
        <button class="search-btn">search</button></button>

    </div>
    <a href="#"><img src="image/uselo.png" alt=""></a>
    <a href="#"><img src="image/userlog.jfif" alt=""></a>

     </div>
     </div>
     <ul class = " links-container">
     <li class="link item"><a href="#" class="link">home</a></li>
     <li class="link item"><a href="#" class="link">women</a></li>
     <li class="link item"><a href="#" class="link">men</a></li>
     <li class="link item"><a href="#" class="link">kids</a></li>
     <li class="link item"><a href="#" class="link">accessories</a></li>

    </ul>
    
    `;
}
 createNav();