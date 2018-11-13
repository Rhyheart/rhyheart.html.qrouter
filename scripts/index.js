
var homeApp = new Vue({
    el: '#app_home',
    data: {
        menus: [],
        breadcrumbs: []
    },
    methods: {

    }
});

homeApp.menus = [
    {
        title: "Home",
        url: "#!home/index"
    },
    {
        title: "Profile",
        url: "#!profile/index"
    },
    {
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