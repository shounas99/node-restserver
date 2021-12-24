const { response } = require('express');

const usersGet =  (req = request, res = response) => {
    const {q, nombre = 'No name', api, page = 1, limit } = req.query;
    res.json({
        ok: true,
        msg: 'get API - desde controller',
        q, 
        nombre, 
        api, 
        page,
        limit
    })
}
const usersPost = (req, res = response) => {
    //Lo que sea que venga de body, lo reflejare en mi respuesta
    const {nombre, edad} = req.body;
    res.json({
        ok:true, 
        msg: 'post API - desde controller',
        nombre, 
        edad
    })
}

const usersPut =  (req, res = response) => {
    const {id} = req.params;
    
    res.json({
        ok: true,
        msg: 'put API - desde controller',
        id
    })
}
const usersPatch =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - desde controller'
    })
}
const usersDelete =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'delete API - desde controller'
    })

}

module.exports = {
    usersGet,
    usersPost,
    usersPut,
    usersPatch,
    usersDelete
}