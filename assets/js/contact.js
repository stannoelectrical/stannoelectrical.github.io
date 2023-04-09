$("#contact-form").on("submit", (event) => {
    event.preventDefault();
    $.ajax({
        url: "./assets/php/send_mail.php",
        method: "POST",
        data: $("#contact-form").serialize(),
        success: function (result) {
            if (result == "success") {
                $(".contact-feedback .contact-success").show();
                $("#contact-form")[0].reset();
                setTimeout(() => {
                    $(".contact-feedback .contact-success").hide();
                }, 10000);
            } else {
                $(".contact-feedback .contact-error").show();
                setTimeout(() => {
                    $(".contact-feedback .contact-error").hide();
                }, 10000);
                console.log(result);
            }
        },
    });
    return false;
});
