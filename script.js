window.addEventListener('load', event => {

    document.querySelector('button').addEventListener('click', event => {

        document.querySelector('section>header').style = "font-size: 5.5em;"

        setTimeout(() => {
            document.querySelector('section>header').style = "font-size: 3em;"
        }, 1000);

    });
});