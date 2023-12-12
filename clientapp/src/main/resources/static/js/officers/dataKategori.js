$(document).ready(function () {
  $.ajax({
    url: "/api/category",
    method: "GET",
    dataType: "JSON",
    success: (res) => {
      // Set total data
      $("#totalDataKategori").text(res.length);

      // data content coomplaint
      res.map((data) => {
        $("#contentMenu").append(`
        <div class="card my-3">
          <div class="card-header bg-dark d-flex gap-3 align-items-center text-white">
            <span class="id-kategori p-2 rounded">#${data.id}</span>
            <span class="title-card">${data.name}</span>
          </div>
          <div class="card-body">
            <p class="card-text">${data.description}</p>
            <!-- Button trigger modal update -->
            <button
              type="button"
              class="btn btn-outline-warning btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#updateCategoryModal"
              onclick="updateCategory(${data.id})"
              title="edit"
            >
              Edit
              <i class="bi bi-pencil-square"></i>
            </button>
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

// tambah kategori
$("#create-category").click((event) => {
  event.preventDefault();

  let valueName = $("#category-name").val();
  let valueDescript = $("#category-description").val();
  console.log(valueName);
  console.log(valueDescript);

  $.ajax({
    method: "POST",
    url: "/api/category",
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify({
      name: valueName,
      descript: valueDescript,
    }),

    success: (res) => {
      // console.log(res);
      $("#createCategoryModal").modal("hide");
      $("#contentMenu").ajax.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Kategori berhasil di simpan!",
        showConfirmButton: false,
        timer: 2000,
      });
      $("#category-name").val("");
      $("#category-description").val("");
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

// edit kategori
function updateCategory(id) {
  $.ajax({
    method: "GET",
    url: "/api/category/" + id,
    dataType: "JSON",
    contentType: "application/json",
    success: (res) => {
      $("#update-id").val(res.id);
      $("#update-name").val(res.name);
      $("#update-description").val(res.description);
    },
    error: (err) => {
      console.log(err);
    },
  });
}

$("#update-category").click((event) => {
  event.preventDefault();

  let valueId = $("#update-id").val();
  let valueName = $("#update-name").val();
  let valueDescript = $("#update-description").val();

  $.ajax({
    method: "PUT",
    url: "/api/category/update/" + valueId,
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify({
      name: valueName,
      descript: valueDescript,
    }),
    success: (res) => {
      // console.log(res);
      $("#updateCategoryModal").modal("hide");
      $("#contentMenu").ajax.reload();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Kategori berhasil di edit!",
        showConfirmButton: false,
        timer: 2000,
      });
      $("#category-name").val("");
      $("#category-description").val("");
    },
    error: (err) => {
      console.error(err);
    },
  });
});

// hapus kategori
function deleteCategory(id) {
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
        url: "/api/category/" + id,
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


