document.addEventListener('DOMContentLoaded', () => {
    const leftMenuFrame = document.getElementById('left_menu');

    if (leftMenuFrame) {
        leftMenuFrame.onload = function () {
            const frameDocument = leftMenuFrame.contentDocument || leftMenuFrame.contentWindow.document;
            const accStatementElement = frameDocument.getElementById('accstatement');

            if (accStatementElement) {
                accStatementElement.addEventListener('click', () => {
                    window.location.href = '/statement';
                });
            } else {
                console.error("The '.accstatement' element was not found in saved_resource(1).html.");
            }
        };
    } else {
        console.error("The frame with ID 'left_menu' was not found.");
    }
});
