angular.module( 'app.about' , [] ).controller( 'AboutController' , [
    '$scope' , '$ocLazyLoad' , '$injector' , function ( $scope , $oll , $injector ) {
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
