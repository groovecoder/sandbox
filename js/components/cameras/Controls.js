var OrbitControls = require('../../vendor/OrbitControls');
var VRControls = require('../../vendor/VRControls');

var Controls = function( poem, properties ) {
	
	this.poem = poem;
	this.properties = properties;

	this.controls = new OrbitControls( this.poem.camera.object, this.poem.canvas );
  this.vrControls = new VRControls( this.poem.camera.object, this.poem.canvas );
	
	_.extend( this.controls, properties );
	
	this.poem.emitter.on( 'update', this.controls.update.bind( this.controls ) );
  this.poem.emitter.on( 'update', this.vrControls.update.bind( this.controls ) );
	
};

module.exports = Controls;
