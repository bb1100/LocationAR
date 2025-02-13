window.onload = () => {
    let testEntityAdded = false;
    let latOffset = 0.001;

    const el = document.querySelector("[gps-new-camera]");

    document.addEventListener('DOMContentLoaded', function(){
        alert = function(){};
    }, false);

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);


            const entity = document.createElement("a-asset-item");
            entity.setAttribute("scale", {
                x: 20, 
                y: 20,
                z: 20
            });
            // entity.setAttribute('material', { color: 'red' } );
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + latOffset,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;


        function floatAnimation() {
            t += 0.01;
            requestAnimationFrame(floatAnimation);
            entity.setAttribute("position", "3 " + (Math.sin(t * 2) + 1) + " 0");
          }
        floatAnimation();
    });
};