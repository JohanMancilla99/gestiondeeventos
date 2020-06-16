const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM competencias', (err, competencias) => {
            if (err) {
                res.json(err);
            }
            res.render('competencias', {
                data: competencias
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save = (req, res) => {
    const data = {
        "id_competencia": req.body.id_competencia,
        "nombre_competencia": req.body.nombre_competencia,
        "tipo_ambiente": req.body.tipo_ambiente
    }

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO competencias set ?', [data], (err, competencias) => {

        });
    });

    // llenado de la tabla de relacion

    req.getConnection((err, conn) => {

        for (let k = 0; k < (req.body.size + 1); k++) {

            let moreData = {
                "id_programa": req.body.programas[k],
                "id_competencia": req.body.id_competencia
            }
            conn.query('INSERT INTO competencias_programa set ?', [moreData], (err, competencias) => {

            });
        }
        res.redirect("/admin/crear-elementos");
    });

};


// Controlador para editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM competencias WHERE id = ?', [id], (err, competencias) => {
            res.render('edit', {
                data: competencias[0]
            })
        })
    });
};

// Guarda dato modificado
controller.update = (req, res) => {
    const { id } = req.params;
    const newCompetencia = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE competencias set ? WHERE id = ?', [newCompetencia, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM competencias WHERE id = ?', [id], (err, rows) => {
            res.redirect('/admin/elementos');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};


module.exports = controller;