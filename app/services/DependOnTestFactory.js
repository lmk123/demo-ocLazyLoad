angular.module( 'app.services.DependOnTestFactory' , [
    [ 'services/TestFactory.js' ]
] ).factory( 'DependOnTestFactory' , [
    'TestFactory' , function ( test ) {
        return {
            alertHello : function () {
                alert( 'I am in DependOnTestFactory.js: ' + test.hello );
            }
        };
    }
] );
