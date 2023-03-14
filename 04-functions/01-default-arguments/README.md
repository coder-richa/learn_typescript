# Function With Default Arguments

Functions can have default values for its arguments as follows:

-   Syntax

    ```
        let functionName = (parameterName: dataType = defaultValue) { // Function Body };
    ```

    The above code block specifies that the **parameterName** variable would hold a **defaultValue** of type **dataType**.

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

## Note:

-   Specify default arguments at the end of the parameter list.
