export const showNotification = (message) => {
  if(window.Notification && Notification.permission !== "denied") {
  	Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
  		var n = new Notification('Notification', {
  			body: message,
        icon: 'assets/images/transfer.jpeg'
  		});
      setTimeout(function() { n.close() }, 2000);
  	});
  }
}
