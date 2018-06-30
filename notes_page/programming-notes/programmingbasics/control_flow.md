# Control Flow

Welcome to the lengthiest section in programming basics. We are going to be covering **a lot** of content so get comfortable. Control flow is yet another important topic, as understanding how it works will save you millions of hours when debugging or coding a more advanced program. Control flow is basically the order in which your code executes.

The code you write will execute in a top to bottom order, meaning statements at the top run before statements at the bottom. 

*Sample Code*

```

int a = 5; /* This line executes first */
int b = a + 3; /* This line is executed second - if it was excuted first, the code wouldn't work, as 'a' is not yet defined */
boolean c = (a == b); /* This line executes last */

```


This is almost always the case, but we can use certain tools, called control statements to alter the way the code operates. It is much easier to understand with some examples. 

## Branching Statements
The first set of control statements we have to alter the flow of our code are our branching statements (sometimes refered to as conditional statements). 

The 'if' statement is perhaps the most commonly used and also most intuitive control statement. To best explain, an example should suffice.

*Example in Java*

```

int a = 2; /* Executed first */
int b = 2; /* Executed second */

if ( a == b ) { /* The comparison operator statement is executed */
    
    /* If a does equal b, then the code contained by the curly brackets will be executed. If a does not equal b, the code below will not run and will instead skip to the next immediate statement after the close curly bracket */

    System.out.println("They are the same value"); /* This will execute since both a and b have value 2 */ 

}

int c = 4; /* This executes after the if statement */

/* Prints out "They are the same value" */

```

*Example in Python*

The same principles apply in Python, but notice the syntax difference. Python is dependent on the indentation of the code - it does not require curly brackets like in Java, but you need to indent the code to indicate it's part of the statement. 

```

a = 2 
b = 3

if ( a == b ) :
    print("They are the same value")

c = 4

""" Nothing is printed out since a != b """ 

```

Next up we have 'else' and 'else if' statements. These are only add-ons to if statements, but are still very important. Again, a code example will be helpful in explaining.

*Example in Java*

```

int a = 2; 
int b = 3;

if (a == b) {

    /* The line below gets executed if the statement a == b is true, and then skips all the else and else if code, executing the line 'int c = 4;' next */

    System.out.println("a is equal to b");

} else if (a > b) {

    /* The line below only operates if the above if statement is false, and the else if statement (a > b) is true - then once it executes all the code in the else statement below will be skipped. In our example, a is not bigger than b so this code is not executed*/

    System.out.println("a is bigger than b");

} else {

    /* The else statement is basically saying: since none of the above if/else if statements worked, just run this code below instead. The else statement ensures that some code is always executed only if none of the above statements worked. */

    System.out.println("a is neither bigger than b nor equal to b");

}

int c = 4;

/* Prints out "a is neither bigger than b nor equal to b". */

```

*Example in Python*

Again notice the difference in syntax with the 'elif' replacing the 'else if' from java.

```

a = 5;
b = 3;

if (a == b):
    print("Equal value")

elif (a > b):
    print("a is bigger")

elif (a == 5):
    print("a is equal to 5)

else:
    print("a is neither equal to b or bigger, and a is not equal to 5")

c = 4;

""" This will print "a is bigger" since 5 > 3. 

Note that it will not print "a is equal to 5" even though the elif statement is true. Again, one segement of the if/else if/else chain is executed, everything underneath it is skipped, and goes straight to the line 'c = 4'. """

```

While the above examples only showed examples with one or two else if statements, you can actually chain on as many else if statements as we want, to cover all the possible cases we want to check. However, if you think you'll be using a whole bunch, maybe like 9 or 10 or more, then consider the next branching statement, as it will make your code more readable, and in some cases run faster than a bunch of if/else if statements.

Our last branching statement is the 'switch' statement. It evaluates one variable, and depending on the value of that variable it will execute some code. Here is an example.

*Example in Java*

```

int month = 8;

/* The string monthString below is now declared - meaning the system knows to allocate a little bit of memory for it, but it has no value assigned to it yet */ 

String monthString; 


/* This is the switch statement - the (month) in brackets is the variable, and depending on the value of month, one of the cases
will execute. Note that there is a break statement at the end of each case, that is to ensure that right after the code in the specific case executes, the flow of the code will jump out of the switch statement. In the else if chain scenario, no break statement is needed.

switch (month) {

    /* if month == 1 case 1 executes */
    case 1:  monthString = "January";
             break;

    /* if month == 2 case 2 executes and so on */
    case 2:  monthString = "February";
             break;
    case 3:  monthString = "March";
             break;
    case 4:  monthString = "April";
             break;
    case 5:  monthString = "May";
             break;
    case 6:  monthString = "June";
             break;
    case 7:  monthString = "July";
             break;
    case 8:  monthString = "August";
             break;
    case 9:  monthString = "September";
             break;
    case 10: monthString = "October";
             break;
    case 11: monthString = "November";
             break;
    case 12: monthString = "December";
             break;

    /* Note the default case here - this functions as the else statement */
    default: monthString = "Invalid month";
             break;
}

System.out.println(monthString);

/* This set of code will print out "August", as case 8 is executed (since month == 8) and case 8 sets the string monthString to "August". */

```

Python is actually one of a small number of programming languages that does not have a switch statement built in. It is possible to manually create a branching statement very similar using something called a *dictionary* but that is beyond our scope for now.


Have a look at the diagram below - it shows the general control flow that a branching statement creates. Notice that once one of the conditionals is true, some code is executed then it goes directly back onto the main branch, and disregards the rest of the conditionals on the same chain. 

![alt text](../src/branching-statement-diagram.png "Logo Title Text 1") 


## Loop Statements
Ok, so after our branching statements, we have loop statements. Loop statements cause the code inside the loop block to run a certain amount of times, Then continues on with the code after the loop block.

The **for** loop is the most basic loop, and is very structured in how you create it.

*Example in Java*

```

/* The for loop in Java is always created using 'for (statement-1; statement-2; statement-3)' in which statement-1 declares and sets a variable (almost always int), statement-2 is the condition you want to check and statement-3 is a way to change the variable created in statement-1. In our case our variable 'i' is set to 0, and while i < 5, then 'i++' - meaning i+=1. Everytime 'i++' executes, the code inside the for loop also executes. */

for (int i = 0; i < 5; i++){

    System.out.println("yes");

}

/* This will print out 5 'yes' */

```

*Example in Python*

```

for i in range(a, b, c):
    statement

""" for loops in Python are a little different syntactically it uses the keyword 'in', and also 'range'. Range has 3 variables as inputs, a, b, c. Variable a is the starting value you want 'i' to be. Variable b is the end value you want 'i' to be, and c is the change variable. E.g. if you want 'i' initially to be 4, and have something loop until 'i' reaches 8, in steps of two, you would have something like this below """

for i in range(4, 8, 2):
    statement

""" often times for statements will leave out the a and c values, in which case a is assumed to be 0 and c is assumed to be 1 """

```

Aside from for loops, there is one other looping statement - the **while** loop. As the name suggests, code inside a while loop executes while a condition is true. Here are some examples.

*Example in Java*

```

int a = 0;

while (a < 5) {

    System.out.println("yes"); 
    
    a+=1;

    /* Notice that we create our variable outside the while loop, and change it inside remember to increment/decrement/change your conditional variable, or else your program will be stuck in an infinite loop! E.g. if we didn't have a+=1, a would always be equal to 0, which would make a < 5 always true, resulting in the while loop running infinitely */
}

/* This code will print out "yes" five times as well. */

```

*Example in Python*

```

a = "hello"

while (a == "hello"):

    print(a)

    a == "goodbye"

""" As you can see, 'a' does not have to be an integer! Although the above code is reduntant and does not need to be in a loop it is important to get used to the idea that loops can take more than 1 type of data. 

The program above will print "hello" once.
"""
```

In Java and some other languages (but not Python) there is something called the **do-while** loop. It is the same thing as the while loop except the order of execution is slightly different. The block of code inside the do-while loops executes once first, and then checks the conditional statement. Here is a quick example:

```

int a = 3;

do {
    System.out.println("yes");
    a++;
} while (a < 3);

/* This program will print "yes" once since the print statement is block is executed before checking the conditional. Note that the normal while loop below won't print anything */

int b = 3;

while (b < 3){
    System.out.println("yes");
    b++;
}

```

## Jump Statements 

Jump statements are our last set of control statements. There are 3 main jump statements: break, continue, and return. Return will be covered in our functions lesson, as it is basically solely used for functions.

We have already seen the **break** statement when we covered the switch conditional statement. It is used to break out of either a switch statement or a loop. If used in a loop, the loop will terminate immediately and continue execution of code outside the loop. It is the same in both Python and Java so I will only show the example in Python.

```

for i in range(3):
    print('yes')
    if (i == 1):
        break

print('hi')

""" This will print 'yes' twice (once when i == 0, once when i == 1, then it will break out of the loop) and 'hi' right after. """

```

Lastly, the **continue** statement is an interesting one - solely used in loops, it basically skips all the code below it inside a loop block and tells the code to move on to the next iteration of the loop. For example, if you want to print all the numbers out from 0 to 5 except for the number 3, we can use continue! Again, it is the same in both languages, I will show the example in Java this time.

```
int a = -1;

while (a < 5){

    a++;

    if (a == 3){
        continue; /* If a == 3, then we skip the rest of the code in the while loop and return to the top! */
    }
    
    System.out.println(a);
}  

/* This program will print 0, 1, 2, 4, 5 */

``` 

