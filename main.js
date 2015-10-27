/**
 * Created by Jhoseph Arango on 27/10/2015.
 */
$(document).ready(function () {
   var estado = false;
   $('.btn-toggle').on('click', function () {
      $('.sessionToggle').slideToggle();
        if(estado == true){
            $(this).text("Abrir");
            $('body').css({
               "overflow":"auto"
            });
            estado = false;
        }else{
            $(this).text("Cerrar");
            $('body').css({
                "overflow":"hidden"
            });
            estado = true;
        }
   });
});