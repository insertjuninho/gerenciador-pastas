var fs = require('fs');
var PDFParser = require('pdf2json');
var pdfCaminho = 'arquivo_pdf_teste.pdf';
const db = require('../Database/db');

exports.index = (req, res) => {

    if (fs.existsSync(pdfCaminho)) {
        
        var pdfParser = new PDFParser();
    
        pdfParser.on("pdfParser_dataError", function(errData){
            console.log(errData.parserError)
        });
    
        pdfParser.on("pdfParser_dataReady", function(pdfData){
    
            var retornoHtml = "";
    
           pdfData.formImage.Pages.forEach(function (page, index){
               retornoHtml += "<p>Pagina " + (parseInt(index) + 1) + "</p>";
               var y = 0;
    
               page.Texts.forEach(function(text, index){
                   if (index == 0) {
    
                    y = text.y;
                       
                   }
                   text.R.forEach(function(t) {
    
                    if (text.y !== y) {
                        retornoHtml += "<br/>";
                        
                    }
    
                    retornoHtml += decodeURIComponent(t.T)
                      // console.log(t.T)
                   })
    
                   y = text.y;
               })
    
               retornoHtml += "</p>";
               console.log("conteudo", retornoHtml)
               let conteudo = ({"conteudo":retornoHtml});
              db.collection('pdf-cad').insert(conteudo)
           });

           //GERA UM ARQUIVO HTML
            fs.writeFile("resultado.html", retornoHtml, function(err){
                if (err) {
                    return console.log(err);
                   
                }
            })
        });
    
        pdfParser.loadPDF(pdfCaminho);
        console.log('Arquivo Encontrado');
        
    }else{
        console.log('Arquivo não encotrado');
    }
}
