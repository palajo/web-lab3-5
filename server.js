const express = require('express');

const app = express();

app.get('/api/animals', (req, res) => {

    const animals = [
        {
            id: 1,
            image: "https://ewscripps.brightspotcdn.com/dims4/default/f50029c/2147483647/strip/true/crop/1236x695+0+244/resize/1280x720!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F3a%2F53%2Fddf79cc54e61934daefdbfd2aab2%2Fasdm-ai-kitten-8-wks-2.jpg",
            title: "Ocelot",
            description: "It lives in South and Central America, as far up as Mexico. It has been reported as far north as Texas.",
            price: 250
        },
        {
            id: 2,
            image: "https://scx2.b-cdn.net/gfx/news/2019/thesundarban.jpg",
            title: "Tiger",
            description: "The tiger (Panthera tigris) is the largest extant cat species and a member of the genus Panthera.",
            price: 300
        },
        {
            id: 3,
            image: "https://i.guim.co.uk/img/media/19e048685db029092e5999e0b393e8318dacf87b/130_238_4779_2867/master/4779.jpg?width=1200&quality=85&auto=format&fit=max&s=4139d4513a89120879cf662e7d108fba",
            title: "Lion",
            description: "The lion (Panthera leo) is a species in the family Felidae and a member of the genus Panthera.",
            price: 230
        },
        {
            id: 4,
            image: "https://images.theconversation.com/files/230552/original/file-20180803-41366-8x4waf.JPG?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip",
            title: "Elephant",
            description: "Elephants are mammals of the family Elephantidae and the largest existing land animals.",
            price: 750
        },
        {
            id: 5,
            image: "https://relaunch.sonova.com/cdn/ff/-6ughzIH0jAAtvVW45hWwlrxQYUbhYVEcMBxb4dHt7I/1595638191/public/styles/header_image_tablet/public/2019-07/shutterstock_253580635_square.jpg?itok=TwBeTHTY",
            title: "Frog",
            description: "A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians composing the order Anura.",
            price: 5
        },
        {
            id: 6,
            image: "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iKIWgaiJUtss/v2/1000x-1.jpg",
            title: "Penguin",
            description: "Penguins are a group of aquatic flightless birds. They live almost exclusively in the Southern Hemisphere, with only one species.",
            price: 50
        }
    ];

    res.json(animals);
});

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

