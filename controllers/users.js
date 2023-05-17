const {request,response}=require('express');
const User=require('../models/User');

const usuariosGet= async(req,res=response)=>{
    const user= await User.find({status:true})

    res.json({
        user
    })

        /*
    const usuario=await Usuario.find({status:true})
    if (!usuario){
        return res.status(400).json({
            msg:'No se encontraron usuarios...'
        })
    }
    res.json({
        usuario
    })
    */
   /*
    res.json({
        msg:'peticion del get.'
    })
    */

   }

const usuariosPost=(req=request,res=response)=>{
    const {name,mail,password,google,role }=req.body;

    const user=new User({name,mail,password,google,role });

    user.save();

        res.json({
        user
    })
}
const usuariosPut=(req=request,res=response)=>{
    const {id}=req.params;
    res.json({
        msg: id
    })
}
const usuariosDelete=(req=request,res=response)=>{
    res.json({
        msg:'peticion del delete'
    })
}
const usuariosPatch=(req=request,res=response)=>{
    res.json({
        msg:'peticion del patch'
    })
}

module.exports={
    usuariosGet,usuariosDelete,usuariosPatch,usuariosPost,usuariosPut
}