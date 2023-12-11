function addComplaintOptions() {
    $.ajax({
        method: "GET",
        url: "/api/complaint",
        success: function (data) {
            const kategoriSelect = $("#kategori-complaint");
            kategoriSelect.empty();

            data.forEach(function (category) {
                kategoriSelect.append(`<option value="${category.id}">${category.name} - ${category.description}</option>`)
            });
        },
        error: function (err) {
            console.log("Gagal mengambil data kategori : " + err);
        }
    });
}

addComplaintOptions();

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
            people: valuePeople,
            status: valueStatus,
        }),

        success: (res) => {
            console.log(res);

            // Swal.fire({
            //     position: "center",
            //     icon: "success",
            //     title: "Laporan berhasil di dibuat!",
            //     showConfirmButton: false,
            //     timer: 2000,
            // });
            // $("#title-complaint").val("");
            // $("#laporan").val("");
            // $("#bukti-complaint").val("");
            // $("#date-complaint").val("");
            // $("#kategori-complaint").val("");
            // $("#people-complaint").val("");
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