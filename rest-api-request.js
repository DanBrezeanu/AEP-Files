    /* Toggle the state. ON -> OFF, or OFF -> ON */
    function toggleButton(buttonId)
    {
        var jsonItems;

        if (buttonId === "LightsButton")
            jsonItems = '{ "id": "Lights", "action": "toggle" }';
        else if (buttonId === "WaterButton")
            jsonItems = '{ "id": "Water", "action": "toggle" }';
        else
            return;

        var xmlhttp = new XMLHttpRequest();
        xmlhttp.open("POST", "/update", false);
        xmlhttp.setRequestHeader("Content-Type", "application/json");
        xmlhttp.send(jsonItems);
	location.reload();
    }

    function updateLightsState()
    {
        toggleButton("LightsButton");
    }

    function updateWaterState()
    {
        toggleButton("WaterButton");
    }
