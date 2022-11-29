# Simple example of converting an enum symbol to a string for display on a textbox

## Disclaimer
This is a personal guide not a peer reviewed journal or a sponsored publication. We make
no representations as to accuracy, completeness, correctness, suitability, or validity of any
information and will not be liable for any errors, omissions, or delays in this information or any
losses injuries, or damages arising from its display or use. All information is provided on an as
is basis. It is the reader’s responsibility to verify their own facts.

The views and opinions expressed in this guide are those of the authors and do not
necessarily reflect the official policy or position of any other agency, organization, employer or
company. Assumptions made in the analysis are not reflective of the position of any entity
other than the author(s) and, since we are critically thinking human beings, these views are
always subject to change, revision, and rethinking at any time. Please do not hold us to them
in perpetuity.

## Overview 
This is a simple example showing how to convert enum values to their string counterpart.     
This code works with both DUT style enums, or inline implicit enums.

## Screenshot
![image](./docs/images/Screenshot.png)

## Code Snippets
```javascript
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
```

## Versions
* TcXaeShell 3.1.4024.32
* TcHmi 1.12.758.8

## Need more help?
Please visit http://beckhoff.com/ for further guides
