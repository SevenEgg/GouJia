angular.module('app.controllers', [])

.controller('page1Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goOkWork = function() {
            $state.go('page3');
        }

        $scope.goBalcList = function() {
            $state.go('page4');
        }

        $scope.goMadeList = function() {
            $state.go('page5');
        }

        $scope.goPay = function() {
            $state.go('page6');
        }

        $scope.goSecurity = function() {
            $state.go('page7');
        }

        $scope.goInsurance = function() {
            $state.go('page8');
        }

        $scope.goLoan = function() {
            $state.go('page9');
        }
    }
])

.controller('page2Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {

        $scope.data = {
            name: '',
            phone: '',
            city: ''
        };
        $scope.test = function() {
            var name = $scope.data.name;
            var phone = $scope.data.phone;

            if (name == '') {
                alert("姓名不能为空！");
                return false;
            }

            if (!(/^1[34578]\d{9}$/.test(phone))) {
                alert("手机号码有误，请重填");
                return false;
            }

            alert('提交成功，谢谢！');
            $scope.data.phone = '';
            $scope.data.name = '';
            $scope.data.city = '';
        }

        $scope.goHome = function() {
            $state.go('page1');
        }

    }
])

.controller('page3Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page4Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page5Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page6Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page9Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page7Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])

.controller('page8Ctrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $state) {
        $scope.goContact = function() {
            $state.go('page2');
        }

        $scope.goHome = function() {
            $state.go('page1');
        }
    }
])
