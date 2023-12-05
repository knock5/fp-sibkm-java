$(document).ready(function () {
  // Munculkan konten sesuai dengan sidebar yang aktif
  $(".dash-link").on("click", function () {
    $(".dash-link").removeClass("active");
    $(this).addClass("active");
    // Dapatkan id sidebar yang aktif
    const targetId = $(this).attr("href");
    // Sembunyikan semua konten
    $(".dash-content > div").hide();
    // Tampilkan konten sesuai dengan id sidebar yang aktif
    $(targetId).show();

    const activeDiv = $(targetId).attr("id");
    console.log(activeDiv);
  });

  $.ajax({
    url: "api/people",
    method: "GET",
    contentType: "application/json",
    dataType: "JSON",
    success: (res) => {
      console.log(res);
    },
  });
});
