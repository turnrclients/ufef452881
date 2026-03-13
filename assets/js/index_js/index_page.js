let currentSection = null;

function generateContent(id) {

    currentSection = id;

    const htmlContent = document.getElementById(id).innerText;

    AIBridge.send({
        type: "GENERATE_TEXT",
        payload: { text: htmlContent }
    });
}

AIBridge.onMessage(function (data) {

    if (data.type === "GENERATE_TEXT_RESULT") {

        document.getElementById(currentSection).innerHTML = data.payload.text;

    }

});