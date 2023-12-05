$(document).ready(function () {
  // Munculkan konten sesuai dengan sidebar yang aktif
  $(".dash-link").on("click", function () {
    $(".dash-link").removeClass("active");
    $(this).addClass("active");
    // Dapatkan id sidebar yang aktif
    var targetId = $(this).attr("href");
    // Sembunyikan semua konten
    $(".dash-content > div").hide();
    // Tampilkan konten sesuai dengan id sidebar yang aktif
    $(targetId).show();
  });
});
