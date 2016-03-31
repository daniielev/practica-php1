angular.module('practicaPHP01.controllers')
    /**
     * Inicia la sesión del usuario en el sistema.
     */
    .controller('LoginController', ['$scope', 'UserService', '$location',
        function ($scope, UserService, $location) {
            $scope.init = function() {
                console.debug('Login');

                /**
                 * TODO: Implementar
                 * Pasos
                 * - Verifique si el usuario tiene una sesión activa.
                 * - Maneje los siguientes escenarios:
                 *  - El usuario tiene una sesión activa, envie el usuario a la ruta de `home`.
                 *  - No tiene una sesión activa, permita que la pagina de inicio de sesión funcione normalmente.
                 * - En el segundo caso, permítale al usuario iniciar una sesión en el sistema.
                 * - Agregue las validaciones necesarias: contenido vacio, correo en formato de correo.
                 * - Provea mensajes de error descriptivos.
                 */

                // Checks if the user has an active session
                var isLoggedIn = UserService.isLoggedIn();

                if (isLoggedIn.success) {
                    $location.path("#/home");
                }

                $scope.loginUser = function () {
                    var user = {
                        email : $scope.user.email,
                        password : $scope.user.password
                    };

                    console.log(user);

                    if ($scope.loginForm.$valid) {
                        UserService.register(user);
                    }
                };
            };

            $scope.init();
        }]);
