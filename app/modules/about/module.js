angular.module( 'app.about' , [
    [
        'services/DependOnTestFactory.js' ,
        'services/AlsoDependOnTestFactory.js'
    ]
] ).controller( 'AboutController' , [
    '$scope' , '$ocLazyLoad' , '$injector' , 'DependOnTestFactory' , 'AlsoDependOnTestFactory' ,
    function ( $scope , $oll , $injector , d , ad ) {
        ad.alertHelloFromAlso();
        d.alertHello();

        $scope.open = function () {
            $oll.load( 'vendor/angular/ui-bootstrap-tpls.js' ).then( function () {
                var $modal = $injector.get( '$modal' );
                $scope.open = function () {
                    $modal.open( {
                        templateUrl : 'myModalContent.html'
                    } );
                };
                $scope.open();
            } );
        };
    }
] );
