const urlPeople = "/api/people";
const urlRole = "/api/role";

$(document).ready(function () {
  // first render data dashboard
  getDataPeople();
  getDataRole();

  // set active menu dashboard
  $(".dash-link").on("click", function () {
    $(".dash-link").removeClass("active");
    $(this).addClass("active");
  });

  // render user div
  $("#linkPeople").on("click", function () {
    $("#role").hide();
    $("#user").show();
  });

  // render officer div
  $("#linkRole").on("click", function () {
    $("#user").hide();
    $("#role").show();
  });
});

// function render data people
const getDataPeople = () => {
  $(`#tablePeople`).DataTable({
    ajax: {
      url: urlPeople,
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
      { data: "name", className: "text-center" },
      { data: "email", className: "text-center" },
      { data: "job", className: "text-center" },
      { data: "address", className: "text-center" },
      {
        data: "user.roles",
        className: "text-center",
        render: function (data, type, row) {
          let roles = "";
          if (data.length > 0) {
            roles += `<span class="badge bg-success">${data[0].name}</span>`;
          }
          return roles;
        },
      },
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
                data-bs-target="#detailPeopleModal"
                onclick="detailPeople(${data.id})"
                title="detail"
              >
                <i class="bi bi-info-circle"></i>
              </button>
              <!-- Button trigger modal update -->
              <button
                type="button"
                class="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#updatePeopleModal"
                onclick="updatePeople(${data.id})"
                title="edit"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
              <!-- Button trigger modal delete -->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#deletePeopleModal"
                onclick="deletePeople(${data.id})"
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

// function render data role
const getDataRole = () => {
  $(`#tableRole`).DataTable({
    ajax: {
      url: urlRole,
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
      { data: "name", className: "text-center" },
      {
        data: null,
        render: (data) => {
          return `
            <div class="d-flex justify-content-center align-items-center gap-2 flex-wrap">
              <!-- Button trigger modal update -->
              <button
                type="button"
                class="btn btn-warning btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#updateRoleModal"
                onclick="updateRole(${data.id})"
                title="edit"
              >
                <i class="bi bi-pencil-square"></i>
              </button>
              <!-- Button trigger modal delete -->
              <button
                type="button"
                class="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#deleteRoleModal"
                onclick="deleteRole(${data.id})"
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

// function detail people
const detailPeople = (id) => {
  $.ajax({
    url: `${urlPeople}/${id}`,
    method: "GET",
    success: (data) => {
      $("#userId").text(data.id);
      $("#userNik").text(data.nik);
      $("#userName").text(data.name);
      $("#userEmail").text(data.email);
      $("#userPhone").text(data.phone);
      $("#userJob").text(data.job);
      $("#userAddress").text(data.address);
      $("#usernameAcc").text(data.user.username);
      $("#userRole").text(data.user.roles[0].name);
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sorry, user not found!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
};
