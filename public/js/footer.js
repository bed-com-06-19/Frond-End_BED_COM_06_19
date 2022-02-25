const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML=`
            <div class="footer-content">
            <img src="image/free-fashion-logo-design.jpg" alt="">
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-tittle"> men</li>
                    <li><a href="#" class="footer-link">t-shirts</a></li>
                    <li><a href="#" class="footer-link">sweats</a></li>
                    <li><a href="#" class="footer-link">sports-shoes</a></li>
                    <li><a href="#" class="footer-link">trousers</a></li>
                    <li><a href="#" class="footer-link">descent-attire</a></li>
                    <li><a href="#" class="footer-link">boots</a></li>
                    <li><a href="#" class="footer-link">jerseys</a></li>


                </ul>
                <ul class="category">
                        <li class="category-tittle"> women</li>
                        <li><a href="#" class="footer-link">shorts</a></li>
                        <li><a href="#" class="footer-link">brouses</a></li>
                        <li><a href="#" class="footer-link">sports-shoes</a></li>
                        <li><a href="#" class="footer-link">dresses</a></li>
                        <li><a href="#" class="footer-link">skirts</a></li>
                        <li><a href="#" class="footer-link">heels</a></li>
                        <li><a href="#" class="footer-link">jerseys</a></li>


            </ul>

            </div>

        </div>
        <p class="footer-title">about the shop</p>
        <p class="info"> This is one of the best websites fo clothes shoping. fashionable and all exclusive are found here and we deliver in all sectors. am sure that we wont let you down</p>
        <p class="info">support emails - help@blessingskelvinsaka.com, support customer@kensaka.com</p>
        <p class="info"> telephone - 05678675566, 09865542425</p>
        <div class="footer-social-container">
        <div>
            <a href="#" class="social-link"> terms & services</a>
            <a href="#" class="social-link"> privacy page</a>
        </div>
        </div>
        <a href="#" class="social-link"> instalgram</a>
        <a href="#" class="social-link"> facebook</a>
        <a href="#" class="social-link"> twitter</a>
        </div>
        </div>
        <p class="footer-credit"> Clothing, Best fashion of the century</p>
    
    `;
}

createFooter();