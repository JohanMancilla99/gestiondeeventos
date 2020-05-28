const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM programas', (err, programas) =>{
            if(err){
                res.json(err);
            }
            res.render('programas', {
                data: programas
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, conn) =>{
       conn.query('INSERT INTO programas set ?', [data], (err, programas)=>{
           res.redirect('/admin/elementos');  // redirecciona a la pagina cuando el dato es guardado
       });
   });
};


// Controlador para editar
controller.edit = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM programas WHERE id = ?', [id], (err, programas)=>{
        res.render('edit', {
            data: programas[0]
        })
    })
    });
};

// Guarda dato modificado
controller.update = (req, res) =>{
    const {id} = req.params;
    const newProgramas = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE programas set ? WHERE id = ?', [newProgramas, id], (err, rows) =>{
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete =(req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM programas WHERE id = ?', [id], (err, rows) =>{
        res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};



module.exports = controller;