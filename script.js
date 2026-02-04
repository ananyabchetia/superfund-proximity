var main = document.querySelector("main");
var scrolly = main.querySelector("#scrolly");
var sticky = scrolly.querySelector(".sticky-thing");
var article = scrolly.querySelector("article");
var steps = article.querySelectorAll(".step");
var iframes = sticky.querySelectorAll("iframe");

var scroller = scrollama();

document.addEventListener('DOMContentLoaded', function () {
    const methodologyHeader = document.querySelector('.methodology-header');
    const methodologyContainer = document.querySelector('.methodology-container');

    if (methodologyHeader && methodologyContainer) {
        methodologyHeader.addEventListener('click', function () {
            methodologyContainer.classList.toggle('active');
        });
    }
});

function handleStepEnter(response) {
    var el = response.element;

    // Remove is-active from all steps
    steps.forEach(step => step.classList.remove('is-active'));
    el.classList.add('is-active');

    // Update the step number
    sticky.querySelector("p").innerText = el.dataset.step;

    // Handle iframe transitions
    var targetIframe = el.dataset.iframe;

    iframes.forEach(iframe => {
        if (iframe.id === targetIframe) {
            iframe.classList.add('active');
        } else {
            iframe.classList.remove('active');
        }
    });
}

function init() {
    scroller
        .setup({
            step: "#scrolly article .step",
            offset: 0.70,
            debug: false
        })
        .onStepEnter(handleStepEnter);

    window.addEventListener("resize", scroller.resize);
}

init();