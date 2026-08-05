maptilersdk.config.apiKey = mapToken;


const map = new maptilersdk.Map({
  container: "map", // container's id or the HTML element to render the map
  style: maptilersdk.MapStyle.STREETS,
  center: coordinates,
  zoom: 10,
});

const popup = new maptilersdk.Popup({ offset: 25 })
  .setHTML(`
    <p style="margin:5px 0 0 0; color: #666; font-size: 0.8rem;">Exact location provided after booking</p>
  `);

const marker = new maptilersdk.Marker({ draggable: true,color:"red" })
.setLngLat(coordinates)
.setPopup(popup)
.addTo(map);

marker.on("dragend",()=>{
  const lngLat=marker.getLngLat();
  console.log("New coordinates",lngLat.lng,lngLat.lat);
})

