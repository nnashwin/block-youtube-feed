'use strict'
function removeYoutubeVideos () {
    var pageContainer = document.getElementById('feed-main-what_to_watch')
    if (pageContainer) {
        pageContainer.remove()
    }

    var brandedContent = document.getElementById('branded-page-v2-secondary-col')
    if (brandedContent) {
        brandedContent.remove()
    }

    var recommendedVideos = document.getElementById("watch7-sidebar-modules")
    if (recommendedVideos) {
        recommendedVideos.remove()
    }
}

removeYoutubeVideos()

// dom.readyState

document.addEventListener("DOMContentLoaded", function (event) {
    console.log(event)
    removeYoutubeVideos()
}, false)

// document.readyState()



