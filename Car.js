// homework
class Car {

    static carList = [];

    constructor(brand, name, price, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
        Car.setList(this);
    }
    getText() {
        let out = "";
        out += `<div class="car">`
        out += `<div class="car-container">
                <img src="${this.img}" alt="${this.name}" class="car-img"/>
                <div class="bottom-left"><p class="brand"><b>${this.brand}</b> ${this.name}</p></div>
                </div>`;
        out += `<div class="misc">
                <ul>
                    <li>Weight: ${this.weight} kg</li>
                    <li>Fuel type: ${this.fuel_type}</li>
                    <li>Color: ${this.color}</li>
                    <li>Cost: <span class="price">${this.priceCorrector()} ₽</span></li>
                </ul>
                </div>`
        out += `</div>`;
        return out;
    }
    
    static renderAll(target) {
        let result = "";
        Car.carList.forEach(function (car) {
            result += car.getText();
        })
        document.getElementById(target).innerHTML = result;
    }
    
    static setList(car) {
        return Car.carList.push(car);
    }

    priceCorrector() {
        return this.price.toLocaleString();
    }
}



const tesla = new Car('Tesla', 'Roadster', 20200455, 454, 'electricity', 'red', 'https://i1.sndcdn.com/artworks-000456414930-4l7bci-t500x500.jpg');
const lada = new Car('Lada', 'Kalina', 156870, 1000, 'petrol', 'red', 'https://akcik.ru/components/com_virtuemart/shop_image/category/_5a1ea559de86b_thumb.jpg');
const bugatti = new Car('Bugatti', 'Veyron', 170869897, 1000,'petrol', 'blue', 'https://i1.sndcdn.com/avatars-000309463520-5v3bvt-t500x500.jpg')

console.log(tesla);
console.log(lada);
Car.renderAll('cars');