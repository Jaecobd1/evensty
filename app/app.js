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