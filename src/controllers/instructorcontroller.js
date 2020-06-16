const controller = {}

const programacionDefault = () => {
    let toReturn = "";
    for (let j = 0; j < 96; j++) {
        toReturn += "0";
    }
    return toReturn
}

controller.list = (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT * FROM instructores', (err, instructores) => {
            if (err) {
                res.json(err);
            }
            res.render('instructores', {
                data: instructores
            });
        });
    });
};

// controlador para guardar datos

controller.save = (req, res) => {
    const data = {
        "id_instructor": req.body.id_instructor,
        "nombre_instructor": req.body.nombre_instructor,
        "programas": req.body.programas,
        "tipo_contrato": req.body.tipo_contrato,
        "horas_programadas": "0",
        "programacion_instructor": programacionDefault()
    }


    req.getConnection((err, con) => {
        con.query('INSERT INTO instructores set ?', [data], (err, instructores) => {
            if (err) { console.log(err) }
            res.redirect('/admin/crear-elementos');
        });
    });
};

// editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('SELECT * FROM instructores WHERE = ?', [id], (err, instructores) => {
            res.render('edit', {
                data: instructores[0]
            });
        });
    });
};

// guardar
controller.update = (req, res) => {
    const { id } = req.params;
    const newInstructor = req.body;
    req.getConnection((req, con) => {
        con.query('UPDATE instructores ser ? WHERE id = ?', [newInstructor, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

// Eliminar
controller.delete = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('DELETE FROM instructores WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');
        });
    });
};

module.exports = controller;