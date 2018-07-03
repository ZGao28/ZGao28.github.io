# Memory

Ok we have now gotten to perhaps the most confusing section in programming basics. Memory allocation and memory addresses are tricky things, but in a lot of languages they are automatically handled at **compile time** (in compiled languages) and at **runtime** (in scripting languages). There are certain languages, namely C and C++ that allow you full autonomy when it comes to memory, meaning you must manage all the memory yourself. However,it is important to know the concepts behind memory addresses specifically, as it may cause your program to produce unexpected results.

## Memory Addresses
When you declare a variable, the system will at some point allocate a portion of memory for that variable (again the amount of memory depends on what data type the variable is). That portion of memory has a specific memory address, and what the variables do is they point to that memory address. **Variables don't really store the value itself.** It rather just points to the memory address that the value will be stored in. Here is a little image map that will hopefully clear things up a bit. Take a look at the code below - it is very similar to the last code block in the last section, the only difference being a is now passed in as a parameter.

```
a = 5
print(a)

def print_function():
    a = 7
    print(a)

print(a)

```

This still prints out ```5 7 5```, as opposed to ```5 7 7```. 

It is possible however to use the function to change the 'a' variable in the main body, but it's not easily done (and not usually recommended) as primitive data types are usually **immutable** meaning they cannot be changed after they are created. When we assign new values to the immutable data types, the value inside the memory address doesn't change, instead the memory address is what changes, and it changes to a one that contains the new assigned value. It also has to do with what we going to talk about next.


## Pass by Reference vs. Pass by Value
**Pass by reference** is when the memory address of the variable is passed through the function parameters. This means that anything that you do with that variable that you passed in permanently happens to that variable, since you're directly affecting the value stored in that memory address. **Pass by value** is when the program creates a **new** variable that has the same value as that of the variable passed in. It has it's own memory address, and therefore any changes you make to it won't carry over outside the function. In certain languages you can implicitly state whether you want a function paramater to be passed by value or reference, however Python and Java are both languages that pass by value **ONLY**.

 


# Exceptions

An exception is what causes the program to crash - it is a bug in your program. There are two main types of exceptions - **Checked Exceptions** and **Unchecked Exceptions**. A compile time exception is a checked exception, meaning the compiler will pick up the error, **throwing** the exception, and not allowing the program to compile. An unchecked exception is one that occurs at runtime. It is possible to avoid these exceptions by either throwing them, or having the code execute inside a try - catch block. 