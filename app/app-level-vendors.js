(function ( document ) {
    var vendorList = [
        'vendor/angular/angular.js' ,

        // if you need fake http backend, then uncomment this line,
        // and write your fake http backend in `test/protractor.conf.js`
        //'../test/angular-mocks.js' ,
        'vendor/angular/ocLazyLoad.js' ,
        'vendor/angular/angular-touch.js' ,
        'vendor/angular/angular-ui-router.js'
    ];

    var str = '';
    vendorList.forEach( function ( vendor ) {
        str += '<script src="' + vendor + '"></script>';
    } );
    document.write( str );
}( document ));

