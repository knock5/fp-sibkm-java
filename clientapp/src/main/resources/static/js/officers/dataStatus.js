const urlStatus = "/api/status";

$(document).ready(function () {
  $("#tableStatus").DataTable({
    ajax: {
      url: urlStatus,
      method: "GET",
      dataSrc: "",
    },
    columns: [
      {
        data: null,
        className: "text-center",
        render: (data, type, row, meta) => {
          return meta.row + 1;
        },
      },
      { data: "id", className: "text-center" },
      { data: "name", className: "text-center" },
      {
        data: null,
        render: (data) => {
          return `
            <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap">
              <!-- Button trigger modal detail -->
              <button
                type="button"
                class="btn btn-info btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#detailStatusModal"
                onclick="detailStatus(${data.id})"
                title="detail"
              >
                <i class="bi bi-info-circle"></i>
              </button>
              <!-- Button trigger modal delete -->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#deleteStatusModal"
                onclick="deleteStatus(${data.id})"
                title="delete"
              >
                <i class="bi bi-trash"></i>
              </button>
            </div>
          `;
        },
      },
    ],
  });
});

// tambah status
$("#create-status").click((event) => {
  event.preventDefault();

  const valueName = $("#status-name").val();

  $.ajax({
    method: "POST",
    url: "/api/status",
    dataType: "JSON",
    contentType: "application/json",
    beforeSend: addCSRFToken(),
    data: JSON.stringify({
      name: valueName,
    }),

    success: () => {
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
    error: () => {
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
