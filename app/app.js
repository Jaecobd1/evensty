function initListeners() {
    $("a").click(function(e) {
        let btnId = e.currentTarget.id;
        console.log("clicked " + btnId);
        MODEL.changePageContent(btnId);
    })
}
$(document).ready(function() {
    initListeners();
    MODEL.changePageContent("home");

})

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
        navigator.serviceWorker
            .register("/~jdobler/final-project/serviceWorker.js")
            .then(res => console.log("service worker is Registered"))
            .catch(err => console.log("service worker not registered err:", err))

    });
}