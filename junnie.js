var appLocation = document.getElementsByTagName("cloudflare-app");
for (var index = 0; index < appLocation.length; index++) {
	if(appLocation[index].innerHTML.includes('junnie')) {	
		appLocation[index].innerHTML = appLocation[index].innerHTML.replace('<script src="https://jonganz.com/junnie.js"></script>', '<p>Brought to you by junnie</p>');
	}
}
