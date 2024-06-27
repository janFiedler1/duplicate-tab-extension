chrome.commands.onCommand.addListener(function(command) {
    if (command === "duplicate_tab") {
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        var activeTab = tabs[0];
        chrome.tabs.duplicate(activeTab.id);
      });
    }
  });