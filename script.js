"use strict";

$(document).ready (() => {

    $.get("https://www.reddit.com/r/EarthPorn.json").then((response) => {
        console.log(response);
        const children = response.data.children;
        for (let i = 0; i<10; i++) {
            console.log(children[i]);
            $("body").append(`
            <section>
                <h3>${children[i].data.title}</h3>
                <img src = "${children[i].data.preview.images["0"].source.url}">
                <a href = "${children[i].data.url}">Click for Link to Photo Source</a>
            </section>    
            `);
        }
    });

});