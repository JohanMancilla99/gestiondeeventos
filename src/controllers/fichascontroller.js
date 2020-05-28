const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM fichas', (err, fichas) =>{
            if(err){
                res.json(err);
            }
            res.render('fichas', {
                data: fichas
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save =(req, res) =>{
    const data = req.body;

   req.getConnection((err, conn) =>{
       conn.query('INSERT INTO fichas set ?', [data], (err, fichas)=>{
           res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado
       });
   });
};


// Controlador para editar
controller.edit = (req, res) =>{
    const {id} = req.params;
    req.getConnection((err, conn)=>{
    conn.query('SELECT * FROM fichas WHERE id = ?', [id], (err, fichas)=>{
        res.render('edit', {
            data: fichas[0]
        })
    })
    });
};

// Guarda dato modificado
controller.update = (req, res) =>{
    const {id} = req.params;
    const newFicha = req.body;
    req.getConnection((err, conn) =>{
        conn.query('UPDATE fichas set ? WHERE id = ?', [newFicha, id], (err, rows) =>{
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete =(req, res) =>{
    const {id} = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM fichas WHERE id = ?', [id], (err, rows) =>{
        res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};


module.exports = controller;