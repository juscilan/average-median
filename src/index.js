const ListIsEven = ( list ) => list.length % 2 === 0 ? true : false;
    
const sortListAsc = ( list = [] ) => list.sort( (a, b) =>  { a - b } );
    
const calculate = (list = []) => {
    
    const newList = sortListAsc( list );
    
    if( ListIsEven( newList )) {
        return ( newList[ ( newList.length / 2 ) ] + newList[ ( newList.length / 2 - 1 ) ] ) / 2;
    } 
    
    return newList [( newList.length -1 ) / 2 ];
}

export { calculate }
