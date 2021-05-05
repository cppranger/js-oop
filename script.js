// template
class Header {
    constructor(img, alt, h1) {
        this.src = img;
        this.alt = alt;
        this.h1 = h1;
    }

    render(target) {
        let out = "";
        out += `<div class="site-identity">
                    <img src="${this.src}" alt="${this.alt}" class="logo"/>
                    <h1><a href="#">${this.h1}</a></h1>
                </div>`
        out += `<nav class="site-navigation">
                    <ul class="nav">
                        <li><a href="#">About</a></li> 
                        <li><a href="#">News</a></li> 
                        <li><a href="#">Contact</a></li> 
                    </ul>
                </nav>`
        document.getElementById(target).innerHTML = out;
    }
}

const logo = 'https://2.bp.blogspot.com/-J9hheZOCTaI/WNeAKyxjo5I/AAAAAAAAJNE/lSdIsmxsMuEa8gU39LzghFb9u_IVJ4DeACLcB/s1600/ViewDocument.png';
const alt = logo;
const h1 = "Welcome to our small e-shop!";
let header = new Header(logo, alt, h1);
header.render('header');
