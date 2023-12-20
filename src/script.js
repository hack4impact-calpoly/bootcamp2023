var images = {
    "ad": [
        "images/ad_0.png",
        "images/ad_1.png",
        "images/ad_2.png",
        "images/ad_3.png"
    ],
    "barrier": [
        "images/barrier_0.png",
        "images/barrier_1.png",
        "images/barrier_2.png"
    ],
    "school": [
        "images/school_0.png",
        "images/school_1.png",
        "images/school_2.png"
    ]
};

var descriptions = {
    "ad": [
        "collaborated w 6 others to create an Alzheimer's screening & treatement solution",
        "found an article correlating typing speed and frequency of pauses to cognitive impairment",
        "look! people would consider using an extension that monitored computer variable whilst screening for Alzheimer's",
        "prototyped an Alzheimer's early screening chrome extension"
    ],
    "barrier": [
        "found a hackathon focused on social justice issues",
        "researched racial disparities in mental health care",
        "designed this beautiful front page and educational game:)"
    ],
    "school": [
        "connected w a mentor who was creating a business that helped companies create hybrid work schedules during the pandemic",
        "inspired by my mentor's business model when brainstorming for the Congressional App Challenge",
        "coded a spin-off of my mentor's idea and made an app that created hybrid school schedules for elementary school admin"
    ]
};

function next(project_name) {
    var img = document.getElementById(project_name + "_image");
    var description = document.getElementById(project_name + "_description");
    
    var current_index = parseInt(img.src.slice(-5));

    if(current_index == (images[project_name].length-1)) {
        current_index = -1
    }

    // change the image to the next item in the list associated with the project
    img.src = images[project_name][current_index + 1];
    description.title = descriptions[project_name][current_index + 1];
}
