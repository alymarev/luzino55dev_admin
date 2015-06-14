/**
 * Created by ������� on 14.06.2015.
 */
var data = {
    'labels':['Пн','Вт','Ср','чт','Пт','Сб','Вс'],

    series: [{
        name: 'series-1',
        data: [5, 2, -4, 2, 0, -2, 5, -3],
        showArea: true
    }, {
        name: 'series-2',
        data: [4, 3, 5, 3, 1, 3, 6, 4]
    }, {
        name: 'series-3',
        data: [2, 4, 3, 1, 4, 5, 3, 2]
    }]
};

new Chartist.Line('#chart-1', data);