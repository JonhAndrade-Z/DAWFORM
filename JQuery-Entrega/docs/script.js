$(document).ready(function () {
  function validar() {
    let ok = true;

    let nombre = $("#nombre").val();
    if (nombre.length < 3) {
      $("#errorNombre").text("Debe tener al menos 3 letras.");
      $("#nombre").addClass("errorInput").removeClass("okInput");
      ok = false;
    } else {
      $("#errorNombre").text("");
      $("#nombre").addClass("okInput").removeClass("errorInput");
    }

    let correo = $("#correo").val();
    if (correo.length < 5) {
      $("#errorCorreo").text("Debe tener mínimo 5 caracteres.");
      $("#correo").addClass("errorInput").removeClass("okInput");
      ok = false;
    } else {
      $("#errorCorreo").text("");
      $("#correo").addClass("okInput").removeClass("errorInput");
    }

// Creamos los terminos de la contraseña
    let pass = $("#pass").val();
    if (pass.length < 6) {
      $("#errorPass").text("Debe tener mínimo 6 caracteres.");
      $("#pass").addClass("errorInput").removeClass("okInput");
      ok = false;
    } else {
      $("#errorPass").text("");
      $("#pass").addClass("okInput").removeClass("errorInput");
    }
    // validacion de la contraseña
    let pass2 = $("#pass2").val();
    if (pass !== pass2 || pass2.length === 0) {
      $("#errorPass2").text("No coincide.");
      $("#pass2").addClass("errorInput").removeClass("okInput");
      ok = false;
    } else {
      $("#errorPass2").text("");
      $("#pass2").addClass("okInput").removeClass("errorInput");
    }

// calculo para la verificacion de la edad
    let fecha = new Date($("#nacimiento").val());
    let hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    if (isNaN(fecha.getTime()) || edad < 18 || (edad === 18 && hoy < new Date(fecha.setFullYear(fecha.getFullYear() + 18)))) {
      $("#errorNacimiento").text("Debes tener al menos 18 años.");
      $("#nacimiento").addClass("errorInput").removeClass("okInput");
      ok = false;
    } else {
      $("#errorNacimiento").text("");
      $("#nacimiento").addClass("okInput").removeClass("errorInput");
    }
// Confirmacion del check del genero
    if (!$("input[name='genero']:checked").val()) {
      $("#errorGenero").text("Selecciona uno.");
      ok = false;
    } else {
      $("#errorGenero").text("");
    }
// Terminos y condiciones
    if (!$("#terminos").is(":checked")) {
      $("#errorTerminos").text("Acepta los términos.");
      ok = false;
    } else {
      $("#errorTerminos").text("");
    }

    $("#enviar").prop("disabled", !ok);
  }

  $("input").on("input change", validar);

  $("#formulario").on("submit", function () {
    validar();
    if (!$("#enviar").prop("disabled")) {
      $("#mensajeExito").show();
      $("#formulario")[0].reset();
      $("input").removeClass("okInput errorInput");
      $("#enviar").prop("disabled", true);
    }
  });
});