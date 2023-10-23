var persons = [
    {
        name: "Joe's Pho",
        location: "15070 Hesperian Blvd, San Leandro, CA 94578",
        link: "pho.html"
    },
    {
        name: "Cholita Linda",
        location: "1337 Park St, Alameda, CA 94501",
        link: "taco.html"
    },
];
function blog() {
    var container = document.getElementById("blog");
    persons.forEach(function (restaurant) {
        console.log(restaurant);
        var p = document.createElement("div");
        p.innerHTML = "<p>Name: <a href=".concat(restaurant.link, ">").concat(restaurant.name, "</a></p>") + "<p>Location: ".concat(restaurant.location, "</p>");
        container === null || container === void 0 ? void 0 : container.append(p);
    });
}
blog();
