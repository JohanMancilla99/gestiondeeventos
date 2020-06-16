const controller = {};

const programacionDefault = () => {
    let toReturn = "";
    for (let j = 0; j < 96; j++) {
        toReturn += "0";
    }
    return toReturn
}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM fichas', (err, fichas) => {
            if (err) {
                res.json(err);
            }
            res.render('fichas', {
                data: fichas
            });
        });
    });
};

// Controlador que guarda los datos 
controller.save = (req, res) => {

    // creo un objeto organizado para cargar los datos faltantes
    const data = {
        "codigo_ficha": req.body.codigo_ficha,
        "inicio_formacion": req.body.inicio_formacion,
        "cantidad_aprendices": req.body.cantidad_aprendices,
        "trimestre_actual": "1",
        "programacion_ficha": programacionDefault(),
        "competenciasProgramadas": "",
        "id_programa": req.body.id_programa
    }

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO fichas set ?', [data], (err, fichas) => {
            console.log(data.codigo_ficha);
            res.redirect('/admin/crear-elementos');  // redirecciona a la pagina cuando el dato es guardado
        });
    });
};


// Controlador para editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM fichas WHERE id = ?', [id], (err, fichas) => {
            res.render('edit', {
                data: fichas[0]
            })
        })
    });
};

// Guarda dato modificado
controller.update = (req, res) => {
    const { id } = req.params;
    const newFicha = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE fichas set ? WHERE id = ?', [newFicha, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

// Controlador que elimina los datos
controller.delete = (req, res) => {
    const { id } = req.params;

    req.getConnection((err, conn) => {
        conn.query('DELETE FROM fichas WHERE id = ?', [id], (err, rows) => {
            res.redirect('/');  // redirecciona a la pagina cuando el dato es guardado   
        });
    });
};


module.exports = controller;