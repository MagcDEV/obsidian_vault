With generics you can define classes, interfaces, and methods with a placeholder for the type of the data they use, this allows for type safety without committing to an actual data type until the generic is called or instantiated.

``` csharp
/*
In C# you can create your own custom generics but most of the time you will be using the build in ones that are in the System.Collection.Generic namespace
*/
System.Collection.Generic
```

Here is a list of the most common generics that you will use:

``` csharp
// Generics
IEnumerable

IQueryable
/* 
Is part of the System.Linq namespace is used to query data collections using LINQ is usefull in scenarios where the query needs to be executed agains and external data souce and not in memory collections, the query is executed on the server side so is usefull when working with remote data sources.
*/

ICollection 
/* 
Extends IEnumerable what means which means that any
collection implementing ICollection can be enumerated using foreach
and allows the *manipulation* of the elements they contain
*/

List<T>  
/* 
List is a concrete implementation of IList<I> witch is a generic interface whitch in turn implements ICollection and also IEnumerable is a dynamic sized array that provides functionality for manipulating list of objects
 */
// Examples and differences with arrays
// Simple arrays
int[] numbers = new int[5]; // Array of 5 integers, initialized to default (0)
int[] initializedNumbers = new int[] { 1, 2, 3, 4, 5 }; // Initialized with values
int[] anotherWay = { 1, 2, 3, 4, 5 }; // Shortcut for initialization

// Now lists
List<int> numbers = new List<int>(); // Empty list
List<int> initializedNumbers = new List<int> { 1, 2, 3, 4, 5 }; // Initialized with values

int[] arrayFromList = numbers.ToArray(); // Converts the list to an array
List<int> listFromArray = new List<int>(initializedNumbers); // Initializes a list from an array


Dictionary<TKey, TValue>

HashSet<T>

Nullable<T>
/* 
Nullable is a generic type that allows values to be assigned a null value, this is usefull because by default value types such as int, double, bool etc, cannot be null:
 */
// Example
Nullable<int> nullableInt = new Nullable<int>(5);
Nullable<double> nullableDouble = new Nullable<double>();

// this is the examples with the syntactic sugar
int? nullableInt = 5;
double? nullableDouble = null;
```


