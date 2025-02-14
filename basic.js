window.onload = () => {
    let testEntityAdded = false;
    const mapLatitude = 51.4076;
    const mapLongitude = 0.4293;
    let latOffset = 0.001;

    let t =0;

    const el = document.querySelector("[gps-new-camera]");

    document.addEventListener('DOMContentLoaded', function(){
        alert = function(){};
    }, false);


    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            // alert(`Got first GPS position: lon ${e.detail.position.longitude} lat ${e.detail.position.latitude}`);

/*
            const entity = document.createElement("a-box");
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
*/

            const entity = document.createElement("a-entity");
            entity.setAttribute("scale", {x: 1, y: 1, z: 1});
            entity.setAttribute("gltf-model", "3D/rubber_duck.glb");
            entity.setAttribute('gps-new-entity-place', {
                latitude: mapLatitude + latOffset,
                longitude: mapLongitude
            });

            //    entity.setAttribute("animation", {property: position.y, dir: alternate, dur: 1000,
            //                    easing: easeInSine, loop: true, to: 30});


        }
        testEntityAdded = true;

        
    });
};