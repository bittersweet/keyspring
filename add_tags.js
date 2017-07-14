// https://stackoverflow.com/questions/39582108/sending-messages-to-page-javascript-from-a-content-script
// this code runs before page starts loading
var injected = document.documentElement.appendChild(document.createElement('script'));
injected.text = '(' + function() {
  // Click phone buttonp
  document.querySelectorAll("#btn-Phone")[0].click();

  // add tags
  $("#add-tags a").click();
  $("#tag").val("inbound, phone_outreach");
  App.layout.main.currentView.tags.currentView.addTags();
  $("#add-tags a").click();

  // Focus text area
  document.querySelectorAll(".redactor_redactor.redactor_editor")[0].focus();
} + ')()';
injected.remove();
