import { bdTestimoniales } from '../models/testimoniales.js';
const guardarTestimoniales = async (req, res) => {
    //Validar
    const {nombre, correo, mensaje } = req.body;
    const errores = [];
    if(nombre.trim()===''){ errores.push({mensaje:"El nombre está vacío"}); }
    if(correo.trim()===''){ errores.push({mensaje:"El correo está vacío"}); }
    if(mensaje.trim()===''){ errores.push({mensaje:"El mensaje está vacío"}); }
        if(errores.length > 0){
            const bdTestimonialestmp = await bdTestimoniales.findAll();
            res.render('testimoniales', {
                pagina: 'Testimoniales',
                errores, 
                nombre, 
                correo, 
                mensaje, //Para que no se borren cuando muestre los mensajes
                bdTestimonialestmp
            }) 
        } else {
            try {
                await bdTestimoniales.create({
                    nombre,
                    correo, 
                    mensaje
                })
                res.redirect('/testimoniales');
            } catch (error) {
                console.log(error)
            }

        }
}
    //console.log(req.body);

export {
    guardarTestimoniales
}