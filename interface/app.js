function resultsLandlord() {
    if (typeof resultsViz !== 'undefined') {
        resultsViz.getWorkbook().revertAllAsync();
        resultsViz.dispose()
    }
    var vizDiv = document.getElementById('results-viz');
    var vizURL = "https://public.tableau.com/views/landlord/Landlord?:embed=y&:display_count=no&publish=yes";
    var options = {
        hideTabs: true,
        hideToolbar: false,
        "Persona": "Landlord"
    };

    window.resultsViz = new tableauSoftware.Viz(vizDiv, vizURL, options);
}

function resultsFlipper() {
    if (typeof resultsViz !== 'undefined') {
        resultsViz.getWorkbook().revertAllAsync();
        resultsViz.dispose()
    }
    var vizDiv = document.getElementById('results-viz');
    var vizURL = "https://public.tableau.com/views/flipper/Flipper?:embed=y&:display_count=no&publish=yes";
    var options = {
        hideTabs: true,
        hideToolbar: false,
        "Persona": "Flipper"
    };

    window.resultsViz = new tableauSoftware.Viz(vizDiv, vizURL, options);
}