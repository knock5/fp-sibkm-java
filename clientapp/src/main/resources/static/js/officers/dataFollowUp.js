const urlFU = "api/followUp";

$(document).ready(function () {
  $("#tableFollowUp").DataTable({
    ajax: {
      url: urlFU,
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
      { data: "complaint.date", className: "text-center" },
      { data: "complaint.id", className: "text-center" },
      { data: "complaint.title", className: "text-center" },
      { data: "followUpDate", className: "text-center" },
      { data: "followUpNotes" },
      { data: "user.username", className: "text-center" },
      {
        data: null,
        render: (data) => {
          return `<span class="badge badge-pill ${data.complaint.status.name}">${data.complaint.status.name}</span>`;
        },
      },
    ],
  });
});
