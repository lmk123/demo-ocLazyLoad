(function ( angular ) {
    var app = angular.module( 'app' , [
        'oc.lazyLoad' ,
        'ui.router'
    ] );

    app.config( [
        '$ocLazyLoadProvider' , function ( $llp ) {
            $llp.config( {
                debug : true
            } );
        }
    ] );

    app.config( [
        '$stateProvider' , function ( $sp ) {
            $sp
                .state( 'index' , {
                    url : '/' ,
                    templateUrl : 'modules/index/view.html'
                } )
                .state( 'blog' , {
                    abstract : true ,
                    templateUrl : 'modules/blog/breadcrumb.html' ,
                    controller : [
                        '$scope' , function ( $s ) {
                            $s.breadcrumb = {
                                name : ''
                            };
                        }
                    ] ,
                    resolve : {
                        load : loadDeps( 'modules/blog/module.js' )
                    }
                } )
                .state( 'blog.list' , {
                    url : '/blog' ,
                    templateUrl : 'modules/blog/list.html' ,
                    controller : 'BlogController'
                } )
                .state( 'blog.edit' , {
                    parent : 'blog' ,
                    url : '/blog/edit/:id' ,
                    templateUrl : 'modules/blog/edit.html' ,
                    controller : 'BlogEditController'
                } )
                .state( 'about' , {
                    url : '/about' ,
                    templateUrl : 'modules/about/about.html' ,
                    controller : 'AboutController' ,
                    resolve : {
                        load : loadDeps( 'modules/about/module.js' )
                    }
                } );

            $sp.state( 'otherwise' , {
                url : '*path' ,
                template : '' ,
                controller : [
                    '$state' ,
                    function ( $state ) {
                        $state.go( 'index' );
                    }
                ]
            } );

            function loadDeps( deps ) {
                return [
                    '$ocLazyLoad' , function ( $ll ) {
                        return $ll.load( deps );
                    }
                ];
            }
        }
    ] );

    angular.module( 'bootstrap' , [ 'app' ] );
    angular.bootstrap( document , [ 'bootstrap' ] );
}( angular ));
