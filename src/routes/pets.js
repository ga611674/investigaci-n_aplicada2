const { Router, request } = require('express');
const router = Router();

const pets = require('../animals.json');

router.get('/', (req, res) => {
    res.json(pets);
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { raza, nombre, edad, estatura, peso } = req.body
    if(raza && nombre && edad && estatura && peso){
        _.each(pets, (pet, i) => {
            if(pets.id == id){
                pets.raza = raza;
                pets.nombre = nombre;
                pets.edad = edad;
                pets.estatura = estatura;
                pets.peso = peso;
            }
        });
        res.json(pets);
    }else{
        res.status(500).json({"Error": "Hubo un error al actualizar los datos"});
    }
});

router.post('/', (req, res) => {
    const { raza, nombre, edad, estatura, peso } = req.body

    if(raza && nombre && edad && estatura && peso){
        const id = pets.length + 1;
        const newPets = {...req.body, id};//Al usar los 3 puntos se pasa todo lo que tenga el request body al otro objeto
        movies.push(newPets);
        res.json(pets);
    }else{
        res.status(500).json({'error': 'Ha ocurrido un error'});//Respuesta erronea
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    _.each(pets, (pet, i) => {
        if(pets.id == id){
            pets.splice(i, 1);
        }
    });
    res.send('Delete');
    const {} = req.params;
});

module.exports = router;