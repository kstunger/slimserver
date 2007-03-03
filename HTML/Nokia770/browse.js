var url = 'status.html';

[% PROCESS skin_global.js %]

function changeThumbSize (action, albumArtDOMId, albumArtId) {
	if (action == 'shrink' ) {
		if (thumbSize == 50) {
			return;
		}
		thumbSize = thumbSize - 50;
	} else if (action == 'enlarge') {
		if (thumbSize == 700) {
			return;
		}
		thumbSize = thumbSize + 50;
	}
	thumbHrefTemplate = '/music/COVER/thumb_'+thumbSize+'x'+thumbSize+'_f_000000.jpg';
	var thumbHref = thumbHrefTemplate.replace('COVER', albumArtId);
	if ($(albumArtDOMId)) {
		$(albumArtDOMId).src = thumbHref;
	}
	setCookie( 'SlimServer-thumbSize', thumbSize );
}

function addItem(args) {
	getStatusData(args, showAdded);
}

window.onload= function() {
	refreshLibraryInfo();
}

