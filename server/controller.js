//creating a controller file with function signatures. think about what each fucntion does...

//QUESTION:  when stating the controller, is what is required the base URL?? 
//you can use destructing with the realEstateController (  const {getAllHouses, createHouse, updateHouse, deleteHouse} = realEstateController )



//part 3.1
const houseinfo = require('./db.json')
let houseId = 4

module.exports = {
    getHouses: (req, res) => {
        res.status(200).send(houseinfo)
    },

    createHouse: (req, res) => {
        const {address, price, imageURL} = req.body
        let newHouse = {
            id: houseId,
            address,
            price: +price,
            imageURL
        }

        houseinfo.push(newHouse)
        houseId += 1
        res.status(200).send(houseinfo)
    },

    updateHouse: (req, res) => {
        let {id} = req.params
        let {type} = req.body
        console.log(req.body.type)
        console.log(req.params.id)
        index = houseinfo.findIndex((el) => {return +el.id === +req.params.id})
        if(type === 'plus') {
            houseinfo[index].price += 10000
            res.status(200).send(houseinfo)
        }
        
        else if (type ==='minus') {
            houseinfo[index].price -= 10000
            res.status(200).send(houseinfo)
        } 
      
        
        
    },

    deleteHouse: (req, res) => { 
        console.log(req.params.id)
        let index = houseinfo.findIndex((el)=> {return +el.id === +req.params.id})
        houseinfo.splice(index, 1)
        res.status(200).send(houseinfo)
        
    }
}