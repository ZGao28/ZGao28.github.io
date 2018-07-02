# Functions

In this lesson we will be talking about functions! Functions are super important to programming but thankfully, are also quite intuitive. 

Let's say you're a worker at Lowes and your manager wanted you to calculate the area of a circular piece of wood with radius 8. Since you've recently picked up coding, you decided to solve this problem by writing a section of code to calculate the area of a circle. 

*Here is the code below in Python*

```
radius = 8;

area = (radius*radius)*(Math.PI);
```


But there's a problem - if your manager brings you instead 2 pieces of wood with different radiuses, you'd have to copy and paste the code. You can imagine that this problem would become very tedious if say your manager brings you pile with 40 or 50 pieces of wood (curse that manager!). However this problem becomes super easy to solve if you use a function!

A **function** is essentially a block of code that can be reused! First we have to **define** the function - give it a name, and declare what it will **return**, and set what **parameters** it will take.

I will explain all the fancy terms in a second, but first I'll show the general structure of a function in Java and Python.

*Example in Java*

```

/* The initialization of the function */
int function_Name_Here( parameter_1, parameter_2, parameter_n ){ 

    /* Sample code block */
    int a = 200;

    /* return statement */
    return a;

}

/* Calling the function */
function_Name_Here( param1, param2, paramn );

```

*Example in Python*

```
def function_Name_Here( parameter_1, parameter_2, parameter_n ):

    """ Sample code block """
    a = 2
    return a


function_Name_Here( param1, param2, paramn )

```

The **function body** is the block of code contained by the curly braces in Java, and the section that is indented in Python. The function body is what will run when the function is called. 

First let's cover what **return** means in the context of functions. When a function is called (calling a function tells the program to run the section of code inside the function), a variable can be given back. In Java, we declare what type of variable the function gives back by writing the data type of the variable in front of the function name. In Python, because it is a loosely typed language, it does not require you to do so. You must start a function with **def** followed by the function name. When you do declare a function that will return a variable, you must include a **return statement** in the body of the function. The return statement can go anywhere, however as soon as the return statement executes, the function terminates and the next line of code after the original function call runs. This means the return statement is generally placed at the end of the function body, after you have the function do what you want it to do.

It is possible to create a function that returns nothing - in this case for Java write **void** followed by the function name. For Python simply do not include a return statement (if you include a return statement in a void function in Java the program will crash!).   

Function **parameters** are variables that the function takes in - think of it kind of like in math. In a function f(x), x is the parameter, and what the function does depends on x. This allows your function to be very versatile, it can perform a bunch of different tasks depending on the parameters that are passed in.

It is possible to create a function with 0 parameters. Simply leave the round brackets empty - you still need to include the brackets though.

Now that we have covered the basic workings of a function, let's create an efficient solution to the problem we set earlier.

*Example in Python*

```

def getAreaofCircle(radius):
    return radius*radius*Math.PI

```

Now with that simple function you could call it any number of times with whichever radius you wanted.

## Function Overloading
We won't be getting into all the little tricks you can do with functions to improve efficiency or add cool features, but **function overloading** is a relatively important topic. With functions, you can actually create two functions with the same name, but you must have a different set of parameters for both. Why is this useful? Let's think back to our old example with the Lowes manager and finding areas. If your manager wanted you to find the areas wood that has shapes of not only circles, but also rectangles and triangles as well?

We can now create 3 seperate functions all called area, but with different parameters, and depending on how the function area is called, the specific function will be called. I do the example in Java this time.

Also note that in Java, you must declare the type(s) of the parameter(s) that the function will take in.

```
/* For circle */
int area(float radius){

    return radius*radius*Math.PI;

}

/* For triangle */
int area(float base, float height){

    return base*height/2;

}

/* For rectangle */
int area(float height, float width){

    return width*height;

}
```

# Scope
Scope, in the context of programming refers to the visibility of different elements in a code base (e.g. variables, functions). It is not always the case that when you declare a variable that the variable can be accessed everywhere. In Java the keyword **public** is used for any element that can be seen by the entirety of the code base, meaning that it can be accessed anywhere. **Private** is another special keyword that defines an element's scope, but it is used in relation to **classes** something we'll cover later on in Object Oriented Programming (the scope we are discussing here mainly applies to Python, but also other languages).

Generally, any elements that are not inside a function are visible to the rest of the program. Elements, typically variables, inside a function, however, can only be accessed inside that specific function, unless specified otherwise. Here is an example.

*Example in Python*

```
a = 5

def print_function():
    print(a)

""" This program would have no problems, as a is in the main body of the program granting it global access. It prints out 5 """
``` 

```
def print_function():
    a = 5

print(a)

 
```

Conversely, the program above will crash! 'a' is only defined in context of the function, so the main body cannot see or access it. This is one of the reasons why the **return** statement covered earlier is useful. If you want to acces the variable inside, just return the variable! Here is an example.

```
def print_function():
    a = 5
    return a

print(print_function())

```

Now the code checks out, and 5 is printed! Here is one last thing about scope:

```
a = 5
print(a)

def print_function():
    a = 7
    print(a)

print(a)

```
This program runs fine, but prints out a different output than you might expect. It prints out ```5 7 5```, as opposed to ```5 7 7```. Why is that?It is because the 'a' inside of print_function is a completely different variable that is only accessible inside the function. The other 'a' variable in the main body of the program isn't changed at all!












 



