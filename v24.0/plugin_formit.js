const MAIN_HISTORY_ID = 0;

FormItPlugin = {};

FormItPlugin.PluginLocation = "PLUGINLOCATION";
FormItPlugin.ShowDialog = function(){
    var dialogParams = {
        "PluginName": "FormIt-Forma",
        "DialogBox": "PLUGINLOCATION/login.html",
        "DialogBoxType": "Modeless",
        "Settings": {
            "EnableNewWindowLinks": true
        }
    };

    FormIt.CreateDialogBox(JSON.stringify(dialogParams));
}
