angular.module( 'app.services.AlsoDependOnTestFactory' , [
    [ 'services/TestFactory.js' ]
] ).factory( 'AlsoDependOnTestFactory' , [
    'TestFactory' , function ( test ) {
        return {
            alertHelloFromAlso : function () {
                alert( 'I am in AlsoDependOnTestFactory.js: ' + test.hello );
            }
        };
    }
] );

