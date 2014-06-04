/**
 * Created by mishrab on 6/4/14.
 */

document.addEventListener('DOMContentLoaded', function(){
    console.log('loaded!');

    $.post('/steven_post', {
        name: 'Steven'
    }).done(function(data){
        console.log(data);
    });

});
