const controller = {};

controller.list = (req, res) => {
    
    req.getConnection((err, con) => {
        con.query('SELECT * FROM actividades_proyecto', (err, actividades_proyecto) =>{
            if(err){
                res.json(err);
            }
            res.render('actividades_proyecto', {
                data: actividades_proyecto
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, con) =>{
       con.query('INSERT INTO actividades_proyecto set ?', [data], (err, actividades_proyecto)=>{
           res.redirect('/admin/elementos');  // redirecciona a la pagina cuando el dato es guardado
       });
   });
};

module.exports = controller;