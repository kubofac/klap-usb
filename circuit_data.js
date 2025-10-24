// circuit_data.js
const circuitData = {
    "0": {
        name: "白糸S",
        startLineP1: [138.622532514261, 35.3081896115975],
        startLineP2: [138.622637774426, 35.3080490509764]
    },
    "1": {
        name: "富士C",
        startLineP1: [138.93342054530245, 35.36915226810625],
        startLineP2: [138.93342597911342, 35.369400744949374]
    },
    "2": {
        name: "つま恋",
        startLineP1: [138.05198121210296, 34.76643085806565],
        startLineP2: [138.05223275948995, 34.766356370794476]
    },
    "3": {
        name: "中井C",
        startLineP1: [139.219693211601, 35.35030582177035],
        startLineP2: [139.21950544739443, 35.35034913580831]
    }
};

function loadCircuitStartLineFromData(circuitId) {
    if (circuitData[circuitId]) {
        const data = circuitData[circuitId];
        document.getElementById('startLineP1Lon').value = data.startLineP1[0];
        document.getElementById('startLineP1Lat').value = data.startLineP1[1];
        document.getElementById('startLineP2Lon').value = data.startLineP2[0];
        document.getElementById('startLineP2Lat').value = data.startLineP2[1];
        return { p1: data.startLineP1, p2: data.startLineP2 };
    } else {
        document.getElementById('startLineP1Lon').value = '';
        document.getElementById('startLineP1Lat').value = '';
        document.getElementById('startLineP2Lon').value = '';
        document.getElementById('startLineP2Lat').value = '';
        return { p1: [0, 0], p2: [0, 0] };
    }
}