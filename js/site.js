(function($) {
    "use strict";

    /** Form validation */
    var $contactForm = $("#contact-form");
    var $formSubmitButton = $("button.btn-submit");
    $contactForm.submit(function(e) {
        e.preventDefault();

        var $form = $(this);
        if ($form[0].checkValidity()) {
            var $cardContent = $contactForm.parent();
            $.post($form.attr("action"), $form.serialize()).then(
                function success() {
                    var successAlert = [
                        '<div class="mt-3 alert alert-success alert-dismissible fade show" role="alert">',
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
                        '<span aria-hidden="true">&times;</span>',
                        "</button>",
                        "<strong>Success!</strong> I have received your message and will reply to as soon as possible.",
                        "</div>"
                    ]
                        .join("")
                        .replace(/\s\s+/g, "");

                    $cardContent.append(successAlert);

                    $contactForm.trigger("reset");
                },
                function error() {
                    var errorAlert = [
                        '<div class="mt-3 alert alert-danger alert-dismissible fade show" role="alert">',
                        '<button type="button" class="close" data-dismiss="alert" aria-label="Close">',
                        '<span aria-hidden="true">&times;</span>',
                        "</button>",
                        "<strong>Oops!</strong> An error occurred while sending your message. Please try again or email us directly.",
                        "</div>"
                    ]
                        .join("")
                        .replace(/\s\s+/g, "");

                    $cardContent.append(errorAlert);

                    $contactForm.trigger("reset");

                    $formSubmitButton.attr("disabled", true);
                }
            );
        }
    });
    var inputs = document.querySelectorAll("input, select, textarea");
    inputs.forEach(function(input) {
        var $input = $(input);
        var $formGroup = $input.parents(".form-group");
        var $feedback = $formGroup.find(".form-control-feedback");

        input.addEventListener("input", function() {
            if (input.validity.valid) {
                $formGroup.removeClass("has-danger");
            } else {
                $formGroup.addClass("has-danger");
                if (input.validity.typeMismatch && $input.attr("name") == "email") {
                    $feedback.html("Please provide a valid email");
                }
                if (input.validity.valueMissing && $input.attr("name") == "email") {
                    $feedback.html("Email is required");
                }
                if (input.validity.valueMissing && $input.attr("name") == "phone") {
                    $feedback.html("Phone is required");
                }
                if (input.validity.patternMismatch && $input.attr("name") == "phone") {
                    $feedback.html("Please provide a phone of number of the form 999-999-9999");
                }
            }

            if ($contactForm[0].checkValidity()) {
                $formSubmitButton.removeAttr("disabled");
            } else {
                $formSubmitButton.attr("disabled", true);
            }
        });
    });
})(jQuery);
