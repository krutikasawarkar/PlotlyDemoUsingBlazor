var blazorInterop = blazorInterop || {};

blazorInterop.plottester = function plottester(data1, data2) {
    TESTER = document.getElementById('tester');

    Plotly.plot(TESTER, [{
        x: data1,
        y: data2
    }], {
        margin: { t: 0 }
    }, { showSendToCloud: true });
}


blazorInterop.logToConsoleTable = function (obj) {
    console.table(obj);
}

////just an example of how to access this fucntion
//window.blazorInterop.plottester   