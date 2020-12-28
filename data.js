const faker = require("faker");
const products = [];
const categories = ["Watersports", "Soccer", "Chess", "Running"];
const orders = [];

faker.seed(100);

//Fake products
for (let i = 1; i <= 503; i++) {
    const category = faker.helpers.randomize(categories);
    products.push({
        id: i,
        name: faker.commerce.productName(),
        category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price()),
    });
}

//Fake orders
for (let i = 1; i < 103; i++) {
    const fname = faker.name.firstName();
    const sname = faker.name.lastName();

    var order = {
        id: i,
        email: faker.internet.email(fname, sname),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        zip: faker.address.zipCode(),
        country: faker.address.country(),
        shipped: faker.random.boolean(),
        products: [],
    };
    //Fake order's products
    const productCount = faker.random.number({ min: 1, max: 5 });
    const productIds = [];
    while (productIds.length < productCount) {
        const candidateId = faker.random.number({
            min: 1,
            max: products.length,
        });
        if (productIds.indexOf(candidateId) === -1) {
            productIds.push(candidateId);
        }
    }
    for (let j = 0; j < productCount; j++) {
        order.products.push({
            quantity: faker.random.number({ min: 1, max: 10 }),
            product_id: productIds[j],
        });
    }

    orders.push(order);
}

module.exports = function () {
    return {
        categories,
        products,
        orders,
    };
};
