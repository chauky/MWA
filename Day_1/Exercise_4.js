const item = {
    "name": "Biscuite",
    "type": "regular",
    "category": "food",
    "price": 2.0
}

var applyCoupon = function (category) {
    if (category === item.category) {
        return function (discount) {
            return function () {
                item.price = item.price - item.price * discount;
                return item;
            }
        }
    }
}

//testing 
console.log(applyCoupon("food")(0.1)(item).price === 1.8);