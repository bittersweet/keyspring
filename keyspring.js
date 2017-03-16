console.log("Keyspring loaded");

chrome.commands.onCommand.addListener(function(command) {
  switch(command) {
    case 'call':
      call();
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
