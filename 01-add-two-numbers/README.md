# Add Two Numbers

This example covers Typescript features:

-   Type Casting

    ```
        let num1 = document.getElementById('num1')! as HTMLInputElement;
    ```

    The above code block specifies that the selected element is of type Input and does not return null reference. Since all elements does not have **value** property so casting element to **HTMLInputElement** is required to tell compiler that the selected element has **value** property.

-   Strict Typing
    ```
        const add = (a: number, b: number) => a + b;
    ```
    The above code specifies that the **add** function accepts two arguments of type **number**.

## Steps to follow:

-   Create a html file that contains form elements and name it to **index.html**.
-   Create a file called **script.ts**.
-   Write code in it.
-   Compile it using the following command:
    ```
     tsc script.ts
    ```
    This command will generate **script.js** file.
-   Include **script.js** file in the **index.html** as browser can not run typescript directly.
