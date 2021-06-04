// var modal = document.getElementById("myModal");
// var img = document.getElementById('s4img1');
// var modalImg = document.getElementById("img01");
// var captionText = document.getElementById("caption");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
//   captionText.innerHTML = this.alt;
// }


$(document).ready(function(){
    $(".thumb_image").click(function(){
        console.log("clicked");
        let image = $(this);
        $("#myModal").css("display","block")
        $("#img01").attr("src",image.attr("src"))

    }) 
$(".close").click(function() { 
    $("#myModal").hide();
  })
})