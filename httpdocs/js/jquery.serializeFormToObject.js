$.fn.serializeFormToObject = function () {

  console.log( 'serializeFormToObject... ' );

  var o = {};
  var a = this.serializeArray();

  $.each( a, function () {
    if( o[this.name] !== undefined ) {
      if( !o[this.name].push ) {
        o[this.name] = [o[this.name]];
      }
      o[this.name].push( this.value || '' );
    }
    else {
      o[this.name] = this.value || '';
    }
  });

  this.find(':input').each(
    function(i, elem) {
      console.log( elem.name );
      if( o[elem.name] === undefined ) {
        o[elem.name] = false;
      }
    });

  console.log( o );

  return o;
};


