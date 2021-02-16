
const db = require('../Database/db');

exports.upload = (req, res) => {
    //var formiDable = require('formidable');
    //var form = new formiDable.IncomingForm();
    //form.parse(req, function(err, fields, files){
    //     res.write('Upload com Sucesso');
    //     res.end();
    //})
 
    //const { titulo, conteudo } = req.body;
    //let payload = ({ "Titulo":titulo, "Conteudo": conteudo });
   // console.log("pay", payload);
    db.collection('pdf-cad').insert({
        "titulo": req.body.titulo,
        "conteudo": req.body.conteudo
    }, (error, results) => {
        if (error) {
            console.log(error)
        }else{
            console.log(results)
            return res.render('Conteudo',{
                message: 'Cadastrado com sucesso'
            })
        }
    })
}