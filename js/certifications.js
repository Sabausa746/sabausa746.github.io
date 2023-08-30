document.addEventListener("DOMContentLoaded", function () {
    let copyText = document.querySelector(".certificateID");

    copyText.addEventListener("click", function () {
        const textToCopy = copyText.textContent.split(' ')[1];
        const copiedAlert = document.getElementById('copiedAlert');

        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                copiedAlert.style.display = 'inline-block';
                setTimeout(() => {
                    copiedAlert.style.opacity = '1';
                }, 10);// Delay for smoother transition
                setTimeout(() => {
                    copiedAlert.style.opacity = '0';
                    setTimeout(() => {
                        copiedAlert.style.display = 'none';
                    }, 500)
                }, 2000);

            })
            .catch(err => {
                console.error("Unable to copy text:", err);
            });
    });
});