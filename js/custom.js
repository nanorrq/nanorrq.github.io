const VERSION = "1.0.0-SNAPSHOT"
const VERSION_WRAPPER = "version-wrapper"

document.addEventListener('DOMContentLoaded', function () {
	const versionWrapper = document.getElementById(VERSION_WRAPPER);

	if (versionWrapper != undefined) {
		versionWrapper.innerText = VERSION;
    }
});
