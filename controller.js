const houses = require('./server/db.json')

let id = 4;

module.exports = {
    getAllHouses: function(req,res) {
        res.status(200).send(houses);
    },
    createHouse: function(req,res) {
        console.log(req.body);
        const { price,address, imageURL } = req.body;

        const newHouse = {
            id, price, address, imageURL
        };
        
        houses.push(newHouse);
        id++;
        res.status(200).send(houses);
    },
    updateHouse: (req, res) => {
        let { id } = req.params
        let { type } = req.body
        let index = houses.findIndex(elem => +elem.id === +id)

        if (houses[index].price <= 10000 && type === 'minus') {
            houses[index].price = 0
            res.status(200).send(houses)
        } else if (type === 'plus') {
            houses[index].price += 10000
            res.status(200).send(houses)
        } else if (type === 'minus') {
            houses[index].price -= 10000
            res.status(200).send(houses)
        } else {
            res.sendStatus(400)
        }
    },
    deleteHouse: function(req,res) {
        const index = houses.findIndex
        (function(houses) {
            return houses.id === +req.params.id;
        });

        houses.splice(index,1);
        res.status(200).send(houses);
    }
}