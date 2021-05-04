// homework
class Car {
    constructor(brand, name, price, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.price = price;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }
}

const tesla = new Car('Tesla', 'Roadster', 20200455, 454, 'electricity', 'red', 'https://avatars.mds.yandex.net/get-zen_doc/48747/pub_5a1155ce77d0e66ae8d7dd53_5a1155d1248090f4a1e452f1/scale_1200');
const lada = new Car('Lada', 'Kalina', 156870, 1000, 'petrol', 'silver', 'https://s.rdrom.ru/1/pubs/4/23638/1100424.jpg');

console.log(tesla);
console.log(lada);
