import { getMarkers } from 'backend/mapData.web';

$w.onReady(async function () {
    const markers = await getMarkers();

    const iframe = $w("#map1"); // Your iframe element in Wix Studio

    // Post message TO iframe inside its DOM element
    iframe.postMessage({
        type: "loadMarkers",
        data: {
            markers: markers
        }
    });
});
