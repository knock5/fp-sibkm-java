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
