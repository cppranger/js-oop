// template
class Header {
    constructor(img, alt, h1, h2) {
        this.src = img;
        this.alt = alt;
        this.h1 = h1;
        this.h2 = h2;
    }

    render(target) {
        let out = "";
        out += `<img src="${this.src}" alt="${this.alt}" class="logo"/>`;
        out += `<h1 class="company-name">${this.h1}</h1>`;
        out += `<h2 class="auth-info">${this.h2}</h2>`;
        document.getElementById(target).innerHTML = out;
    }
}

const logo = 'https://2.bp.blogspot.com/-J9hheZOCTaI/WNeAKyxjo5I/AAAAAAAAJNE/lSdIsmxsMuEa8gU39LzghFb9u_IVJ4DeACLcB/s1600/ViewDocument.png';
const alt = logo;
const h1 = "Hello, user!";
const h2 = "Please, authorize!";
let header = new Header(logo, alt, h1, h2);
header.render('header');
