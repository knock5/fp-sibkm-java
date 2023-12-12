$(document).ready(function () {
  $.ajax({
    url: "/api/status",
    method: "GET",
    dataType: "JSON",
    success: (res) => {
      // Set total data
      $("#totalDataKategori").text(res.length);

      // data content coomplaint
      res.map((data, index) => {
        $("#contentMenu").append(`
        <div class="card my-3">
          <div class="card-header bg-dark d-flex gap-3 align-items-center text-white">
            <span class="id-kategori p-2 rounded">#${index + 1}</span>
            <span class="title-card">${data.name}</span>
          </div>
          <div class="card-body">
            <!-- Button trigger modal delete -->
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#deleteCategoryModal"
              onclick="deleteCategory(${data.id})"
              title="delete"
            >
              Delete
              <i class="bi bi-trash"></i>
            </button>
          </div>
        </div>
        `);
      });
    },
  });
});



  
  // tambah status
  $("#create-status").click((event) => {
    event.preventDefault();
  
    let valueName = $("#status-name").val();
    console.log(valueName);
  
    $.ajax({
      method: "POST",
      url: "/api/status",
      dataType: "JSON",
      contentType: "application/json",
      data: JSON.stringify({
        name: valueName,
      }),
  
      success: (res) => {
        // console.log(res);
        $("#createStatusModal").modal("hide");
        $("#contentMenu").ajax.reload();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Status berhasil di simpan!",
          showConfirmButton: false,
          timer: 2000,
        });
        $("#status-name").val("");
      },
      error: (err) => {
        // console.log(err);
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Gagal menyimpan kategori baru!",
          showConfirmButton: false,
          timer: 2000,
        });
      },
    });
  });
  
  // edit status
  // function updateStatus(id) {
  //   $.ajax({
  //     method: "GET",
  //     url: "/api/status/" + id,
  //     dataType: "JSON",
  //     contentType: "application/json",
  //     success: (res) => {
  //       $("#update-id").val(res.id);
  //       $("#update-name").val(res.name);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //   });
  // }
  
  // $("#update-status").click((event) => {
  //   event.preventDefault();
  
  //   let valueId = $("#update-id").val();
  //   let valueName = $("#update-name").val();
  
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/status/update/" + valueId,
  //     dataType: "JSON",
  //     contentType: "application/json",
  //     data: JSON.stringify({
  //       name: valueName,
  //     }),
  //     success: (res) => {
  //       // console.log(res);
  //       $("#updateStatusModal").modal("hide");
  //       $("#contentMenu").ajax.reload();
  //       Swal.fire({
  //         position: "center",
  //         icon: "success",
  //         title: "Status berhasil di edit!",
  //         showConfirmButton: false,
  //         timer: 2000,
  //       });
  //       $("#status-name").val("");
  //     },
  //     error: (err) => {
  //       console.error(err);
  //     },
  //   });
  // });
  
  // hapus status
  function deleteStatus(id) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Apakah anda yakin?",
      text: "Anda ingin menghapus kategori ini!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ya, hapus!",
      cancelButtonText: "Tidak, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        $.ajax({
          method: "DELETE",
          url: "/api/status/" + id,
          dataType: "JSON",
          contentType: "application/json",
          success: (res) => {
            swalWithBootstrapButtons.fire({
              title: "Terhapus!",
              text: "Kategori anda berhasil dihapus.",
              icon: "success"
            });
            // $("#contentMenu").DataTable().ajax.reload();
          },
          error: (err) => {
            console.error(err);
          },
        });
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "File kategori anda tetap aman :)",
          icon: "error"
        });
      }
    });
  };
  
  