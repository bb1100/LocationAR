AFRAME.registerComponent('float-animation', {
    schema: {
      to: { type: 'number', default: 10 }, // End height (Y-axis)
      duration: { type: 'number', default: 2000 }, // Duration in ms
      easing: { type: 'string', default: 'easeInOutSine' } // Easing function
    },
  
    init: function () {
    let data = this.data;
    let el = this.el;
    let position = this.el.getAttribute('position');
      
      this.el.setAttribute('animation', {
        property: 'position.y',
        to: this.data.to,
        dur: this.data.duration,
        easing: this.data.easing,
        loop: true
      });
    }
  });



window.onload = () => {
    let testEntityAdded = false;
    const mapLatitude = 51.4076;
    const mapLongitude = 0.4293;
    let latOffset = 0.001;


    const camera = document.querySelector("[gps-new-camera]");

    document.addEventListener('DOMContentLoaded', function(){
        alert = function(){};
    }, false);


    camera.addEventListener("gps-camera-update-position", e => {
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
            entity.setAttribute("scale", "1 1 1");
            entity.setAttribute("gltf-model", "3D/rubber_duck.glb");
            entity.setAttribute('gps-new-entity-place', {
                latitude: mapLatitude + latOffset,
                longitude: mapLongitude
            });
            

            // const position = entity.getAttribute(position);
            // entity.setAttribute("float-animation", {
            //     property: "position.y",
            //     dir: "alternate",
            //     dur: 1000,
            //     easing: "easeInSine",
            //     loop: true,
            //     to: "0 2 0"
            // });

            // With three.js
            const time = new Date();
            entity.setAttribute("animation", {
                property: object3D.position.y, 
                to: 10, 
                dir: alternate, 
                dur: 2000, 
                loop: true
            });
            // entity.object3D.position.set(0, 100, 0);


            document.querySelector("a-scene").appendChild(entity);
            testEntityAdded = true;
        }
    });
};