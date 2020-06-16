const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM resultados', (err, resultados) => {
            if (err) {
                res.json(err);
            }
            res.render('resultados', {
                data: resultados
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save = (req, res) => {

    const data = {
        "id_resultado": req.body.id_resultado,
        "nombre_resultado": req.body.nombre_resultado,
        "horas_resultado": req.body.horas_resultado,
        "trimestres": req.body.trimestres,
        "id_competencia": req.body.id_competencia
    }

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO resultados set ?', [data], (err, resultados) => {
            if (err) { console.log(err); }
            res.redirect("admin/crear-elementos");  // redirecciona a la pagina cuando el dato es guardado
        });
    });
};


// Controlador para editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM resultados WHERE id = ?', [id], (err, resultados) => {
            res.render('edit', {
                data: resultados[0]
            })
        })
    });
};

// Guarda dato modificado
controller.update = (req, res) => {
    const { id } = req.params;
    const newResultado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE resultados set ? WHERE id = ?', [newResultado, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM resultados WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};



module.exports = controller;