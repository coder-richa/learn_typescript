# Functions

Functions are reusable components of TS. While defining functions, it is possible to specify data types and default values for the parameters.

-   Syntax

    ```
        const functionName = (
            requiredParameter: dataType,
            optionalParameter1: dataType = defaultValue1,
            optionalParameter2: dataType = defaultValue2
            ) =>{
                // function body
            };
    ```

    The above code block specifies that the function with name **functionName** that accepts a _required parameter_, namely _requiredParameter_. It accepts two _optional parameters_, namely: _optionalParameter1_ ( with default value **defaultValue1** ) and _optionalParameter2_ ( with default value **defaultValue2** ).

-   Example

    ```
         let processInfo = (
            firstName: string,
            lastName: string = '',
            age: number = 40,
            isCanadianResident:
            boolean = false
            ): string =>
        `${firstName}${lastName ? ' ' + lastName : ''}  is of age ${age} and ${isCanadianResident ? 'has' : 'does not have'} Canadian Residency`;

    ```

    The above code block specifies that the **lastName** variable would hold a default value **blank**, **age** will have a default value **40**.
