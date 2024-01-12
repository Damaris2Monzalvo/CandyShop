$(document).ready(
    function() {


        let dulces=["America", "Europa","Oceanía", "Asia", "Africa",];
        
        $( "#palabra" ).autocomplete({
            source: dulces,
            minlength: 2
        });
        
        $('.produ').hide();
    

        $('#Btnbuscar').click (
            function() {

                let dulces=document.getElementById('palabra').value;

        if(dulces=="America"){
            $('.produ').hide();
            $('.America').show();
        }


        if(dulces=="Europa"){
            $('.produ').hide();
            $('.Europa').show();
        }


        if(dulces=="Oceanía"){
            $('.produ').hide();
            $('.Oceanía').show();
        }


        if(dulces=="Asia"){
            $('.produ').hide();
            $('.Asia').show();
        }


        if(dulces=="Africa"){
            $('.produ').hide();
            $('.Africa').show();
        }


            });

    });