// Change Icon Menu - Hamburguesa XS
$("#btn-hamburguesa, #btn-ancla-xs-01, #btn-ancla-xs-02").click(function () {
  if ($("#navbarNavPsicoXS").hasClass("show")){
      $('#img-menu-hamburguesa').prop("src","images/menu-hamburguesa-xs.webp");
  }
  else{
      $('#img-menu-hamburguesa').prop("src","images/cerrar-menu-hamburguesa-xs.webp");
  }
});

// Change Icon Menu - Hamburguesa MD
$("#btn-hamburguesa-md, #btn-ancla-md-01, #btn-ancla-md-02, #btn-ancla-md-03").click(function () {
  if ($("#navbarNavPsicoMD").hasClass("show")){
      $('#img-menu-hamburguesa-md').prop("src","images/menu-hamburguesa-xs.webp");
  }
  else{
      $('#img-menu-hamburguesa-md').prop("src","images/cerrar-menu-hamburguesa-xs.webp");
  }
});

//Intercalar imagenes slider perfiles compañia
$('#sliderPruebasMovil').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  var directionSlide = ev.direction;

  // console.log(id)
  // console.log(ev.direction)
  
  switch (id) {
    case "prueba-xs-05":
      if(directionSlide === "left") {
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-05').addClass('animation-item-left');
      } else{
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-05').addClass('animation-item-right');
      }
      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-05').css("border", "2px solid #F09132");
      break;
    case "prueba-xs-04":
      if(directionSlide === "left") {
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-04').addClass('animation-item-left');
      } else{
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-04').addClass('animation-item-right');
      }
      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-04').css("border", "2px solid #522F7C");
      break;
    case "prueba-xs-03":
      if(directionSlide === "left") {
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-03').addClass('animation-item-left');
      } else{
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-03').addClass('animation-item-right');
      }
      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-03').css("border", "2px solid #2BAB90");
      break;
    case "prueba-xs-02":
      if(directionSlide === "left") {
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-02').addClass('animation-item-left');
      } else{
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-02').addClass('animation-item-right');
      }
      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-02').css("border", "2px solid #7B2627");
      break;
    default:
      if(directionSlide === "left") {
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-01').addClass('animation-item-left');
      } else{
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-left');
        $('#item-xs-05, #item-xs-04, #item-xs-03, #item-xs-02, #item-xs-01').removeClass('animation-item-right');
        $('#item-xs-01').addClass('animation-item-right');
      }
      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-01').css("border", "2px solid #035171");
      break;
  }
})

//BARRA DE CARGA SCROLL
window.onscroll = function() { myFunction() };

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 105;
  document.getElementById("progress-bar-xs").style.width = scrolled + "%";
}

// ICONO BTN MENU
$( '#btn-menu-nav-xs' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#btn-menu-nav-xs").hasClass('active')) {
    $('#btn-menu-nav-xs').addClass('active')
    $('#img-menu-btn-xs').prop('src',"images/ico-contraer-nav-xs.webp")
  } else{
    $('#btn-menu-nav-xs').removeClass('active')
    $('#img-menu-btn-xs').prop('src',"images/ico-desplegar-nav-xs.webp")
  }
})

// DROPDOWN MENU MOVIL
$( '#navbarDropdown' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#navbarDropdown").hasClass('active')) {
    $('#navbarDropdown').addClass('active')
    $('#img-ico-drop').prop('src',"images/ico-cerrar-nav-xs.webp")
  } else{
    $('#navbarDropdown').removeClass('active')
    $('#img-ico-drop').prop('src',"images/ico-ir-nav-xs.webp")
  }
})


// Transicion Targets Header
// function transicionTarget () {
//   let targetCandidato = document.querySelectorAll('.target')
//   let targetTransicion = document.querySelectorAll('.target-transicion')

//   targetCandidato[0].addEventListener("mouseover", function(){ 
//     targetTransicion[0].classList.add("candidato-activo")
//     if (targetTransicion[0].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[0].classList.add("hide-candidato")
//     targetTransicion[0].classList.remove("hide-candidato")
//   })
//   targetTransicion[0].addEventListener("mouseleave", function(){ 
//     targetTransicion[0].classList.add("hide-candidato")
//     if (targetTransicion[0].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     }
//     targetCandidato[0].classList.remove("hide-candidato")
//     targetTransicion[0].classList.remove("candidato-activo") 
//   })


//   targetCandidato[1].addEventListener("mouseover", function(){ 
//     targetTransicion[1].classList.add("candidato-activo")
//     if (targetTransicion[1].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[1].classList.add("hide-candidato")
//     targetTransicion[1].classList.remove("hide-candidato")
//   })
//   targetTransicion[1].addEventListener("mouseleave", function(){ 
//     targetTransicion[1].classList.add("hide-candidato") 
//     if (targetTransicion[1].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     }
//     targetCandidato[1].classList.remove("hide-candidato")
//     targetTransicion[1].classList.remove("candidato-activo")
//   })


//   targetCandidato[2].addEventListener("mouseover", function(){
//     targetTransicion[2].classList.add("candidato-activo")
//     if (targetTransicion[2].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[2].classList.add("hide-candidato")
//     targetTransicion[2].classList.remove("hide-candidato")
//   })
//   targetTransicion[2].addEventListener("mouseleave", function(){ 
//     targetTransicion[2].classList.add("hide-candidato")
//     if (targetTransicion[2].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     } 
//     targetCandidato[2].classList.remove("hide-candidato")
//     targetTransicion[2].classList.remove("candidato-activo")
//   })


//   targetCandidato[3].addEventListener("mouseover", function(){ 
//     targetTransicion[3].classList.add("candidato-activo")
//     if (targetTransicion[3].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[3].classList.add("hide-candidato")
//     targetTransicion[3].classList.remove("hide-candidato")
//   })
//   targetTransicion[3].addEventListener("mouseleave", function(){ 
//     targetTransicion[3].classList.add("hide-candidato")
//     if (targetTransicion[3].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     } 
//     targetCandidato[3].classList.remove("hide-candidato")
//     targetTransicion[3].classList.remove("candidato-activo")
//   })


//   targetCandidato[4].addEventListener("mouseover", function(){ 
//     targetTransicion[4].classList.add("candidato-activo")
//     if (targetTransicion[4].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[4].classList.add("hide-candidato")
//     targetTransicion[4].classList.remove("hide-candidato")
//   })
//   targetTransicion[4].addEventListener("mouseleave", function(){ 
//     targetTransicion[4].classList.add("hide-candidato")
//     if (targetTransicion[4].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     } 
//     targetCandidato[4].classList.remove("hide-candidato")
//     targetTransicion[4].classList.remove("candidato-activo")
//   })


//   targetCandidato[5].addEventListener("mouseover", function(){ 
//     targetTransicion[5].classList.add("candidato-activo")
//     if (targetTransicion[5].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[5].classList.add("hide-candidato")
//     targetTransicion[5].classList.remove("hide-candidato")
//   })
//   targetTransicion[5].addEventListener("mouseleave", function(){ 
//     targetTransicion[5].classList.add("hide-candidato")
//     if (targetTransicion[5].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     } 
//     targetCandidato[5].classList.remove("hide-candidato")
//     targetTransicion[5].classList.remove("candidato-activo")
//   })

  
//   targetCandidato[6].addEventListener("mouseover", function(){ 
//     targetTransicion[6].classList.add("candidato-activo")
//     if (targetTransicion[6].classList.contains("candidato-activo")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato-on")
//         target.classList.add("opacidad-candidato")
//       }
//     } 
//     targetCandidato[6].classList.add("hide-candidato")
//     targetTransicion[6].classList.remove("hide-candidato")
//   })
//   targetTransicion[6].addEventListener("mouseleave", function(){ 
//     targetTransicion[6].classList.add("hide-candidato")
//     if (targetTransicion[6].classList.contains("hide-candidato")){
//       for(var target of targetCandidato){
//         target.classList.remove("hide-candidato")
//         target.classList.remove("opacidad-candidato")
//         target.classList.add("opacidad-candidato-on")
//       }
//     } 
//     targetCandidato[6].classList.remove("hide-candidato")
//     targetTransicion[6].classList.remove("candidato-activo")
//   })
// }
// transicionTarget()

// Anclas ID suavizadas
$(document).on('click', 'a[href*=\\#]:not([href=\\#])', function (e) {
  e.preventDefault();
  $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top
  }, 700, 'linear');
});

$(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-01')
$('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
$(".btn_ver_reporte").addClass("bg-color-prueba-01")
$('.indicador-01').css("border", "2px solid #035171");

// $('#Carousel').on('slide.bs.carousel', function onSlide (ev) {
$('#sliderPruebasWeb').on('slide.bs.carousel', function onSlide (ev) {
  var id = ev.relatedTarget.id;
  // console.log(id)
  switch (id) {
    case "estado-item-02":
      // console.log(id)
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").removeClass('color-prueba-01 color-prueba-02 color-prueba-03 color-prueba-04 color-prueba-05')
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-02')

      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").addClass('d-none')
      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").removeClass('d-block animacion-contenido')
      $("#info-prueba-02").removeClass("d-none")
      $("#info-prueba-02").addClass("d-block animacion-contenido")

      $('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
      $(".btn_ver_reporte").addClass("bg-color-prueba-02")

      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-02').css("border", "2px solid #7B2627");
      break;
    case "estado-item-03":
      // console.log(id)
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").removeClass('color-prueba-01 color-prueba-02 color-prueba-03 color-prueba-04 color-prueba-05')
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-03')

      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").addClass('d-none')
      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").removeClass('d-block animacion-contenido animacion-contenido')
      $("#info-prueba-03").removeClass("d-none")
      $("#info-prueba-03").addClass("d-block animacion-contenido animacion-contenido")

      $('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
      $(".btn_ver_reporte").addClass("bg-color-prueba-03")

      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-03').css("border", "2px solid #2BAB90");
      break;
    case "estado-item-04":
      // console.log(id)
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").removeClass('color-prueba-01 color-prueba-02 color-prueba-03 color-prueba-04 color-prueba-05')
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-04')

      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").addClass('d-none')
      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").removeClass('d-block animacion-contenido')
      $("#info-prueba-04").removeClass("d-none")
      $("#info-prueba-04").addClass("d-block animacion-contenido")

      $('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
      $(".btn_ver_reporte").addClass("bg-color-prueba-04")

      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-04').css("border", "2px solid #522F7C");
      break;
    case "estado-item-05":
      // console.log(id)
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").removeClass('color-prueba-01 color-prueba-02 color-prueba-03 color-prueba-04 color-prueba-05')
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-05')

      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").addClass('d-none')
      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").removeClass('d-block animacion-contenido')
      $("#info-prueba-05").removeClass("d-none")
      $("#info-prueba-05").addClass("d-block animacion-contenido")

      $('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
      $(".btn_ver_reporte").addClass("bg-color-prueba-05")

      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-05').css("border", "2px solid #F09132");
      break;
    default:
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").removeClass('color-prueba-01 color-prueba-02 color-prueba-03 color-prueba-04 color-prueba-05')
      $(".tx-seccion-web-02, .tx-seccion-web-03, .tx-seccion-web-06, .tx-seccion-web-07").addClass('color-prueba-01')

      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").addClass('d-none')
      $("#info-prueba-01, #info-prueba-02, #info-prueba-03, #info-prueba-04, #info-prueba-05").removeClass('d-block animacion-contenido')
      $("#info-prueba-01").removeClass("d-none")
      $("#info-prueba-01").addClass("d-block animacion-contenido")

      $('.btn_ver_reporte').removeClass('bg-color-prueba-01 bg-color-prueba-02 bg-color-prueba-03 bg-color-prueba-04 bg-color-prueba-05')
      $(".btn_ver_reporte").addClass("bg-color-prueba-01")

      $('.indicador-01, .indicador-02, .indicador-03, .indicador-04, .indicador-05').css("border", "2px solid transparent");
      $('.indicador-01').css("border", "2px solid #035171");
      break;
  }
})

// MODAL VARIACIONES REPORTES
$('.bd-example-modal-lg.reporte-01.reporte-02.reporte-03.reporte-04.reporte-05').on('shown.bs.modal', function () {
  $('.modal-backdrop').removeClass('backdrop-contacto-soporte-web')
  $('.modal-backdrop').addClass('backdrop-reporte')
})

// MODAL VARIACIONES SOPORTE CONTACTO
$('.bd-example-modal-lg.contacto-soporte-web').on('shown.bs.modal', function () {
  $('.modal-backdrop').removeClass('backdrop-reporte')
  $('.modal-backdrop').addClass('backdrop-contacto-soporte-web')
})


$( '#hover-btn-contacto-02' ).click(function() {
  // $('#hover-btn-contacto-02').addClass('active')
  if(!$("#hover-btn-contacto-02").hasClass('active')) {
    $('#hover-btn-contacto-02').addClass('active')
  } else{
    $('#hover-btn-contacto-02').removeClass('active')
  }
})

// PAUSAR VIDEOS DE YOUTUBE CUANDO SE CIERRA EL POPUP
// function pauseVideo_01() { 
//   var video = $("#video-01").attr("src");
//   $("#video-01").attr("src","");
//   $("#video-01").attr("src",video);
// }
// function pauseVideo_02() { 
//   var video = $("#video-02").attr("src");
//   $("#video-02").attr("src","");
//   $("#video-02").attr("src",video);
// }


// VIDEOS INDEX PSICOLIANZA
function pauseVideo_01() { 
  var video = "video/PSICOALIANZA_SITP_Testimonial_evaluación_psicotécnica.mp4";
  $("#video-01").attr("src","");
  $("#video-01").attr("src",video);
}

function pauseVideo_02() { 
  var video = "video/PSICOALIANZA_FLOTA_LA_MACARENA_Testimonial_evaluación_psicotécnica.mp4";
  $("#video-02").attr("src","");
  $("#video-02").attr("src",video);
}




