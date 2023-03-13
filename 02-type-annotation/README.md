# Type Annotation

Assigning an explicit type to a variable

-   Syntax

    ```
        let variableName: dataType = 10;
    ```

    The above code block specifies that the **variableName** variable would hold a value of type **dataType**.

-   Example
    ```
        let num1: number = 10;
    ```
    The above code block specifies that the **num1** variable would hold a value of type **number**.

## Function Annotation:

-   Assigning type to the function arguments and return type.

```
/**
 *
 * @param num1 accepts a numeric value
 * @param num2 accepts a numeric value
 * @param resultDescription accepts a string for the result description
 * @param printMessage accepts a boolean value to flag whether to print the result string or return it
 * @returns a string value when printMessage is set to false, otherwise void
 */
const addTwoNumbers = (num1: number, num2: number, resultDescription: string, printMessage: boolean): string | void => {
    const result = num1 + num2;
    const outputMessage = `${resultDescription} ${result}`;
    if (printMessage) console.log(outputMessage);
    return outputMessage;
};
```
