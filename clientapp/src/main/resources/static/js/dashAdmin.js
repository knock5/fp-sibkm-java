let urlPeople = "/api/people";
let urlRole = "/api/role";

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
let getDataPeople = () => {
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
                title="Detail"
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
                title="Edit"
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
                title="Delete"
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
let getDataRole = () => {
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
      {
        data: "name",
        className: "text-center",
      },
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
                title="Edit"
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
                title="Delete"
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
let detailPeople = (id) => {
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

// Update People
let updatePeople = (id) => {
  $.ajax({
    method: "GET",
    url: `${urlPeople}/${id}`,
    dataType: "JSON",
    contentType: "application/json",
    success: (data) => {
      $("#userId").val(data.id);
      $("#userNik").val(data.nik);
      $("#userName").val(data.name);
      $("#userEmail").val(data.email);
      $("#userPhone").val(data.phone);
      $("#userJob").val(data.job);
      $("#userAddress").val(data.address);
      $("#userProfile").val(data.profile);
      // $("#usernameAcc").text(data.user.username);
      $("#userRole").text(data.user.roles[0].name);
      console.log(data);
    },
    error: () => {
      swal.fire({
        title: "Gagal!",
        text: "Gagal mengambil data kategori!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
  });
};

$("#update-people").click((event) => {
  event.preventDefault();

  let updateId = $("#userId").val();
  let updateNIK = $("#userNik").val();
  let updateName = $("#userName").val();
  let updateEmail = $("#userEmail").val();
  let updatePhone = $("#userPhone").val();
  let updateJob = $("#userJob").val();
  let updateAddress = $("#userAddress").val();
  let updateProfile = $("#userProfile").val();
  // let updateRoles = $("#userRole").val();
  // let updateUser = $("#userUserId").val();

  $.ajax({
    method: "PUT",
    url: "/api/people/update/" + updateId,
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify({
      nik: updateNIK,
      name: updateName,
      email : updateEmail,
      phone : updatePhone,
      job : updateJob,
      address : updateAddress,
      profile_picture : updateProfile,
      // roles : updateRoles,
      // user : {id : updateUser}
    }),
    success: (res) => {
      // console.log(res);
      
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User berhasil di edit!",
        showConfirmButton: false,
        timer: 2000,
      });
      // $("#userRole").text(updateRoles);
      $("#userNik").val("");
      $("#userName").val("");
      $("#userEmail").val("");
      $("#userPhone").val("");
      $("#userJob").val("");
      $("#userAddress").val("");
      $("#userProfile").val("");

      // $("#userUserId").val("");
      
      $("#updatePeopleModal").modal("hide");
      $("#tablePeople").DataTable().ajax.reload();
      // console.log(res);
      
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Gagal mengedit user!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
});


// Delete People
function deletePeople(id) {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You want delete this User?",
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "User has been deleted.", "success");
      // Delete
      $.ajax({
        method: "DELETE",
        url: `${urlPeople}/${id}`,
        dataType: "JSON",
        contentType: "application/json",
        success: function (res) {
          console.log(res);
          $("#tablePeople").DataTable().ajax.reload();
        },
        error: function (err) {
          console.log(err);
          Swal.fire("Error!", "Failed to delete user.", "error");
        },
      });
    }
  });
}

// Create Roles
$("#create-role").click((event) => {
  event.preventDefault();

  let valueName = $("#role-name").val();
  console.log(valueName);
    

  $.ajax({
      method: "POST",
      url: urlRole,
      dataType: "JSON",
      contentType: "application/json",
      data: JSON.stringify({
          name: valueName,
      }),
      success: (res) => {
          $("#createRoleModal").modal("hide");
          $("#tableRole").DataTable().ajax.reload();
          Swal.fire({
          position: "center",
          icon: "success",
          title: "Yeay You Have New Role...",
          showConfirmButton: false,
          timer: 2000,
          });
          $("#role-name").val("");
      },
      error: (err) => {
          console.log(err);
      },
  });
});

// Edit Role
let updateRole = (id) => {
  $.ajax({
    method: "GET",
    url: `${urlRole}/${id}`,
    dataType: "JSON",
    contentType: "application/json",
    success: (res) => {
      console.log(res);
      $("#update-id").val(res.id);
      $("#update-name").text(res.name);
    },
    error: () => {
      swal.fire({
        title: "Gagal!",
        text: "Gagal mengambil data kategori!",
        icon: "error",
        confirmButtonText: "Ok",
      });
    },
  });
};

$("#update-role").click((event) => {
  event.preventDefault();

  let valueId = $("#update-id").val();
  let valueName = $("#update-name").val();

  $.ajax({
    method: "PUT",
    url: "/api/role/update/" + valueId ,
    dataType: "JSON",
    contentType: "application/json",
    data: JSON.stringify({
      name: valueName,
    }),
    success: (res) => {
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Role Updated!",
        showConfirmButton: false,
        timer: 2000,
      });
      $("#update-name").val("");
      $("#updateRoleModal").modal("hide");
      $("#tableRole").DataTable().ajax.reload();
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Gagal Update!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
});

// Delete Role
function deleteRole(id) {
  console.log(id);
  Swal.fire({
    title: "Are you sure?",
    text: "You want delete this User?",
    icon: "warning",
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
    showCancelButton: true,
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Deleted!", "Role has been deleted.", "success");
      // Delete
      $.ajax({
        method: "DELETE",
        url: `${urlRole}/${id}`,
        dataType: "JSON",
        contentType: "application/json",
        success: function (res) {
          console.log(res);
          $("#tableRole").DataTable().ajax.reload();
        },
        error: function (err) {
          console.log(err);
          Swal.fire("Error!", "Failed to delete role.", "error");
        },
      });
    }
  });
}