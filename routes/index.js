import express from 'express';
import { paginaInicio, 
    paginaNosotros, 
    paginaViajes, 
    paginaContacto, 
    paginaTestimoniales,
    paginaDetalleViaje
     } from '../controllers/paginaController.js';
import { guardarTestimoniales } from '../controllers/testimonialController.js';

const router = express.Router();

router.get('/', paginaInicio);
router.get('/nosotros', paginaNosotros);
console.log('hola1');
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimoniales);
router.get('/contacto', paginaContacto);
//router.get('/', (req, res) => { //req - lo q enviamos, res - lo q nos responde express
//    res.render('inicio', {
//        pagina: 'Inicio'
//    });
//});
//router.post('/json', (req, res) => { //router.delete('/json', (req, res) => { //router.patch('/json', (req, res) => { //router.get('/json', (req, res) => { 
//    res.json({ //        id: 1 //    }); //});
//router.get('/Viajes', (req, res) => {   //const viajes = 'Viajes a Alemania';
//    res.render('viajes', { //textoViajes : viajes igual //viajes
//        pagina: 'Viajes'
//    });
//});
//router.get('/Contacto', (req, res) => {   //const viajes = 'Viajes a Alemania';
//    res.render('contacto', { //textoViajes : viajes igual //viajes
//        pagina: 'Contacto'
//    });
//});
//router.get('/Nosotros', (req, res) => {   //const viajes = 'Viajes a Alemania';
//    res.render('nosotros', { //textoViajes : viajes igual //viajes
//        pagina: 'Nosotros'
//    });
//});
export default router;
