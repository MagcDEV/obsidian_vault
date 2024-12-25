 Tags: [[Dotnet]], [[Csharp]] 
 ----
Are a type that represents references to methods with a specific parameter list and return type. They are uses to pass methods as arguments or other methods, define callback methods, and implement event handling.

NOTE: Callback methods are methods that are passed as arguments to other methods and are invoked after a certain operation is completed. They allow for asynchronous execution and decoupling of method calls, making the code more flexible and modular.

##### Why Delegates are Used for Events in C# ?

Because they provide a type-safe way to reference methods. Events are based on delegates and allows a class to notify other classes or objects when something of interest occurs. This is essential for implementing event-driven programming.

### The Build it delegates
``` csharp
Action<T>
// ##########################################################################
using System;

public class Logger
{
    public void LogMessage(string message, Action<string> logAction)
    {
        logAction(message);
    }
}

public class Program
{
    public static void Main()
    {
        var logger = new Logger();
        logger.LogMessage("This is a log message.", Console.WriteLine);
    }
}
```
 Represents a method that takes a parameter of type T an returns void 

``` csharp
Func<T, TResult>
// ###########################################################
using System;

public class Calculator
{
    public int Calculate(int number, Func<int, int> operation)
    {
        return operation(number);
    }
}

public class Program
{
    public static void Main()
    {
        var calculator = new Calculator();
        int result = calculator.Calculate(5, x => x * x);
        Console.WriteLine(result); // Output: 25
    }

```
Represent a method that takes a parameter of type T and returns a value of type TResult

``` csharp
Predicate<T>
// ################################################################################
using System;
using System.Collections.Generic;

public class NumberFilter
{
    public List<int> FilterNumbers(List<int> numbers, Predicate<int> condition)
    {
        return numbers.FindAll(condition);
    }
}

public class Program
{
    public static void Main()
    {
        var numbers = new List<int> { 1, 2, 3, 4, 5, 6 };
        var filter = new NumberFilter();
        var evenNumbers = filter.FilterNumbers(numbers, x => x % 2 == 0);
        evenNumbers.ForEach(Console.WriteLine); // Output: 2, 4, 6
    }
}
```
Represent a method that takes a parameter of type T and returns a bool (true or false)







