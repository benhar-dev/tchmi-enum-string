// Keep these lines for a best effort IntelliSense of Visual Studio 2017 and higher.
/// <reference path="./../Packages/Beckhoff.TwinCAT.HMI.Framework.12.758.8/runtimes/native1.12-tchmi/TcHmi.d.ts" />

(function (/** @type {globalThis.TcHmi} */ TcHmi) {
    var Functions;
    (function (/** @type {globalThis.TcHmi.Functions} */ Functions) {
        var demo_enum_hmi;
        (function (demo_enum_hmi) {
            function DisplayEnumSymbolAsString(ctx, Symbol) {

                Symbol.resolveSchema(function (resolveSchemaReply) {

                    if (resolveSchemaReply.error > 0) return ctx.error(TcHmi.Errors.ERROR);
                    var options = resolveSchemaReply.schema.options;

                    Symbol.readEx(function (readExReply) {

                        if (readExReply.error > 0) return ctx.error(TcHmi.Errors.ERROR);

                        const result = options.find(function (option) {return option.value == readExReply.value });

                        if (result == undefined) return ctx.error(TcHmi.Errors.ERROR);

                        ctx.success(result.label);

                    })
                })
            }
            demo_enum_hmi.DisplayEnumSymbolAsString = DisplayEnumSymbolAsString;
        })(demo_enum_hmi = Functions.demo_enum_hmi || (Functions.demo_enum_hmi = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi);
TcHmi.Functions.registerFunctionEx('DisplayEnumSymbolAsString', 'TcHmi.Functions.demo_enum_hmi', TcHmi.Functions.demo_enum_hmi.DisplayEnumSymbolAsString);
