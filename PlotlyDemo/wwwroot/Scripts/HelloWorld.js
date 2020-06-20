function plottester(data1, data2) {
    TESTER = document.getElementById('tester');

    Plotly.plot(TESTER, [{
        x: data1,
        y: data2
    }], {
        margin: { t: 0 }
    }, { showSendToCloud: true });
}
