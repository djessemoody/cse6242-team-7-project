window.onload=function() {
    var vizDiv = document.getElementById('viz');
    var vizURL = "https://public.tableau.com/views/poc_7/results?:embed=y&:display_count=yes&publish=yes";
    var options = {
    hideToolbar: true
    };
    viz = new tableauSoftware.Viz(vizDiv, vizURL, options);
    };

function resetToLandlord() { 
    workbook = viz.getWorkbook();
    workbook.changeParameterValueAsync('Persona',  'Landlord');
    workbook.changeParameterValueAsync('Home Sale Multiplier', '0.8');
    workbook.changeParameterValueAsync('Population Multiplier',  '0.8');
    workbook.changeParameterValueAsync('Wage Multiplier', '0.8');
    viz.refreshDataAsync();
};

function resetToFlipper() { 
    workbook = viz.getWorkbook();
    workbook.changeParameterValueAsync('Persona',  'Flipper');
    workbook.changeParameterValueAsync('Home Sale Multiplier', '0.65');
    workbook.changeParameterValueAsync('Population Multiplier',  '0.65');
    workbook.changeParameterValueAsync('Wage Multiplier', '0.65');
    viz.refreshDataAsync();
};

function resetToCustom() { 
    workbook = viz.getWorkbook();
    workbook.changeParameterValueAsync('Persona',  'Custom');
    workbook.changeParameterValueAsync('Home Sale Multiplier', '0.35');
    workbook.changeParameterValueAsync('Population Multiplier',  '0.35');
    workbook.changeParameterValueAsync('Wage Multiplier', '0.35');
    viz.refreshDataAsync();
};