// add csrf token to ajax request
function addCSRFToken() {
  const token = $("meta[name='_csrf']").attr("content");
  console.log(token);
  const header = $("meta[name='_csrf_header']").attr("content");
  console.log(header);
  $(document).ajaxSend(function (e, xhr, options) {
    xhr.setRequestHeader(header, token);
  });
}

// Get Profile
const getUserProfile = () => {
  const profileId = $("#userId");
  const profileNik = $("#userNik");
  const profileName = $("#userName");
  const profileEmail = $("#userEmail");
  const profileAddress = $("#userAddress");
  const profilePhone = $("#userPhone");
  const profileJob = $("#userJob");
  const profilePicture = $("#userPicture")
  const profileUsernameAcc = $("#userUsername");

  $.ajax({
    url: "/profile",
    type: "GET",
    success: (res) => {
      profileId.val(res.id);
      profileNik.val(res.nik);
      profileName.val(res.name);
      profileEmail.val(res.email);
      profileAddress.val(res.address);
      profilePhone.val(res.phone);
      profileJob.val(res.job);
      profileUsernameAcc.val(res.user.username);
      profilePicture.attr('src', res.profile_picture);
      profilePicture.addClass('rounded-profile-image');
      console.log(res);
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

// Get Profile User
$("#getEditProfile").on("click", () => {
  $.ajax({
    url: `/api/people/${profileId.val()}`,
    type: "GET",
    success: (res) => {
      $("#u-userId").val(res.id);
      $("#u-userNik").val(res.nik)
      $("#u-userName").val(res.name);
      $("#u-userEmail").val(res.email);
      $("#u-userAddress").val(res.address);
      $("#u-userPhone").val(res.phone);
      $("#u-userJob").val(res.job);
      $("#u-userUsername").val(res.user.username);
      $("#u-userPicture").val(res.profile_picture);
      console.log(res);
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
});

// Update Profile
$("#u-profUser").click((e) => {
  e.preventDefault();

  const id = $("#u-userId").val();
  const nik = $("#u-userNik").val();
  const name = $("#u-userName").val();
  const email = $("#u-userEmail").val();
  const address = $("#u-userAddress").val();
  const phone = $("#u-userPhone").val();
  const job = $("#u-userJob").val();
  const picture = $("#u-userPicture").val();
  

  $.ajax({
    url: `/api/people/update/${id}`,
    method: "PUT",
    dataType: "JSON",
    contentType: "application/json",
    beforeSend: addCSRFToken(),
    data: JSON.stringify({
      nik : nik,
      name: name,
      email: email,
      address : address,
      phone: phone,
      job : job,
      profile_picture: picture,
    }),
    success: (res) => {
      console.log(res);
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Profile has been updated!",
        showConfirmButton: false,
        timer: 2000,
      });
      $("#updateProfile").modal("hide");
      $("#profileModal").modal("hide");
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sorry, profile not updated!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
});

// get account user
$("#getEditAccount").on("click", () => {
  $.ajax({
    url: `/api/user/${profileId.val()}`,
    type: "GET",
    success: (res) => {
      $("#u-accountId").val(res.id);
      $("#u-accountUsername").val(res.username);
      console.log(res);
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
});


// update user account
$("#u-accUser").click((e) => {
  e.preventDefault();

  const id = $("#u-accountId").val();
  const username = $("#u-accountUsername").val();
  const password = $("#u-accountPassword").val();

  $.ajax({
    url: `/api/user/${id}`,
    method: "PUT",
    dataType: "JSON",
    contentType: "application/json",
    beforeSend: addCSRFToken(),
    data: JSON.stringify({
      username: username,
      password: password,
      isEnabled: true,
      isAccountNonLocked: true,
    }),
    success: (res) => {
      $("#updateAccount").modal("hide");
      $("#profileModal").modal("hide");
    },
    error: () => {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Sorry, account not updated!",
        showConfirmButton: false,
        timer: 2000,
      });
    },
  });
});
};

$("#u-accountPassword").on("focus", () => {
  $("#eye").removeClass("hide-eye");
});

// show password
$("#eye").on("click", () => {
  const password = $("#u-accountPassword");
  const eye = $("#eye");
  if (password.attr("type") === "password") {
    password.attr("type", "text");
    eye.removeClass("bi-eye");
    eye.addClass("bi-eye-slash");
  } else {
    password.attr("type", "password");
    eye.removeClass("bi-eye-slash");
    eye.addClass("bi-eye");
  }
});

// update account user
$("#u-accUser").on("submit", (e) => {
  e.preventDefault();
});

