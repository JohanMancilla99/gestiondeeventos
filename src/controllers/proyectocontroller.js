const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, con) => {
        con.query('SELECT FROM proyectos', (err, proyectos) => {
            if (err) {
                res.json(err)
            }
            res.render('proyectos', {
                data: proyectos
            });
        });
    });
};

// Guardar
controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, con) => {
        con.query('INSERT INTO proyectos set ?', [data], (err, proyectos) => {
            if (err) { console.log(err) }
            res.redirect('/admin/crear-elementos');
        });
    });
};

// Editar
controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, con) => {
        con.query('SELECT * FROM proyectos WHERE id = ?', [id], (err, proyectos) => {
            res.render('edit', {
                data: proyectos[0]
            });
        });
    });
};

// Guardar
controller.update = (req, res) => {
    const { id } = req.params;
    const newProyecto = req.body;
    req.getConnection((err, con) => {
        con.query('UPDATE proyecto ser ? WHERE = ?', [newProyecto, id], (err, rows) => {
            res.redirect('/');
        })
    })
}

module.exports = controller;