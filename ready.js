$(document).ready((evt) => {
    let left = $("#textarealeft").val(),
        right = $("#textarearight").val();
    if (left.length > 0 && right.length > 0) {
        $("#compare").focus().click();
    }
});