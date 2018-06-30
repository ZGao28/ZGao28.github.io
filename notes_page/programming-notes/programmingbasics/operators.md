# Operators

We use operators to manipulate, update, and compare variables, and the data that's stored in them. Most programming languages have different sets of basic operators, and sometimes the meaning or function of the operators can be different, despite having the same syntax. We will be covering the basic operators in Java and Python.

## Mathematical Operators
Almost all programming languages have the basic set of arithmetic operators: addition, subtraction, division and multiplication. Order of operations is applied automatically in most languages so you don't have to worry about bracketing everything - although 
use of brackets is still good practice when performing complex calculations.

*Example in Java*

```

int a = 6; /* Variable a has value 6 */
int b = 2; /* Variable b has value 2 */
int c = a + b; /* Variable c has value 8 (6 + 2 = 8) */
int d = a - b; /* Variable d has value 4 (6 - 2 = 4) */
int e = a / b; /* Variable e has value 3 (6 divided by 2 = 3) */
int f = a * b; /* Variable f has value 12 (6 multiplied by 2 = 12) */

int g = a + b * d; /* Variable g has value 14 (2 multiplied by 4 = 8, 8 + 6 = 14) */

```

*Example in Python*

```

a = 6 """ Variable a has value 6 """
b = 2 """ Variable b has value 2 """
c = a + b """ Variable c has value 8 (6 + 2 = 8) """
d = a - b """ Variable d has value 4 (6 - 2 = 4) """
e = a / b """ Variable e has value 3 (6 divided by 2 = 3) """
f = a * b """ Variable f has value 12 (6 multiplied by 2 = 12) """

g = a + b * d """ Variable g has value 14 (2 multiplied by 4 = 8, 8 + 6 = 14) """

z = 2**3 """ Variable z has value 8 (2 to the power of 3 = 8) """

```

Some languages have exponential operators and logarithmic operators built in, while others require their own math libraries. 

## Comparison Operators
All programming languages have comparison operators, but the meaning and functionality of them can differ slightly between languages. They are used to compare data and variables.

The == operator is used to compare the value of variables, or just plain data. It returns true when the two pieces of 
data or values are equal.

The <= and >= operators returns true when when variable is smaller/bigger or equal to the other.

The < and > operators behave the same way in their mathematical context.

The != operator is basically the opposite of the == operator. It returns true only if the values are not equal.

The === operator is a very special operator used to compare the data *type*, not the value. E.g. if both values are of type int, or char, or whichever other data type, as long as the two variables are of the same type, the operator will return true.

Note that **strongly typed languages** such as Java have no use for ===, as you cannot compare the values of two different data types. **Loosely typed languages** such as Python or Javascript do have the === operator, although different languages have their own implementations of the === operator. For example, Javascript uses === and Python uses the keyword **is**.


*Example in Java*

```

int a = 2;
int b = 3;
String c = "2";

/*Remember from the previous lesson that boolean values only contain true or false values */

boolean d = (a == b); /* Variable d has value of False - they are not equal in value */
boolean e = (a <= b); /* Variable e has value of True - a is smaller or equal to b */
boolean f = (a >= b); /* Variable f has value of False - a is not larger or equal to b */
boolean g = (a != b); /* Variable g has value of True - a is not equal to b */
boolean h = (a == c); /* The program won't compile! Cannot compare type String with type int in Java  */

```

*Example in Python*

```

a = 2;
b = 3;
c = '2';
d = (a == b) """ Variable d has value of False - they are not equal in value """
e = (a <= b) """ Variable e has value of True - a is smaller or equal to b """
f = (a >= b) """ Variable f has value of False - a is not larger or equal to b """
g = (a != b) """ Variable g has value of True - a is not equal to b """
h = (a == c) """ This WILL run - Even though variable c can be a string, Python allows this, but returns false. Please check the Python referene or search up online to see how Python deals with using comparison operators with different data types. It's a little hard to explain and most loosely typed languages deal with it their own way."""


```



## Other Operators
Aside from mathematical and comparison operators, there are three main other operators that you'll often use (there are more of course but less commonly used ones; many languages have their own set of operators so just check their references.

Firstly there is the *assignment operator*. I've been using them in the lessons for a while now - yes it's the = sign.
I think the usage of this is pretty self explanatory (although it can get a little confusing with memory management) but we'll cover that some other time. 


The other two are the *and* and *or* operators. 

They are used in conjunction with comparison operators, forming conditional statements. Lets say you wanted to buy a new laptop - but only if

  **A.** The laptop is on sale.
    
  *and* 

  **B.** You get a raise.

The and operator makes it so that the statement: "you buy a new laptop" is only true when A. is true **AND** B. is true.

Similarily, with the or operator - 

  **A.** The laptop is on sale.
    
  *or* 

  **B.** You get a raise.

In this scenario, the statement: "you buy a new laptop" is true if either A. **OR** B. is true. We'll be seeing these operators a lot more in the future, when we cover control flow.

 
*Example in Java*

```

int a = 2;
int b = 3;

/* && represents the and operator in Java */
/* || represents the or operator in Java */

boolean d = (a == 2) && (b == 3); /* Variable d has value of True - a == 2 is true AND b == 3 is true */
boolean e = (a == 2) || (b == 4); /* Variable e has value of True - a == 2 is true is sufficient, b == 4 does not have to be true */

```

*Example in Python*

```

a = 2
b = 3

""" the keyword and is used for the and operator in Python - pretty simple!
""" likewise, the keyword or is used for the or operator in Python """

c = (a == 2) and (b == 3) """ Variable d has value of True - a == 2 is true AND b == 3 is true """
d = (a == 2) || (b == 4) """ Variable e has value of True - a == 2 is true is sufficient, b == 4 does not have to be true """

```