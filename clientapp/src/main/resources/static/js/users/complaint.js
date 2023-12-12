<<<<<<< HEAD
// function addComplaintOptions() {
//     $.ajax({
//         method: "GET",
//         url: "/api/complaint",
//         success: function (data) {
//             const kategoriSelect = $("#kategori-complaint");
//             kategoriSelect.empty();

//             data.forEach(function (category) {
//                 kategoriSelect.append(`<option value="${category.id}">${category.name} - ${category.description}</option>`)
//             });
//         },
//         error: function (err) {
//             console.log("Gagal mengambil data kategori : " + err);
//         }
//     });
// }


    let select = document.getElementById("kategori-complaint");
    $.ajax({
        method : "GET",
        url : "api/category",
        dataType : "JSON",
        contentType : "application/json",
        success : (res) => {
            console.log(res);
            for (let i in res){
                $(select).append(
                    `<option value = "${res[i].id}">${res[i].name}</option>`
                );
            }
            console.log(res);
        },
        error: (err) => {
            console.log("Gagal" + err);
        },
    });


    $("#create-complaint").click((event) => {
        event.preventDefault();
    
        let valueTitle = $("#title-complaint").val();
        let valueBody = $("#laporan").val();
        let valueBukti = $("#bukti-complaint").val();
        let valueDate = $("#date-complaint").val();
        let valueKategori = $("#kategori-complaint").val();
        let valuePeople = $("#people-complaint").val();
        let valueStatus = 1;
        console.log(valueTitle);
        console.log(valueBody);
        console.log(valueBukti);
        console.log(valueDate);
        console.log(valueKategori);
        console.log(valuePeople);
        console.log(valueStatus);
    
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
                category: {id: valueKategori},
                people: {id : valuePeople},
                status: valueStatus,
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
                $("#date-complaint").val("");
                $("#kategori-complaint").val("");
                $("#people-complaint").val("");
            },
            error: (err) => {
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



// addComplaintOptions();

=======
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
>>>>>>> 8b8938770c2746b824585625713719098f2cdd75
