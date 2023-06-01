import style from "./myntra.module.css"
import logo from "./logo.png"
import img1 from "./Myntra Homepage Images/homeimage1.webp"
import img2 from "./Myntra Homepage Images/homeimage2.webp"
import img3 from "./Myntra Homepage Images/homeimage3.webp"
import img4 from "./Myntra Homepage Images/homeimage4.webp"
import img5 from "./Myntra Homepage Images/homeimage5.webp"
import img6 from "./Myntra Homepage Images/homeimage6.webp"
import img7 from "./Myntra Homepage Images/homeimage7.webp"
import img8 from "./Myntra Homepage Images/homeimage8.webp"
import img9 from "./Myntra Homepage Images/homeimage9.webp"
import img10 from "./Myntra Homepage Images/homeimage10.webp"
import img11 from "./Myntra Homepage Images/homeimage11.webp"
import img12 from "./Myntra Homepage Images/homeimage12.webp"
import img13 from "./Myntra Homepage Images/homeimage13.webp"
import img14 from "./Myntra Homepage Images/homeimage14.webp"
import img15 from "./Myntra Homepage Images/homeimage15.webp"
import img16 from "./Myntra Homepage Images/homeimage16.webp"
import img17 from "./Myntra Homepage Images/homeimage17.webp"
import img18 from "./Myntra Homepage Images/homeimage18.webp"
import img19 from "./Myntra Homepage Images/homeimage19.webp"
import img20 from "./Myntra Homepage Images/homeimage20.webp"
import img21 from "./Myntra Homepage Images/homeimage21.webp"
import img22 from "./Myntra Homepage Images/homeimage22.webp"
import img23 from "./Myntra Homepage Images/homeimage23.webp"
import img24 from "./Myntra Homepage Images/homeimage24.webp"
import img25 from "./Myntra Homepage Images/homeimage25.webp"
import img26 from "./Myntra Homepage Images/homeimage26.webp"
import img27 from "./Myntra Homepage Images/homeimage27.webp"
import img28 from "./Myntra Homepage Images/homeimage28.webp"
import img29 from "./Myntra Homepage Images/homeimage29.webp"
import img30 from "./Myntra Homepage Images/homeimage30.webp"
import img31 from "./Myntra Homepage Images/homeimage31.webp"
import img32 from "./Myntra Homepage Images/homeimage32.webp"
import img33 from "./Myntra Homepage Images/homeimage33.webp"
import img34 from "./Myntra Homepage Images/homeimage34.webp"
import img35 from "./Myntra Homepage Images/homeimage35.webp"
import img36 from "./Myntra Homepage Images/homeimage36.webp"
import img37 from "./Myntra Homepage Images/homeimage37.webp"
import img38 from "./Myntra Homepage Images/homeimage38.webp"
import img39 from "./Myntra Homepage Images/homeimage39.webp"
import img40 from "./Myntra Homepage Images/homeimage40.webp"
import img41 from "./Myntra Homepage Images/homeimage41.webp"
import img42 from "./Myntra Homepage Images/homeimage42.webp"
import img43 from "./Myntra Homepage Images/homeimage43.webp"
import img44 from "./Myntra Homepage Images/homeimage44.webp"
import img45 from "./Myntra Homepage Images/homeimage45.webp"
import img46 from "./Myntra Homepage Images/homeimage46.webp"
import img47 from "./Myntra Homepage Images/homeimage47.webp"
import img48 from "./Myntra Homepage Images/homeimage48.webp"
import img49 from "./Myntra Homepage Images/homeimage49.webp"
import img50 from "./Myntra Homepage Images/homeimage50.webp"
import img51 from "./Myntra Homepage Images/homeimage51.webp"
import img52 from "./Myntra Homepage Images/homeimage52.webp"
import img53 from "./Myntra Homepage Images/homeimage53.webp"
import img54 from "./Myntra Homepage Images/homeimage54.webp"
import img55 from "./Myntra Homepage Images/homeimage55.webp"
import GooglePlay from "./Myntra Homepage Images/footer1.png"
import AppStore from "./Myntra Homepage Images/footer2.png"
import fb from "./Myntra Homepage Images/footer3.png"
import tw from "./Myntra Homepage Images/footer4.png"
import yt from "./Myntra Homepage Images/footer5.png"
import ig from "./Myntra Homepage Images/footer6.png"
import logo1 from "./Myntra Homepage Images/footer7.png"
import logo2 from "./Myntra Homepage Images/footer8.png"


const Myntra = () => {
    return(
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                        <img src={logo} alt="" />
                    </div>
                    <div className={style.Menu}>
                        <ol>
                            <li><a href="https://www.myntra.com/shop/men">MEN</a></li>
                            <li><a href="">WOMEN</a></li>
                            <li><a href="">KIDS</a></li>
                            <li><a href="">HOME & LIVING</a></li>
                            <li><a href="">BEAUTY</a></li>
                            <li><a href="">STUDIO <sup>NEW</sup></a></li>
                        </ol>
                    </div>
                    <div className={style.Search}>
                        <div className={style.searchbox}>
                            <i class="fa-solid fa-magnifying-glass"></i>
                            <input type="text" placeholder="Search for products, brands and more"/>
                        </div>
                    </div>
                    <div className={style.Icons}>
                            <div className={style.icon}>
                                <a href=""><i class="fa-regular fa-user"></i></a>
                                <a href=""><i class="fa-regular fa-heart"></i></a>
                                <a href=""><i class="fa-solid fa-bag-shopping"></i></a>
                            </div>
                            <div className={style.licon}>
                                <a href=""><p>Profile</p></a>
                                <a href=""><p>Wishlist</p></a>
                                <a href="https://www.myntra.com/checkout/cart"><p>Bag</p></a>
                            </div>
                    </div>
                </article>
            </section>
            <section id={style.homePage}>
                <div>
                    <h1>DEAL OF THE DAY</h1>
                </div>
                <article>
                    <img src={img1} />
                    <img src={img2} />
                    <img src={img3} />
                    <img src={img4} />
                    <img src={img5} />
                    <img src={img6} />
                    <img src={img7} />
                    <img src={img8} />
                </article>
            </section>
            <section id={style.homePage2}>
                <div>
                    <h1>BEST OF MYNTRA EXCLUSIVE BRANDS</h1>
                </div>
                <article>
                    <img src={img9} />
                    <img src={img10} />
                    <img src={img11} />
                    <img src={img12} />
                    <img src={img13} />
                    <img src={img14} />
                    <img src={img15} />
                    <img src={img16} />
                    <img src={img17} />
                    <img src={img18} />
                    <img src={img19} />
                    <img src={img20} />
                    <img src={img21} />
                    <img src={img22} />
                    <img src={img23} />
                    <img src={img24} />
                </article>
            </section>
            <section id={style.homePage3}>
                <div>
                    <h1>TOP PICKS</h1>
                </div>
                <article>
                    <img src={img25} />
                    <img src={img26} />
                    <img src={img27} />
                    <img src={img28} />
                    <img src={img29} />
                    <img src={img30} />
                    <img src={img31} />
                </article>
            </section>
            <section id={style.homePage4}>
                <div>
                    <h1>CATEGORIES TO BAG</h1>
                </div>
                <article>
                    <div className={style.hp4}>
                        <img src={img32} />
                        <img src={img33} />
                        <img src={img34} />
                        <img src={img35} />
                        <img src={img36} />
                        <img src={img37} />
                        <img src={img38} />
                        <img src={img39} />
                        <img src={img40} />
                        <img src={img41} />
                        <img src={img42} />
                        <img src={img43} />
                        <img src={img44} />
                        <img src={img45} />
                        <img src={img46} />
                        <img src={img47} />
                        <img src={img48} />
                        <img src={img49} />
                        <img src={img50} />
                        <img src={img51} />
                        <img src={img52} />
                        <img src={img53} />
                        <img src={img54} />
                        <img src={img55} />
                    </div>
                </article>
            </section>
            <section id={style.footer}> 
                <article>
                    <div className={style.part1}>
                        <a href="">ONLINE SHOPPING</a>
                        <br /><br />
                        <div className={style.list1}>
                            <ol>
                                <li><a href="">Men</a></li>
                                <li><a href="">Women</a></li>
                                <li><a href="">Kids</a></li>
                                <li><a href="">Home & Living</a></li>
                                <li><a href="">Beauty</a></li>
                                <li><a href="">Gift Cards</a></li>
                                <li><a href="">Myntra Insider</a></li>
                            </ol>
                            <br />
                        </div>
                        <a href="">USEFULL LINKS</a>
                        <br /><br />
                        <div className={style.list2}>
                                <ol>
                                    <li><a href="">Blog</a></li>
                                    <li><a href="">Careers</a></li>
                                    <li><a href="">Site Maps</a></li>
                                    <li><a href="">Home & Living</a></li>
                                    <li><a href="">Corporate Information</a></li>
                                    <li><a href="">Whitehat</a></li>
                                </ol>
                        </div>
                    </div>
                    <div className={style.part2}>
                        <p>CUSTOMER POLICIES</p>
                        <br />
                        <div className={style.list}>
                            <ol>
                                <li><a href="">Contact Us</a></li>
                                <li><a href="">FAQ</a></li>
                                <li><a href="">T&C</a></li>
                                <li><a href="">Terms Of Use</a></li>
                                <li><a href="">Track Orders</a></li>
                                <li><a href="">Shipping</a></li>
                                <li><a href="">Cancellation</a></li>
                                <li><a href="">Returns</a></li>
                                <li><a href="">Privacy policy</a></li>
                                <li><a href="">Grievance Officer</a></li>
                            </ol>
                        </div>
                    </div>
                    <div className={style.part3}>
                        <p>EXPERIENCE MYNTRA APP ON MOBILE</p>
                        <br />
                        <div className={style.logo1}>
                            <a href=""><img src={GooglePlay} alt="" /></a>
                            <a href=""><img src={AppStore} alt="" /></a>
                        </div>
                        <p>KEEP IN TOUCH</p>

                        <div className={style.logo2}>
                            <a href=""><img src={fb} alt="" /></a>
                            <a href=""><img src={tw} alt="" /></a>
                            <a href="https://www.youtube.com/user/myntradotcom"><img src={yt} alt="" /></a>
                            <a href=""><img src={ig} alt="" /></a>
                        </div>

                    </div>
                    <div className={style.extra}>

                    </div>
                    <div className={style.part4}>
                        <div className={style.logo}>
                            <img src={logo1} alt="" />
                            <br /><br />
                            <img src={logo2} alt="" />
                        </div>
                        <div className={style.para}>
                            <p><b>100% ORIGINAL</b> guarantee for all products at myntra.com</p>
                            <br /><br />
                            <p><b>Return within 30days</b> of receiving your order</p>
                        </div>
                    </div>
                </article>
            </section>
            <section id={style.footer2}>
                <article>
                    <div className={style.part1}>
                        <p>POPULAR SEARCHES</p>
                    </div>
                    <div className={style.part2}>
                        <p>-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    </div>
                </article>
            </section>
            <section id={style.footer3}>
                <article>
                    <div className={style.part}>
                        <a href="">Punjabi Suits</a> | <a href="">Anarkali</a> | <a href="">Lingeire</a> | <a href="">Rakhi 2020</a> | <a href="">Wedges</a> | <a href="">Jacket For Women</a> | <a href="">Bra</a> | <a href="">Leggings</a> | <a href="">Kanjeevaram Saree</a> | <a href="">Dupattas</a> | <a href="">Anklet</a> | <a href="">Jeggings</a> | <a href="">Panties</a> | <a href="">Image</a> | <a href="">W</a> | <a href="">Samsung</a> | <a href="">Real Madrid</a> | <a href="">Saree</a> | <a href="">Dresses</a> | <a href="">Palazzo Pants</a> | <a href="">Shrugs</a> | <a href="">Lehangas</a> | <a href="">Kurtas</a> | <a href="">Earrings</a> | <a href="">Bikini</a> | <a href="">Women Sweaters</a> | <a href="">Swimwear</a> | <a href="">Nightwear</a> | <a href="">Nail Polish</a> | <a href="">Halter Bra</a> | <a href="">Dungarees</a> | <a href="">Georgette Saree</a> | <a href="">Watches</a> | <a href="">Makeup</a> | <a href="">Necklace</a> | <a href="">Sharara</a> | <a href="">Hot Pant</a> | <a href="">Cotton Salwar Suit</a> | <a href="">Rompers</a> | <a href="">Nightdresses</a> | <a href="">Skirts</a> | <a href="">Stokings</a> | <a href="">Women Shirts</a> | <a href="">Eyeliner</a> | <a href="">Lipstick</a> | <a href="">Bangles</a> | <a href="">Designer Blouses</a> | <a href="">Tops</a> | <a href="">One Piece Dresses</a> | <a href="">Gowns</a>
                    </div>
                </article>
            </section>
            <section id={style.footer4}>
                <article>
                    <div className={style.part1}>
                        <p>In case of any concern, <a href="https://www.myntra.com/contactus">Contact Us</a></p>
                    </div>
                    <div className={style.part2}>
                        <p>© 2023 www.myntra.com. All rights reserved.</p>
                    </div>
                </article>
            </section>
            <section id={style.footer5}>
                <article>
                    <div className={style.part}>
                        <p>---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Myntra