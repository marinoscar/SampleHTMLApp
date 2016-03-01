﻿var selectedEngine ;
$(function () {
   

    var currentView=GetParameterByName('view');
    switch (currentView) {
        case 'index':
            DisplayEnginesTemplate(mainData)
            break;
        case 'orders':
            var currentOrder = GetParameterByName('code');
            DisplayOrders(currentOrder);
            break;
        case 'orderStatus':
            var orderNumber = GetParameterByName('number');
            DisplayOrderStatus(orderNumber);
            break;
        case 'fieldService':
            DisplayHistory();
            break;       
        case 'addAccident':
            DisplayDocumentAccident();
            break;
        case 'reviewAccident':
            DisplayReviewAccident();
            break;
        case 'repairs':
            DisplayReviewAccident();
            break;
        default:
            DisplayEnginesTemplate(mainData)
            break;
    }

   
   


});

function GetParameterByName (name) {
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(window.location.search);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));
}
function OnclickEngine(code)
{
    window.location.href = "/orders.html?view=orders&code=" + code;
    
}
function OnclickOrderNow(code) {
    window.location.href = "/ordersStatus.html?view=orderStatus&number=" + code;
   
}
function DisplayEnginesTemplate(data) {
    

    var source = $("#engines-template").html();
    var template = Handlebars.compile(source);
    var html = template(data);

    $('#EnginesContainer').empty();
    $('#EnginesContainer').append(html);
}

function DisplayOrders(code)
{
    var currentEngine = _.where(mainData.engines, { code: code });
    var filteredJson = { engines: currentEngine };
    DisplayEnginesTemplate(filteredJson);
    DisplayOrdersTemplate(filteredJson, currentEngine[0].name);

}

function GetEngineNameByCode(code) {
    var currentEngine = _.where(mainData.engines, { code: code });  
   
    return currentEngine[0].name;

}

function GetPartByCode(engineCode, partCode) {
    var currentEngine = _.where(mainData.engines, { code: engineCode });
    var currentPart = _.where(currentEngine[0].parts, { code: partCode });
       return currentPart[0];

}
function DisplayOrdersTemplate(data, engineName) {   
    var source = $("#orders-template").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $('#partsDivision').append('PARTS & SERVICES FOR THE ' + engineName);
    $('#OrdersContainer').empty();
    $('#OrdersContainer').append(html);
}


function DisplayOrderStatus(number) {
    $('#OrderNumber').text('ORDER #' + number);
    var currentOrder = _.where(ordersData.orders, { number: number });
    
    $.each(currentOrder, function (index, order) {
        var engineName = GetEngineNameByCode(order.engineCode);
        order.engineName = engineName;
        $.each(order.parts, function (index, part) {
            var currentPart = GetPartByCode(order.engineCode, part.code);
            part.name = currentPart.name;
            part.picture = currentPart.picture;
            part.description = currentPart.description;

        });
       

    });
    
    
    var filteredJson = { orders: currentOrder };
    DisplayOrderStatusTemplate(filteredJson);

}

function DisplayOrderStatusTemplate(data) {
    var source = $("#engines-template").html();
    var template = Handlebars.compile(source);
    var html = template(data);
  
    $('#PartsContainer').empty();
    $('#PartsContainer').append(html);
}

function DisplayHistory() {
    var first = _.first(mainData.engines);
    var filteredJson = { engines: [first] };
    DisplayEnginesTemplate(filteredJson);
    var source = $("#history-template").html();
    var template = Handlebars.compile(source);
    var html = template(filteredJson);

    $('#HistoryContainer').empty();
    $('#HistoryContainer').append(html);

    var source = $("#variables-template").html();
    var template = Handlebars.compile(source);
    var html = template(filteredJson);

    $('#VariablesContainer').empty();
    $('#VariablesContainer').append(html);

}

function DisplayDocumentAccident() {
    $("#input-24").fileinput({
        initialPreview: [
            '<img src="http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg">',
            '<img src="http://preview.turbosquid.com/Preview/2014/07/09__07_03_36/Part2226.jpgf5b4600e-6765-44ee-8324-886d34d5162fLarge.jpg">'
        ],
       
        overwriteInitial: false,
        resizeImage: true,
        maxImageWidth: 20,
        maxImageHeight: 20,
        resizePreference: 'width'
        
    });

    var first = _.first(mainData.engines);
    var filteredJson = { engines: [first] };
    DisplayEnginesTemplate(filteredJson);
    

}

function DisplayReviewAccident() {
    

    var first = _.first(mainData.engines);
    var filteredJson = { engines: [first] };
    DisplayEnginesTemplate(filteredJson);


}