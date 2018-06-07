// Написать функцию calculateArea, которая будет принимать параметры для вычисления площади
// (можете выбрать конкретную фигуру или, основываясь на переданных параметрах,
// выполнять требуемый алгоритм вычисления площади для переданной в параметрах фигуры)
// и возвращать объект вида: { area, figure, input } (где area – вычисленная площадь, figure – название фигуры, для которой вычислялась площадь,
// input – входные параметры, по которым было произведено вычисление.


let calculateArea = (...params) => {
    let object = {
            area: 0,
            figure: '',
            input: [],
        },
        sides = params.length,
        area = 0;
    for (let item in params) {
        if (params[item] <= 0) {
            return document.write('Повторите ввод<br>');
        }
    }
    switch (sides) {
        case 2:
            object.figure = (params[0] == params[1]) ? 'Квадрат' : object.figure = 'Прямоугольник';
            area = params[0] * params[1];
            break;
        case 3:
            object.figure = 'Треугольник';
            let a = params[0],
                b = params[1],
                c = params[2],
                pr = (a + b + c) / 2;
            area = Math.sqrt(pr * (pr - a) * (pr - b) * (pr - c));
            break;
        default:
            return document.write('максимум треугольник<br>');
    }
    object.area = area;
    object.input = params;
    return document.write('Area: ' + object.area + ' Figure: ' + object.figure + ' Input: ' + object.input +'<br>');
}

calculateArea(2, 2);
calculateArea(3, 4);
calculateArea(3, 4, 5);
calculateArea(3, 4, 5,6);
