console.log("Keyspring loaded");

chrome.commands.onCommand.addListener(function(command) {
  console.log('received command: ' + command);

  switch(command) {
    case 'call':
      call();
      break;
    case 'newTicket':
      newTicket();
      break;
    case 'selectPhone':
      selectPhone();
      break;
    case 'phoneAndAddTags':
      phoneAndAddTags();
      break;
  }
});

function call() {
  console.log("calling");

  try {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendMessage(tab.id, {action: "getSource"}, function(source) {
        console.log(tab, source)

        var script = 'document.querySelectorAll(".contactInfo a")[0].click();';
        chrome.tabs.executeScript(tab.id,{code: script});
      });
    });
  }
  catch (ex) {
    alert(ex);
  }
}

function newTicket() {
  console.log('newTicket');

  try {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendMessage(tab.id, {action: "getSource"}, function(source) {
        console.log(tab, source)

        var script = 'document.querySelectorAll("#newConvoBtn")[0].click();';
        chrome.tabs.executeScript(tab.id,{code: script});
      });
    });
  }
  catch (ex) {
    alert(ex);
  }
}

function selectPhone() {
  console.log('selectPhone');

  try {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendMessage(tab.id, {action: "getSource"}, function(source) {
        console.log(tab, source)
        console.log('mark');
        console.log(window.location);

        var script = 'document.querySelectorAll("#btn-Phone")[0].click();';
        chrome.tabs.executeScript(tab.id,{code: script});

        var script = 'document.querySelectorAll(".redactor_redactor.redactor_editor")[0].focus()';
        chrome.tabs.executeScript(tab.id,{code: script});
      });
    });
  }
  catch (ex) {
    alert(ex);
  }
  // $(".redactor_redactor.redactor_editor").focus() works
}

function phoneAndAddTags() {
  console.log('phoneAndAddTags');

  try {
    chrome.tabs.getSelected(null, function (tab) {
      chrome.tabs.sendMessage(tab.id, {action: "getSource"}, function(source) {
        console.log('injecting add_tags.js');
        chrome.tabs.executeScript(tab.id, {file: "add_tags.js"});
        console.log('injecting done');
      });
    });
  }
  catch (ex) {
    alert(ex);
  }
}
