var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
        /*this.testzone = {};
        this.countDown = "";
        this.count = 0;*/
    },

    bindEvents: function() {
        document.addEventListener("deviceready", this.onDeviceReady, false);
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
    },

    onDeviceReady: function() {
        console.log("Ready");
        //window.addEventListener("batterycritical", app.onBatteryCritical, false);
        //document.addEventListener("menubutton", app.onMenuButton, false);
        app.testzone = document.getElementById("test-zone");
		
		theLocaleName();
		checkLanguage();
    },
    onPause: function() {
		theLocaleName();
		checkLanguage();
    },
    onResume: function() {
		theLocaleName();
		checkLanguage();
    },
	
	/************/
	
	theLocaleName: function(){
		navigator.globalization.getLocaleName(
			function (locale) {
				app.testzone.innerHTML += 'Locale: ' + locale.value + '\n';
			},
			function () {
				app.testzone.innerHTML += 'Error getting locale\n';
			}
		);
	},
	
	checkLanguage: function(){
		var language = navigator.globalization.getPreferredLanguage(
			function (language) {
				app.testzone.innerHTML += 'Locale: ' + language.value + '\n';
			},
			function () {
				app.testzone.innerHTML += 'Error getting language\n';
			}
		);
	}
};
