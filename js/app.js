$(document).ready(function(){
    //slider
    if(window.location.href.indexOf('index') >-1){ //para determinar si se sencuentra en index principal y poder ejecutar lo establecido
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 500,
          });
    
    }
   
                
        //post
    if(window.location.href.indexOf('index') >-1){
        var posts =[
            {
                title: "Prueba de titulo 1",
                date: "Publicado el dia" + " "+moment().date() + " de " + moment().format("MMMM")+ " "+ moment().format("YYYY"),
                content: "Hola",
            },
            {
                title: "Prueba de titulo 2",
                date: "Publicado el dia" + " "+moment().date() + " de " + moment().format("MMMM")+ " "+ moment().format("YYYY"),
                content: "Hola",
            },
            {
                title: "Prueba de titulo 3",
                date: "Publicado el dia" + " "+moment().date() + " de " + moment().format("MMMM")+ " "+ moment().format("YYYY"),
                content: "Hola",
            },
            {
                title: "Prueba de titulo 4",
                date: "Publicado el dia" + " "+moment().date() + " de " + moment().format("MMMM")+ " "+ moment().format("YYYY"),
                content: "Hola",
            }

        ];
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

    }

   

       
      

        // posts.forEach((item, index) =>{
        //         var post=`
        //         <article class="posts">
               
        //         <h3>${item.title}</h3>
        //         <img src="../ProyetoP/img/halooo.jpg" alt="" class="emily">
        //         <span class="date">Mas detalles..</span>
        //         <p>El desarrollo de las partidas es dinámico e intuitivo y siempre hay un asunto que atender. 
        //             A veces se trata de un aliado que necesita cobertura, otras es el riesgo de perder 
        //             el control de una zona y luego está la siempre tentadora oportunidad de derribar a un rival
        //              de la nave que pilota, ocupar su puesto y elevar el nivel de destrucción desatado en pantalla.</p>
        //             <p>
        //              Porque la manera en la que el multijugador de Halo Infinite alcanza la excelencia 
        //            se debe a un conjunto de elementos muy bien ensamblados y, pese a que el aspecto técnico 
        //            juega a su favor y favorece el ritmo de las partidas, el peso del conjunto reposa en la
        //             variedad de armas, el sobresaliente diseño de niveles de todos los tamaños y una variedad 
        //             de modos absolutamente intachable.
        //          </p>
        //     </article>
        //         `;
        //         $("#posts").append(post);
        // })
        
        $("#posts").append();

        var theme= $("#theme");

        $("#to-yellow").click(function(){
            theme.attr("href", "css/temaHaloAmarrillo.css");
        })
        $("#to-orange").click(function(){
            theme.attr("href", "css/temaXboxNaranja.css");
        })
        $("#to-green").click(function(){
            theme.attr("href", "css/temaPlayVerde.css");
        })

        // scroll arriba de la web
        $(".subir").click(function(e){
            e.preventDefault();
             $('html, body').animate({
                scrollTop: 0
            }, 500)
            return false;
        })
        $("#login form").submit(function(){
           var guardar= $("#input_name").val();
           var guardarEmail = $("#input_email").val();
           var guardarPass = $("#input_pas").val();

           localStorage.setItem("guardar", guardar);
           localStorage.setItem("guardarEmail", guardarEmail);
           localStorage.setItem("guardarPass", guardarPass);
           
          


        });

       var traer = localStorage.getItem("guardar");

       if( traer != null && traer != "undefined"){
           var about_parrafo = $("#mostrar p");

        $("#mostrar p").html("<strong>Bienvenido:"+ " " + traer+ " <strong/>" );
        about_parrafo.append("<a href = '#' id='logout'>Cerrar Secion</a>");


        $("#login").hide();
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });

       }
    //    if(window.location.href.indexOf('about') >-1){
    //     $( "#accordion" ).accordion();
    //    }
    //    if(window.location.href.indexOf('reloj') >-1){
    //     var reloj = moment().format('MMMM Do YYYY, h:mm:ss a');
    //     $('#reloj').html(reloj);
    //    }

// validacion    

       if(window.location.href.indexOf('formulario') >-1){
          $("form input[name= 'date']").datepicker({
              dateFormat: 'dd-mm-yy'
          })
        $.validate({
               lang: 'es',
               errorMessagePosition:'top',
               scrollToTopError: true
           })

       }
    });