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
}
