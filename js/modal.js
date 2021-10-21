// get modal
const modalImg = document.querySelectorAll('.modal-open');

modalImg.forEach(function(img){ //function(btn) to img
    img.onclink = function(){
        var modal = img.getAttribute('data-modal');

        document.getElementById(modal).style.display = "block";

    };
});
// close buttons
var closeBtn = document.querySelectorAll('.modal-close');

closeBtn.forEach(function(btn){
    btn.onclink = function(){
        var modal = btn.closest('.modal').style.display = "none";
    };
});

window.onclink = function(e){
    if(e.target.className == "modal"){
        e.target.style.display = "none";
    }
}