console.log("hello");

var MODEL = (function() {
    var _homeContent = homeContent;
    var _aboutContent = aboutContent;
    var _galleryContent = galleryContent;
    var _gallery1Content = gallery1Content;
    var _gallery2Content = gallery2Content;
    var _blogContent = blogContent;


    function initListeners() {
        $("a").click(function(e) {
            let btnId = e.currentTarget.id;
            console.log("clicked " + btnId);
            MODEL.changePageContent(btnId);
        })
    }

    var _changePageContent = function(pageName) {
        let contentName = `${pageName}Content`;
        $("#app").html(eval(contentName));
        console.log(contentName);

        if (pageName == "home") {
            $('#nav').removeClass('dark');
            $('#logo').html(`<img src="./images/logo/logo-white.svg" alt="">`);
        } else {
            $('#nav').addClass('dark');
            $('#logo').html(`<img src="./images/logo/logo-black.svg" alt="">`);
        }

        initListeners();

    }

    return {
        changePageContent: _changePageContent,
    }
})();