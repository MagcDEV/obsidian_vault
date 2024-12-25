 Tags: [[Dotnet]], [[Csharp]] 
 ----
In C# we have managed and unmanaged resources, the managed resources are the one that are managed by the .NET garbage collector it handles the allocation and deallocation of resources, so developers do not need to explicitly release them.

Managed Resources:
- Instances, classes and objects
- Memory allocated by the .NET runtime
- Managed objects like strings, arrays, and collections

The Unmanaged resources are the ones not managed by the garbage collector automatically and needs to be explicitly released by the developer.

Unmanaged Resources:
- File Handlers
- Database Connections
- Network Connections
- Windows handles
- Graphics resources

Unmanaged resources are typically wrapped in classes that implements the **==IDisposable==** interface, the disposable method of this interface is used to release unmanaged resources explicitly.

We can use the **==using==** statement to ensure that IDisposable objects are properly disposed of when they are no longer needed.

Example:
``` csharp

// Without the using statement, you would need to call Dispose() on the object manually  
public class OldWayClass  
{  
    public void ExampleMethod()  
    {        
	    var client = new HttpClient();  
        try  
        {  
            // Do work here  
        }  
        finally  
        {  
            client.Dispose(); // Call Dispose() to free resources  
        }  
    }}  
  
// example of using statement  
public class ExampleClass  
{  
    public void ExampleMethod()  
    {        
	    using (var client = new HttpClient())  
        {            
	        // Do work here  
        }  
    }}  
  
// another way to write the same code  
public class AnotherExampleClass  
{  
    public void AnotherExampleMethod()  
    {        
	    using var client = new HttpClient();  
        // Do work here  
    }  
}
```