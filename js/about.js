$(document).ready(function(){
    
        $( "#accordion" ).accordion();
    
        var fecha = {
                date: "Publicado el dia" + " "+moment().date() + " de " + moment().format("MMMM")+ " "+ moment().format("YYYY")
            }
          
            var poner= `
            <div>
            <h4 id="fechita">
                ${fecha.date}
            </h4>
        </div>
            `;
    
            $("#fechita").append(poner);
    
        
   


});
