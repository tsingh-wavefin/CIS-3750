﻿(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http'];
    function UserService($http) {
        var service = {};

        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get('localhost:8000/users/').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetById(id) {
            return $http.get('localhost:8000/users/' + id).then(handleSuccess, handleError('Error getting user by id'));
        }

        function GetByUsername(username) {
            return $http.get('localhost:8000/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

// $http.post('http://localhost:7001/testApp/user/login', { username: username, password: password })
//         .success(function (response) {
//             callback(response);
// });

        function Create(user) {
            return $http.post('http://localhost:8000/farmers/', { username: username, password: password, current_crops: [], past_crops: [] }, {
    headers : {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
    }
} ).then(handleSuccess, handleError('Error creating user'));
            // return $http({
            //     url: "localhost:8000/farmers/",
            //     method: "POST",
            //     data: { "username": username, "password": password, "current_crops": [], "past_crops": [] },
            // }).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put('localhost:8000/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete('localhost:8000/users/' + id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();
