// Clic auto sur les blocs entiers
$(document).on("click", ".trigger", function () {
    $src = $(this).closest(".block-link").find(".referal").attr("href");
    $target = $(this).closest(".block-link").find(".referal").attr("target");
    if ($src && $src != "undefined") {
        if ($target === "_blank") {
            window.open($src);

        } else {
            window.location.href = $src;
        }
    }
});

$lvl = $(".comp_jauge_2").attr("level");
console.log($lvl);