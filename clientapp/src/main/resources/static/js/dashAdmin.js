const urlPeople = "/api/people";

$(document).ready(function () {
  // first render data user
  const defaultRender = "user";
  getDataPeople(defaultRender);

  // set active menu dashboard
  $(".dash-link").on("click", function () {
    $(".dash-link").removeClass("active");
    $(this).addClass("active");
  });

  // render user div
  $("#linkUser").on("click", function () {
    $("#officer").hide();
    $("#user").show();
  });

  // render officer div
  $("#linkOfficer").on("click", function () {
    $("#user").hide();
    $("#officer").show();

    const targetRender = $("#officer").attr("id");

    getDataPeople(targetRender);
  });
});

const getDataPeople = (roleName) => {
  $(`#table-${roleName}`).DataTable({
    ajax: {
      url: `${urlPeople}/by-role/${roleName}`,
      method: "GET",
      dataSrc: "",
    },
    scrollX: 500,
    columns: [
      {
        data: null,
        className: "text-center",
        render: (data, type, row, meta) => {
          return meta.row + 1;
        },
      },
      { data: "nik", className: "text-capitalize" },
      { data: "name", className: "text-center" },
      { data: "email", className: "text-center" },
      { data: "phone", className: "text-center" },
      { data: "job", className: "text-center" },
      { data: "address", className: "text-center" },
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
                data-bs-target="#detailUserModal"
                onclick="detailUser(${data.id})"
                title="detail"
              >
                <i class="bi bi-info-circle"></i>
              </button>
              <!-- Button trigger modal update -->
              <button
                type="button"
                class="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#updateUserModal"
                onclick="updateUser(${data.id})"
                title="edit"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
              <!-- Button trigger modal delete -->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#deleteUserModal"
                onclick="deleteUser(${data.id})"
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
};
