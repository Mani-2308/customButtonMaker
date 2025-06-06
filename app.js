function applyButton() {
    let backgroundColorValue = document.getElementById("bgColorInput").value;
    document.getElementById("customButton").style.backgroundColor = backgroundColorValue;
    let fontColorValue = document.getElementById("fontColorInput").value;
    document.getElementById("customButton").style.color = fontColorValue;
    let fontSizeValue = document.getElementById("fontSizeInput").value;
    document.getElementById("customButton").style.fontSize = fontSizeValue;
    let fontWeightValue = document.getElementById("fontWeightInput").value;
    document.getElementById("customButton").style.fontWeight = fontWeightValue;
    let paddingValue = document.getElementById("paddingInput").value;
    document.getElementById("customButton").style.padding = paddingValue;
    let borderRadiusValue = document.getElementById("borderRadiusInput").value;
    document.getElementById("customButton").style.borderRadius = borderRadiusValue;
}
