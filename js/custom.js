const VERSION = "1.0.0-SNAPSHOT"
const VERSION_WRAPPER = "version-wrapper"

<!--begin::OverlayScrollbars Configure-->
const SELECTOR_SIDEBAR_WRAPPER = '.sidebar-wrapper';
const Default = {
  scrollbarTheme: 'os-theme-light',
  scrollbarAutoHide: 'leave',
  scrollbarClickScroll: true,
};
document.addEventListener('DOMContentLoaded', function () {
  const sidebarWrapper = document.querySelector(SELECTOR_SIDEBAR_WRAPPER);
  if (sidebarWrapper && OverlayScrollbarsGlobal?.OverlayScrollbars !== undefined) {
	OverlayScrollbarsGlobal.OverlayScrollbars(sidebarWrapper, {
	  scrollbars: {
		theme: Default.scrollbarTheme,
		autoHide: Default.scrollbarAutoHide,
		clickScroll: Default.scrollbarClickScroll,
	  },
	});
  }
});
<!--end::OverlayScrollbars Configure-->

document.addEventListener('DOMContentLoaded', function () {
	const versionWrapper = document.getElementById(VERSION_WRAPPER);

	if (versionWrapper != undefined) {
		versionWrapper.innerText = VERSION;
    }
});

<!-- begin::Sortable-->
document.querySelectorAll('.connectedSortable').forEach((element) => 
	new Sortable(element, {
	  group: 'shared',
	  handle: '.card-header',
	})
);

const cardHeaders = document.querySelectorAll('.connectedSortable .card-header');
cardHeaders.forEach((cardHeader) => {
	cardHeader.style.cursor = 'move';
});
<!-- end::Sortable-->
