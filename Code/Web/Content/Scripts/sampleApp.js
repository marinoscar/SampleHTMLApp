var selectedEngine ;
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
    selectedEngine = code;
    DisplayOrders(selectedEngine);
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
function DisplayOrdersTemplate(data, engineName) {   
    var source = $("#orders-template").html();
    var template = Handlebars.compile(source);
    var html = template(data);
    $('#partsDivision').append('PARTS & SERVICES FOR THE ' + engineName);
    $('#OrdersContainer').empty();
    $('#OrdersContainer').append(html);
}