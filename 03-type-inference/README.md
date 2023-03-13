# Type Inference

TS compiler infer the datatype of a variable based on the value assigned

-   Syntax

    ```
        let variableName = value;
    ```

    The above code block specifies that the **variableName** variable would hold a data type based on **value**.

-   Example
    ```
        let num1 = 10;
    ```
    The above code block specifies that the **num1** variable would hold a value of type **number**.

## Type Inference for Annonymous Function:

-   TS compiler infer the type of the arguments of anonymous function based on their value.

```
// TS inference infer the type of the following variable as string[]
let colors = ['red', 'blue', 'green'];

/// TS inference infer the type of color as string
colors.forEach((color) => {
    console.log(color);
});
```
