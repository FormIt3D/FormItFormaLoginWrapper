
FormIt.FormaAddIn = {};

FormIt.FormaAddIn.SaveCurrentAXMtoTempFile = function(bSelectedOnly) {
    args = {
        TestAPI: "FormIt.FormaAddIn.SaveCurrentAXMtoTempFile",
        bSelectedOnly:bSelectedOnly
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.ReadFileandMakeBlob = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadFileandMakeBlob",
        aPath:aPath
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.ImportAXMBlob = function(blob) {
    args = {
        TestAPI: "FormIt.FormaAddIn.ReadAXMandMakeBlob",
        blob:blob
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.CreateTempPath = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.CreateTempPath",
        aPath: aPath
    };
    
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.MakeBlobFile = function(aPath, blob) {
    args = {
        TestAPI: "FormIt.FormaAddIn.MakeBlobFile",
        aPath: aPath,
        blob:blob
    };
    return callAsyncAPI(args);
};

FormIt.FormaAddIn.DeleteTempFile = function(aPath) {
    args = {
        TestAPI: "FormIt.FormaAddIn.DeleteTempFile",
        aPath:aPath
    };
    return callAsyncAPI(args);
};