
var homeApp = new Vue({
    el: '#app_home',
    data: {
        menus: [],
        breadcrumbs: []
    },
    methods: {
        clickMenuItem: function (id) {
            $(".menu-item").removeClass("active");
            $("#menu-" + id).addClass("active");
        }
    }
});

homeApp.menus = [
    {
        id: 1,
        title: "Home",
        url: "#!home/index"
    },
    {
        id: 2,
        title: "Profile",
        url: "#!profile/index"
    },
    {
        id: 3,
        title: "Message",
        url: "#!message/index"
    }
]

homeApp.breadcrumbs = [
    {
        title: "Home",
        url: '#',
        active: true
    }
];

function load(path) {
    $("#main-content").load(path, function () {

    });
}

Q.reg(/.*?/, function (path) {
    if (path) {
        load('views/' + path + ".html");
    }
}).init();