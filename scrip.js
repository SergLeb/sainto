window.addEventListener('DOMContentLoaded', () => {
    const anchors = document.querySelectorAll('.anchor');

    function onClick(e) {
        e.preventDefault();
        const { hash } = e.target;
        const block = document.querySelector(hash);

        const top = block.offsetTop - 85;

        window.scrollTo({
            top,
            left: 0,
            behavior: "smooth",
        });
    }

    anchors.forEach((anchor) => {
        anchor.addEventListener('click', onClick);
    });

});