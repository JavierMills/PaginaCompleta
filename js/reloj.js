$(document).ready(function(){
    setInterval(function(){
        var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
        $('#reloj').html(reloj);
    }, 1000)
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

    
  
})