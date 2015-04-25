angular
    .module( 'app.blog' , [] )
    .factory( 'BlogFactory' , [
        '$q' ,
        function ( $q ) {
            var blogsList ,
                ls      = localStorage.blogsList ,
                factory = {
                    query : function () {
                        var def = $q.defer();
                        def.resolve( angular.copy( blogsList ) );
                        return def.promise;
                    } ,
                    'get' : function ( id ) {
                        var def = $q.defer();
                        findIndexBy( id ).then( function ( i ) {
                            def.resolve( angular.copy( blogsList[ i ] ) );
                        } );
                        return def.promise;
                    } ,
                    post : function ( blogObj ) {
                        var def = $q.defer();
                        if ( blogObj.id ) {
                            findIndexBy( blogObj.id ).then( function ( i ) {
                                blogsList[ i ] = blogObj;
                                save();
                            } );
                        } else {
                            blogObj.id = String( Math.random() );
                            blogsList.push( blogObj );
                            save();
                        }
                        def.resolve( blogObj );
                        return def.promise;
                    } ,
                    'delete' : function ( id ) {
                        var def = $q.defer();
                        findIndexBy( id ).then( function ( i ) {
                            def.resolve( blogsList.splice( i , 1 )[ 0 ] );
                            save();
                        } );
                        return def.promise;
                    }
                };

            if ( ls ) {
                blogsList = JSON.parse( ls );
            } else {
                blogsList = [
                    {
                        id : 'fgcfgcfgcfgcfg' ,
                        title : 'blog title 1' ,
                        content : 'This is the content for blog 1'
                    } ,
                    {
                        id : 'r5dt5r5drr' ,
                        title : 'blog title 2' ,
                        content : 'This is the content for blog 2'
                    }
                ];
                save();
            }

            return factory;

            function findIndexBy( id ) {
                var def = $q.defer();
                blogsList.some( function ( v , i ) {
                    if ( id === v.id ) {
                        def.resolve( i );
                        return true;
                    }
                } );
                return def.promise;
            }

            function save() {
                localStorage.blogsList = JSON.stringify( blogsList );
            }
        }
    ] )
    .controller( 'BlogController' , [
        '$scope' , 'BlogFactory' ,
        function ( $s , bf ) {
            $s.breadcrumb.name = '';
            $s.status = {
                loading : true
            };

            $s.delBlog = function ( index ) {
                bf.delete( $s.blogs.splice( index , 1 )[ 0 ].id );
            };

            bf.query().finally( function () {
                $s.status.loading = false;
            } ).then( function ( blogsList ) {
                $s.blogs = blogsList;
            } );
        }
    ] )
    .controller( 'BlogEditController' , [
        '$scope' , '$state' , '$stateParams' , 'BlogFactory' ,
        function ( $scope , $state , $sp , bf ) {

            $scope.save = function () {
                bf.post( $scope.blog ).then( function () {
                    $state.go( 'blog.list' );
                } );
            };

            if ( $sp.id ) {
                $scope.breadcrumb.name = 'Edit Blog';
                bf.get( $sp.id ).then( function ( blog ) {
                    $scope.blog = blog;
                } );
            } else {
                $scope.breadcrumb.name = 'Add Blog';
            }
        }
    ] );
