const controller = {};

controller.list = (req, res) => {
    
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM ambientes', (err, ambientes) =>{
            if(err){
                res.json(err);
            }
            res.render('ambientes', {
                data: ambientes
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, conn) =>{
       conn.query('INSERT INTO ambientes set ?', [data], (err, ambientes)=>{
           res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado
       });
   });
};


// Controlador para editar
controller.edit = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM ambientes WHERE id = ?', [id], (err, ambientes)=>{
        res.render('edit', {
            data: ambientes[0]
        })
    })
    });
};

// Guarda dato modificado
controller.update = (req, res) =>{
    const {id} = req.params;
    const necAmbientes = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE ambientes set ? WHERE id = ?', [necAmbientes, id], (err, rows) =>{
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete =(req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM ambientes WHERE id = ?', [id], (err, rows) =>{
        res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};


module.exports = controller;