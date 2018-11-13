
var homeApp = new Vue({
    el: '#app_home',
    data: {
        menus: []
    },
    methods: {

    }
});

homeApp.menus = [
    {
        title: "Home",
        url: "#!home"
    },
    {
        title: "Profile",
        url: "#!profile"
    },
    {
        title: "Message",
        url: "#!message"
    }
]



Q.reg(/.*?/, function (path) {

    if (path) {
        load('views/' + path + ".html");
    }

}).init();

function load(path) {
    console.log(path);
    $("#main-content").load(path, function () {

    });
}