 Tags: [[Dotnet]], [[Csharp]] 
 ----
Are a special kind of class that is designed to be immutable and to provide value based equality. They are particularly useful for creating data transfer objects (DTOs) and other type of objects that are primarily used to hold data.  

``` csharp
public record Person(string FirstName, string LastName);

public class Program
{
    public static void Main()
    {
        var person1 = new Person("John", "Doe");
        var person2 = new Person("John", "Doe");

        // Value-based equality
        Console.WriteLine(person1 == person2); // Output: True

        // Immutability
        // person1.FirstName = "Jane"; // This will cause a compile-time error

        // Deconstruction
        var (firstName, lastName) = person1;
        Console.WriteLine($"First Name: {firstName}, Last Name: {lastName}"); // Output: First Name: John, Last Name: Doe
    }
}
```

