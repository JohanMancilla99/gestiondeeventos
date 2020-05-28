const controller ={}

controller.list = (req, res)=>{
    req.getConnection((err, con)=>{
        con.query('SELECT * FROM instructores', (err, instructores)=>{
            if(err){
                res.json(err);
            }
            res.render('instructores',{
                data: instructores
            });
        });
    });
};

// controlador para guardar datos

controller.save =(req, res)=>{
    const data = req.body;
    req.getConnection((err, con)=>{
        con.query('INSERT INTO instructores set ?', [data], (err, instructores)=>{
            res.redirect('/admin/elementos');
        });
    });
};

// editar
controller.edit = (req, res)=>{
    const {id} =req.params;
    req.getConnection((err, con)=>{
        con.query('SELECT * FROM instructores WHERE = ?', [id], (err, instructores)=>{
            res.render('edit',{
                data: instructores[0]
            });
        });
    });
};

// guardar
controller.update =(req, res)=>{
    const {id} = req.params;
    const newInstructor = req.body;
    req.getConnection((req, con)=>{
        con.query('UPDATE instructores ser ? WHERE id = ?', [newInstructor, id], (err, rows) =>{
            res.redirect('/');
        })
    })
}

// Eliminar
controller.delete = (req, res)=>{
    const {id} = req.params;
    req.getConnection((err, con)=>{
        con.query('DELETE FROM instructores WHERE id = ?', [id], (err, rows)=>{
            res.redirect('/');
        });
    });
};

module.exports = controller;