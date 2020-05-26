$(document).ready(function() {

    
    
    $('.offer__btn').click(function() {
        var content = $(this).closest(".find-block")
        var obgcontent = {
            title: content.find("h2").html(),
            image: content.find(".find-block__img")

        }
        
        $(".form_content__wrap-img").html(obgcontent.image[0].outerHTML) //img
        $(".form_content__wrap-text").html(obgcontent.title) //title
        console.log(obgcontent.image[0].outerHTML)
    
        // var path_img = $(this).data("img"); 	 
        // var path_content = $(this).closest('li').find(".content_show").html();
        // var path_img_popup = $(this).closest('#form_content').find(".img").html();
        
        // $('#form_content .form_content__wrap-text .form_content__wrap-p').html(path_content); 
    
        // $('#form_content .form_content__wrap-img img').attr('src', path_img);
        // $('#form_content .form_content__img').attr('data-img', path_img);
    
        $('#form_content').arcticmodal();
    
        // $('.form_content__img').click(function() {   
        //     var p = $(this).data("img")
        //     $(".form_img-size__img").attr('src', p)
            
        //     $('#form_img-size').arcticmodal({
        //         a
        //     })
        // });
    });
})


