$(document).ready(() => {
  $("#people-complaint").val("");
  $("#title-complaint").val("");
  $("#bukti-complaint").val("");
  $("#laporan").val("");

  $.ajax({
    url: "/api/category",
    method: "GET",
    dataType: "JSON",
    success: (res) => {
      res.forEach((item) => {
        $("#kategori-complaint").append(
          `<option value="${item.id}">${item.name}</option>`
        );
      });
    },
    error: (err) => {
      console.log(err);
    },
  });
});

$("#create-complaint").click((event) => {
  event.preventDefault();

  const valueTitle = $("#title-complaint").val();
  const valueBody = $("#laporan").val();
  const valueBukti = $("#bukti-complaint").val();
  const valueDate = new Date().toISOString().slice(0, 10);
  const valueCategory = $("#kategori-complaint").val();
  const valuePeople = $("#people-complaint").val();
  const valueStatus = $("#status-complaint").val();

  console.log(valuePeople);
  console.log(valueCategory);

  $.ajax({
    method: "POST",
    url: "/api/complaint",
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify({
      title: valueTitle,
      body: valueBody,
      attachment: valueBukti,
      date: valueDate,
      catgoryId: valueCategory,
      peopleId: valuePeople,
      statusId: valueStatus,
    }),
    success: (res) => {
      console.log(res);

      Swal.fire({
        position: "center",
        icon: "success",
        title: "Laporan berhasil di dibuat!",
        showConfirmButton: false,
        timer: 2000,
      });

      $("#title-complaint").val("");
      $("#laporan").val("");
      $("#bukti-complaint").val("");
      $("#kategori-complaint").val("");
      $("#people-complaint").val("");
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Gagal membuat laporan!!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
});
