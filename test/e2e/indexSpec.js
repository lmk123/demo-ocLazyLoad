describe( 'Test' , function () {

    it( 'will auto redirect to #/ when no match state' , function ( done ) {
        browser.get( browser.params.urlRoot + '#/babalbalababablala' );
        browser.sleep( 1000 ).then( function () {
            browser.getCurrentUrl().then( function ( url ) {
                expect( url.slice( url.lastIndexOf( '#' ) ) ).toBe( '#/' );
                done();
            } );
        } );
    } );
} );
