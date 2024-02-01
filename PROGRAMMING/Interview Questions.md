***
### 1. What is the difference between a interface and a abstract class?

- An interface is a contract that specifies a set of methods that a class must implement, while an abstract class is a class that cannot be instantiated an can contain both abstract and non-abstract methods.
- An interface can only have abstract methods, which means that they have no body and must be implemented by the classes that implements the interface. An abstract class can have both abstract and non-abstract methods, which mean that some methods can have a body and some methods must be overridden by the subclasses that inherit from the abstract class.
- A class can implement multiple interfaces, but it can only inherit from one abstract class. This is because an interface represent a set of behaviors, while an abstract class represents a type of object.
- An interface can only have public access for its methods and variable, while an abstract class can have any access modifiers, such as public, protected, or private.
- An interface can only have static and final variables, which means that they are constants and cannot be changed. An abstract class can have any type of variable, such as static, non-static, final, or non-final.


| Interface                                  | Abstract Class                                   |
| ------------------------------------------ | ------------------------------------------------ |
| Can only have abstract methods             | Can have both abstract and non-abstract methods  |
| An class can implement multiple interfaces | A class can only inherit from one abstract class |
| can have only public access                | can have any access modifiers                    |
| Can only have static and final variables   | Can have any type of variable                    |

### 2. When and why we should use a interface or an abstract class?

We should use an [[Interface]] when we want to define a contract for what a class can do, without specifying how it does it. We should use an [[Abstract Class]] when we want to define a partial implementation for a class, with some details left for the subclasses to complete.

Usually a interface represents a set of behaviors, while an abstract class represents a type of object. An interface is generally used to specify an ability or a functionality for classes, where the classes do not have to be very similar. For example, we can use an interface to define a common behavior for objects that can be compared, or objects that can be run. An interface can also be used to achieve [[Polymorphism]], which mean that a different classes can be treated in the same way as long as they implement the same interface.

An abstract class is generally used as a base class for similar classes. It can provide a default implementation for some methods that are common for the subclasses, and leave some methods as abstract for the subclasses to override. For example, we can use an abstract class to define common behavior and properties for shapes, such a class called Shape, ant then have subclasses such as Circle, Square, or Triangle that inherit from it and implement their own methods. An abstract class can also be used to achieve data [[Abstraction]], which means that it can hide some details and show only essential information to the user.

### 3. What is the difference between static, public, and void keywords in C#? 

- Static keyword is used to declare member that belong to the class rather than to the instances of the class. Static members can be accessed without creatin an object of the class. For example:
```csharp
public class Calculator
{
    // static field
    public static double PI = 3.14;

    // static method
    public static int Add(int x, int y)
    {
        return x + y;
    }
}

// access static members without creating an object
Console.WriteLine(Calculator.PI); // 3.14
Console.WriteLine(Calculator.Add(10, 20)); // 30

```

- Public keyword is used to declare members that can be accessed from anywhere  in the program. Public member are visible to other classes and assemblies. for example:

```csharp
public class Person
{
    // public field
    public string Name;

    // public constructor
    public Person(string name)
    {
        Name = name;
    }

    // public method
    public void Greet()
    {
        Console.WriteLine("Hello, my name is " + Name);
    }
}

// create an object of the public class
Person p = new Person("Alice");

// access public members from another class
Console.WriteLine(p.Name); // Alice
p.Greet(); // Hello, my name is Alice

```

- Void keyword is used to declare methods that do not return any value.

### 4. What is managed and unmanaged code?

Managed code is code that runs on a runtime such as the Common Language Runtime (CRL), that provides services like memory management, security, and type safety. Unmanaged code run directly on the operation system, without a runtime, and requires the programmer to handle everything.

### 5. What is the difference between a value type and a reference type in C#?

A value type is a data type that holds a data value within its own memory space. It means the variables of these data types directly contain values. A reference type is a data type that contains a pointer to another memory location that holds the data. It means the variables of these data types do not store the actual data, but the address of the data.

### 6. What is Boxing and Unboxing in C#?

Boxing and Unboxing are both used for type conversions, converting from a value type to a reference type is called boxing. Boxing is an implicit conversion. Here is an example of boxing in C#.

```csharp
int anum = 123;
Object obj = anun;
Console.WriteLine(anum);
Console.WriteLine(obj);
```

Converting from a reference type to a value type is called unboxing:

```csharp
Object obj2 = 123;
int anum2 = (int)obj;
Console.WriteLine(anum2);
Console.WriteLine(obj);
```

### 7. What is the difference between a struct and a class in C#?

Class and struct are Both user-defined data types but have some major differences:
#### Struct
- The struct is value type in C# and inherits from System.Value Type.
- Struct is usually used for smaller amounts of data.
- Struct can't be inherited from other types.
- A structure can't be abstract.
- No need to create an object with a new keyword.
- Do not have permission to create any default constructor.
#### Class
- The class is a refence type in C#, and it inherits from the System.Object Type.
- Classes are usually used for large amounts of data.
- Classes can be inherited from other classes.
- A class can be an abstract type.
- We can create a default constructor.

### 8. What is an Enum in C#?

An enum is a value type with a set of related named constants, often called an enumerator list. The Enum keyword is used to declare an enumeration. It is a primitive data type that is user-defined.

- Enums are enumerated data types in C#.
- Are a strongly typed constant. They are strongly typed, i.e., an enum of one type maty not be implicitly assigned to an enum of another type even through the underlying value of their members is the same.\
- Enum values are fixed. Enum can be displayed as a string and processed as an integer.

### 9. What is the difference between "continue" and "break" statements is C#?

Using a break statement, yo can 'jump out of a loop,' whereas using a continue statement, yo can 'jump over one iteration' and resume your look execution.

### 10. What is the difference between constant and readonly in C#?

Const is nothing but "constant," a variable whose value is constant but at compile time. Therefore, it's mandatory to assign a value to it. By default, a const is static, and we cannot change the value of a const variable throughout the entire program.

Readonly is the keyword whose value we can change during runtime or assign it at run time but only through the non-static constructor.

### 11. Can "this" be used within a static method?

No, we can't use 'this' in static method because the keyword 'this' return a reference to the current instance of the class containing it. Static methods do not belong to a particular instance.

### 12. What are properties in C#?

Is a member of a class that provides a way to read, write or compute the value of a private field. It exposes a public interface to access and modify the data stored in a class while allowing the class to maintain control over how that data is accessed and manipulated.

### 13. What is an extension method in C#?

Is a static method used to extend the functionality of an existing type without modifying the original type or creating a new derived type. Extension methods allows developers to add methods to existing types, such as classes, structs, interfaces, enums, etc., not originally defined in those types.

```csharp
public static class StringExtensions
{
    public static string CapitalizeFirstLetter(this string str)
    {
        if (string.IsNullOrEmpty(str))
            return str;
        return char.ToUpper(str[0]) + str.Substring(1);
    }
}

string s = "hello world";
string capitalized = s.CapitalizeFirstLetter(); // "Hello world"
```

### 14. What is the difference between Dispose and finalize in C#?

Dispose and finalize are both methods that are used to release unmanaged resources held by an object, such as file handles, network connections, database connections, etc. Unmanaged resources are those that are not managed by the .NET runtime and require explicit cleanup code.

**The main difference** between the two methods is that the Dispose method is must be explicitly invoked by the user of the object, while finalize is implicitly invoked by the garbage collector.

### 15. What is the difference between String and StringBuilder in C#?

String is an immutable type, while StringBuilder is a mutable type. This means that String objects cannot be modified once they are created, but StringBuilder objects can be changed without creating new instances.

For example a String object:

```csharp
class Program
{
	Static void Main(string[] args)
	{
		string val = "Hello";
		// crate a new string instance instead of changing the old one
		val += "am ";
		val += "Nitin Pandit";
		Console.WriteLine(val);
	}
}
```

And StringBuilder:

```csharp
class Program
{
	Static void Main(string[] args)
	{
		StringBuilder val = new StringBuilder("");
		val.Append("hello");
		val.Append(" am Nitin Pandit :)");
		Console.WriteLine(val);
	}
}
```

- String objects support more methods and operations than StringBuilder objects, such as formatting, parsing, comparison, and searching.
- StringBuilder objects can be converted to String objects using the ToString method, but String objects cannot be converted to StringBuilder objects directly. A new StringBuilder object has to be created and initialized with the String object.


### 16. What is the use of a delegate in C#?

Is a type that represents references to methods with a particular parameter list and return type. When you instantiate a delegate, you can associate its instance with any method with a compatible signature and return type. You can invoke (or call) the method through the delegate instance.

Delegates are used to pass methods as arguments to other methods. Event handlers for example are nothing more than methods that are invoked thorough delegates. A delegate is a solution for situations where you want to pass methods around to other methods. You are so accustomed to passing data to methods as parameters that the idea of passing methods as an arguments instead of data might sound strange. However, there are cases in which you have a method that does something, for instance, invoking some other method. You do not know at compile time what this second method is. That information is available only at runtime. Hence Delegates are the device to overcome such complications.

### 17. What are partial classes in C#? Why do we need partial Classes?

A partial class is only used to split the definition of a class into two or more classes in the same source code file or more than one source file. You can create a class definition in multiple files, which will be compiled as one class at run time. Also, when you create an instance of this class, you c an access all the methods from all source files with the same object. Partial classes must be created in the same namespace Partial classes must be created in the same namespace.

### 18. What is IEnumerable<> in C#?

Is an interface that defines one method, GetEnumerator, which returns an IEnumerator<> interface. This allows read-only access to a collection of a specified type. A collection that implements IEnumerable<> can be used with a foreach statement, which iterates over the elements of the collection without needing to know its internal structure.

Is also the base interface for many other generic collection interfaces, such a **ICollection<>, IList<>, and IDictionary<>**. These interfaces provide more functionality and methods for manipulating collections, such as adding, removing, indexing, and sorting elements.

One of the advantages of IEnumerable<> is that it supports deferred execution, which means that the elements of the collection are not evaluated until they are requested. This can improve performance and memory usage, especially for large or complex collections. Deferred executions is often used with LINQ queries, which can operate on any IEnumerable<> source and return an IEnumerable<> result.

Another feature of IEnumerable<> is that it supports covariance, which means that you can use a more derived type as a generic arguments than the one specified. For example, you can assign an IEnumerable< string > to an IEnumerable< object >, because string is a subclass of object. Covariance enables you to use more generic methods and polymorphism with IEnumerable.

To use IEnumerable<>, you need to implement the GetEnumerator method, which returns an IEnumerator<> object. The IEnumerator<> object has a current property that return the current element of the collection, and a MoveNext method that advances to the next element. You can also use the yield keyword in C# to simplify the implementation of IEnumerable<> and IEnumerator<>.

```csharp
// A class that implements IEnumerable<int>
public class MyCollection : IEnumerable<int>
{
    // A private array of integers
    private int[] data = { 1, 2, 3, 4, 5 };

    // The GetEnumerator method that returns an IEnumerator<int>
    public IEnumerator<int> GetEnumerator()
    {
        // Use the yield keyword to return each element of the array
        foreach (int item in data)
        {
            yield return item;
        }
    }

    // The non-generic GetEnumerator method that returns an IEnumerator
    IEnumerator IEnumerable.GetEnumerator()
    {
        // Call the generic GetEnumerator method
        return GetEnumerator();
    }
}

// Create an instance of the class
MyCollection collection = new MyCollection();

// Use a foreach statement to iterate over the collection
foreach (int item in collection)
{
    Console.WriteLine(item); // Prints 1, 2, 3, 4, 5
}

// Use a LINQ query to filter the collection
var query = from item in collection
            where item > 3
            select item;

// Use a foreach statement to iterate over the query result
foreach (int item in query)
{
    Console.WriteLine(item); // Prints 4, 5
}
```

### 19. What is IQueryable in C#?

Is an interface that provides a powerful query mechanism for interacting with data sources. It is used to define queries that can be executed on a variety of data stores, such as relational database, XML documents, and in-memory collections.

### 20. What is the difference between IEnumerable and IQueryable?

- IEnumerable is suitable for working with small to moderate-sized in-memory collections, where the entire data set can fit in memory. IQueryable is suitable for working with large data sets or data sources external to the application, such as databases or web services.
- IEnumerable fetcher the record from the database without applying the filer. But IQueryable fetches the record from the database by applying the filter.
- If you create an IQueryable, the the query may be converted to SQL and run on the database server.
- If you create an IEnumerable, then all rows will be pulled into memory as objects before running the query.

### 21. What are Generics in C#?

Generics allow you to delay the specification of the data type of programming elements in a class or a method until it is used in the program. In other words, generics allow you to write a class or method that can work with any data type.

You write the specifications for the class or the method, with substitute parameters for data types. When the compiler encounters  a constructor for the class or a function call for the method, it generates code to handle the specific data type.

Generic classes and methods combine reusability, type safety, and efficiency in a way their non-generic countrerparts cannot. Generics are most frequently used with collections and the methods that operate on them.

### 22. What is LINQ in C#?

LINQ stands for Language Integrated Query, is a data querying methodology that provides capabilities to .NET languages with a syntax similar to a SQL query, it was a great power to query any source of data. The data source could be collections of objects, databases, or XML files. We can easily retrieve data from any object that implements the IEnumerable< T > interface.

### 23. What is a Virtual Method in C#?

A virtual method is a method that can be redefined in derived classes. A virtual method has an implementation in a base class and a derived from the class. It is used when a method's basic functionality is the same, but sometimes more functionality is needed in the derived class. A virtual method is created in the base class that can be overridden in the derived class. We create a virtual method in the base class using the virtual keyword, and that method is overridden in the derived class using the override keyword.

When a method is declared as a virtual method in a base class, it can be defined in a base class, and it is optional for the derived class to override that method. The overgrinding method also provide more than one form for a method. Hence, it is also an example of [[Polymorphism]].

When a method is declared as a virtual method in a base class and has the same definition in derived class, there is no need to override it in the derived class. But when a virtual method has a different definition in the base class and the derived class, it is necessary to override it in the derived class.

When a virtual method is invoked, the object's run-time type is checked for an overriding member. First, the overriding member in the most derived class is called, which might be the original member if no derived class has overridden the member.

- By default, methods are non-virtual.
- We can't use the virtual modifier with static, abstract, private, or override modifiers.

### 23. What is Task in C#?

Is a class that represents an asynchronous operation, which is an operation that does not block the current thread and can run in parallel with other tasks. A task can be used to perform some work in the background, such as downloading a file, processing data, or updating the user interface. A task can also return a value of a specified type, using the generic Task< T> class.

- Use the async and await keywords to mark a method as asynchronous, and then use the Task or Task< T > as the return type.



### 24. What is the role of access modifiers?

Access modifiers are keywords used to specify the declared accessibility of a member or a type. For example, a public class is accessible to the entire world, while an internal class may be accessible to the assembly only.

| Modifier           | Description                                                                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| public             | There are no restriction on accessing public members                                                                                                                       |
| private            | Access is limited to within the class definition. This is the default access modifier type if none is formally specified                                                   |
| protected          | Access is limited to within the class definition and any class that inherits from the class                                                                                |
| internal           | Access is limited exclusively to classes defined within the current project assembly                                                                                       |
| protected internal | Access is limited to the currrent assembly and types derived from the containing class. All members in the current project and the derived class can access the variables. |
| private protected  | Access is limited to the containing class or types derived from the containing class within the current assembly.                                                          |

### 25. What is a class library in C#?

Is a collection of classes and namespaces that can be used by other applications or components. A class library can provide functionality such a data structures, algorithms, input/output, networking, security, user interface, and so on.

### 26. What is serialization in C#?

Serialization in C# converts an object into a stream of bytes to store the object in memory, a database. or a file. Its main purpose is to save the state of an object from being able to recreate it when needed. The reverse process is called deserialization.


### 27. What is the Singleton Design Pattern, and how to implement it in C#?

The [[Singleton]] Design Pattern is a creational design pattern that ensures that a class has only one instance, and provides a global point of access to that instance. In addition, this pattern controls object creation, limiting the number of instances that can be created to a single instance, which is shared throughout the application. 

In a typical Singleton implementation, the Singleton class has a private constructor to prevent direct instantiation and a static method that returns the single instance of the class. The first time the static method is called, it creates a new instance of the class and stores it in a private static variable. Subsequent calls to the static method return the same instance.

