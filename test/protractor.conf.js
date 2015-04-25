// conf.js
exports.config = {
    framework : 'jasmine2' ,
    directConnect : true ,
    specs : [ './e2e/**/*Spec.js' ] ,
    params : {
        //urlRoot : 'http://lmk123.github.io/demo-ocLazyLoad/cdn/'
        urlRoot : 'http://localhost:61111/oc-lazy-load/app/'
    } ,

    onPrepare : function () {
        browser.addMockModule( 'bootstrap' , function () {
            if ( angular.mock ) {
                angular.module( 'bootstrap' , [ 'ngMockE2E' , 'app' ] )
                    .run( [
                        '$httpBackend' ,
                        function ( $httpBackend ) {
                            // fake backend write here
                            $httpBackend.whenGET().passThrough();
                            $httpBackend.whenPOST().passThrough();
                        }
                    ] );
            }
        } );
    }
};

