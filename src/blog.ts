type Restaurant = {
	name: string;
	location: string;
	link: string;
};

const persons: Restaurant[] = [
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
	const container = document.getElementById("blog");
	persons.forEach(restaurant => {
		console.log(restaurant)
		const p = document.createElement("div");
		p.innerHTML = `<p>Name: <a href=${restaurant.link}>${restaurant.name}</a></p>` + `<p>Location: ${restaurant.location}</p>`;
		container?.append(p);
	});
}

blog();
