const controller = {};

controller.list = (req, res) => {
    
    req.getConnection((err, con) => {
        con.query('SELECT * FROM actividades_aprendizaje', (err, actividades_aprendizaje) =>{
            if(err){
                res.json(err);
            }
            res.render('actividades_aprendizaje', {
                data: actividades_aprendizaje
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, con) =>{
       con.query('INSERT INTO actividades_aprendizaje set ?', [data], (err, actividades_aprendizaje)=>{
           res.redirect('/admin/elementos');  // redirecciona a la pagina cuando el dato es guardado
       });
   });
};

module.exports = controller;