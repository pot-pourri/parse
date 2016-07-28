
/**
 * Converts as many tokens as possible into an integer.
 * @param {Stream} stream - The stream to read from.
 */
export function integer ( stream ) {

	let i = 0 ;
	let s = 1 ;

	const token = stream.read( ) ;

	if ( token === null ) return null ;

	if ( token === '-' ) s = -1 ;
	else if ( token !== '+' ) stream.unread( token ) ;

	while ( true ) {

		const token = stream.read( ) ;

		if ( token === null ) return s * i ;

		if ( token < '0' || token > '9' ) {
			stream.unread( token ) ;
			return s * i ;
		}

		i *= 10 ;
		i += +token ;

	}

}
