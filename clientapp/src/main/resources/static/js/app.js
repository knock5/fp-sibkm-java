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
