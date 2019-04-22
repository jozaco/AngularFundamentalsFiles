'use strict';

eventsApp.controller('EventCtrl', 
        function EventCtrl($scope){

            $scope.upVoteSession = function(session) {
                session.upVoteCount++;
            }

            $scope.downVoteSession = function(session) {
                session.upVoteCount--;
            }

            $scope.snippet = '<span style="color:red">hi there</span>';
            $scope.boolValue = false;
            $scope.mystyle = {color: 'red'};
            $scope.myClass = 'blue'; 
            $scope.disabled = true;
            $scope.sortOrder = 'name';



            $scope.event = {
                name: 'Angular BootCamp',
                date: new Date(),
                time: '10:10',
                location: {
                    address: 'Google Headquarters',
                    city: 'Mountain View',
                    province: 'CA'
                },
                imgUrl: '/img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bob Smith',
                        duration: 1,
                        level: 'Advanced',
                        abstract: 'In this session you will learn the ins and outs of directives!',
                        upVoteCount: 0
                    },
                    {
                        name: 'Scopes for fun and profit',
                        creatorName: 'John Doeh',
                        duration: 2,
                        level: 'Introductory',
                        abstract: 'This session will take a closer look to scopes.',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well behaved Controllers',
                        creatorName: 'Jane Doe',
                        duration: 4,
                        level: 'Intermidiate',
                        abstract: 'In this session you will learn the ins and outs of directives!',
                        upVoteCount: 0
                    }
                ]
            };
        }
    );