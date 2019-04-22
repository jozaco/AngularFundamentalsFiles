'use strict';

eventsApp.filter('durations', function(){
    return function(duration){
        switch(duration){
            case 1:
                return 'Half hour';
            case 2:
                return '1 hour';
            case 4:
                return 'Full day';
        }
    }
});