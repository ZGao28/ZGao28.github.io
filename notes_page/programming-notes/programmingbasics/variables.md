# Variables

The concept of variables is one of the most important in programming. They are used to store all the information and data in a program, 
and is present in almost every kind of application.

## Data Types
There are many many different data types, used for storing different kinds of dataThese are all variables, and the general way to create
a new variable is as follows

```
dataType variableName = value;
```

Where dataType is the data type that you want to store, the variable name is the name of the variable that stores the data, and value is
the actual data you want to store. For most programming languages, the variable name can be anything, as long as it doesn't start with 
a number or symbol.

### Primitive Data Types
Primitive Data Types are the data types that store the most basic elements - and they are the same and appear in basically every single
programming language. They are what builds up more complex data types and data structures.

#### Boolean 
In programming, Boolean values are basically variables that store either 'True' or 'False' values. They cannot be used to store anything
else, only true/false values, and occupy very little space (uses up the smallest amount of memory).

*Example in Java:*
```
boolean you_Are_Viewing_a_WebPage = true;
```

*Example in Python:*
```
you_Are_Viewing_a_WebPage = True
```

Note that in Python there is no dataType at the beginning. This is because Python is a **loosely typed language**, meaning it is smart
enough to detect what type of value you are setting your variable to. This does not mean the variable doesn't belong to a data type - it
still does, but Python just assigns it when the program is run. This can be problematic sometimes though, as you'll see later on.

#### Characters 
Characters are, as the name implies, characters. They store singular letters or symbols. 

*Example in Java:*
```
char letter_c_lower_case = 'c';
char letter_C_upper_Case = 'C';
char some_symbol = '+';
```

*Example in Python:*
```
letter_c_lower_case = 'c'
letter_C_upper_case = 'C'
some_symbol = '+'
```

Note that in with characters, the value is always in ' ' single quotes - double quotes " " also work. 
Characters ALWAYS need to be in quotes.

#### Integers and Floating Point Numbers
Integers and floating point numbers (or floats, for short) are data types that store numbers. 

Integers store whole value positive and negative numbers. No decimals allowed. There are many different subtypes of integers, that 
basically denote how much memory to use for storing the numerical value. Generally, Bytes are the smallest, shorts are slightly larger,
ints are large enough to store basically all you need, and longs are for super large numbers.

*Example in Java:*
```
byte some_Number = 2;
short some_larger_Number = 13;
int some_even_larger_number = 1230;
long some_super_large_number = 123013592;
```

*Example in Python:*
```
some_Number = 2;
some_larger_Number = 13;
some_even_larger_number = 1230;
some_super_large_number = 123013592;
```

Again, notice that Python doesn't have a difference in dataTypes.

Floats store basically the rest of the number spectrum, namely decimal values.

*Example in Java:*
```
float decimal_number = 2.10239239;
```

*Example in Python:*
```
decimal_number = 2.10239239;
```

#### Strings
Ok, so strings are technically not a primitive data type, but they are so often used that I felt like I should include it in here.
A string is basically a bunch of characters *stringed up together*. Basically a sentence or a phrase.

*Example in Java:*
```
String hello = 'Hello world!';
```

*Example in Python:*
```
hello = 'Hellow World!';
```

#### To Sum Up
Variables are used to store data, and these variables can then later be used to manipulate, update and display the data. We've covered the most simple data types, and in later notes we'll cover more advanced ones!






