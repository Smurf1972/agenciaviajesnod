import { bdViaje } from '../models/viaje.js';
import { bdTestimoniales } from '../models/testimoniales.js';

const paginaInicio = async (req, res) => {
    //Consultar 3 viajes del modelo
    const promisedb = [];
    promisedb.push( bdViaje.findAll({ limit: 3 }) );
    promisedb.push( bdTestimoniales.findAll({ limit: 3 }) );
    try{
        //const viajes = await bdViaje.findAll({ limit: 3 });
        //const testimoniales = await bdTestimoniales.findAll({ limit: 3 });
        //para poder ejecutar los dos await
        const resultado = await Promise.all( promisedb )
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], //va a bloque_viajes
            testimoniales: resultado[1],
            clase: 'home',
            page: 'Inicio'
        });
    } catch (error) {
        console.log(error)
    }

}
const paginaNosotros = (req, res) => {
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}
const paginaViajes = async (req, res) => {  
    //Consultar BD
    const viajes = await bdViaje.findAll(); //se va para viajes.pug
    res.render('viajes', {
        pagina: 'Proximos Viajes',
        viajes, //se va para viajes.pug
    });
}
const paginaDetalleViaje = async (req, res) => {  
    //console.log(req.params.selViaje);
    const { slug } =  req.params;
    try {
        //const resultado = await Viaje.findOne( { where : { slug: slug } }) es Igual
        const bdViajetmp = await bdViaje.findOne( { where : { slug } }) //se va para viaje.pug
        res.render('viaje', { 
            pagina: 'Viaje',
            bdViajetmp, //se va para viaje.pug
        })
    } catch (error){
        console.log(error);
    }

}
const paginaTestimoniales = async (req, res) => {
    try {
        const testimoniales = await  bdTestimoniales.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales',
            testimoniales
        });
    } catch (error){
        console.log(error)
    }
}

const paginaContacto = (req, res) => {
    res.render('contacto', {
        pagina: 'Contacto'
    });
}
export {
    paginaInicio, paginaNosotros, paginaViajes, paginaContacto, paginaDetalleViaje, paginaTestimoniales
}