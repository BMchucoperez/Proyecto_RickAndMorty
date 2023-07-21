const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
    const {idChar} = req.params;

    try {
        const apiRequest = await axios(`${URL}${idChar}`);
        const { data } = apiRequest;
        if(data.error){
            return res.status(404).send(data.error);
        }

        const {id, status, name, species, origin, image, gender} = data;
        const character = {
            id: Number(id),
            name,
            status,
            species,
            origin, // Enviamos el objecto "origin" porque el front lo espera
            image,
            gender,
        };
        return res.status(200).json(character);
    } catch (axiosError) {
        return res.status(500).send(axiosError.message);
    }
}

module.exports = { getCharById };