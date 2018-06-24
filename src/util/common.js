/**
* 引数が「空」かどうか判定する
* @type {object} _var 判定対象
*/
function isEmpty( _var ) {
  if ( _var == null ) {
    // typeof null -> object : for hack a bug of ECMAScript
    return true;
  }
  switch( typeof _var ) {
    case 'object':
      if ( Array.isArray( _var ) ) {
        // When object is array:
        return ( _var.length === 0 );
      } else {
        // When object is not array:
        if ( Object.keys( _var ).length > 0 || Object.getOwnPropertySymbols(_var).length > 0 ) {
          return false;
        } else
        if ( _var.valueOf().length !== undefined ) {
          return ( _var.valueOf().length === 0 );
        } else
        if ( typeof _var.valueOf() !== 'object' ) {
          return is_empty( _var.valueOf() );
        } else {
          return true;
        }
      }
    case 'string':
      return ( _var === '' );
    case 'number':
      return ( _var == 0 );
    case 'boolean':
      return ! _var;
    case 'undefined':
    case 'null':
      return true;
    case 'symbol': // Since ECMAScript6
    case 'function':
    default:
      return false;
  }
}; // End of is_empty()
