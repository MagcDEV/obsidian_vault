 Tags: [[Dotnet]], [[Csharp]] 
 ----
``` csharp

public class MierdaClient  
{  
    private static readonly HttpClient Client = new HttpClient();  

    public async Task DescargadorAsync(string url)  
    {        
	    var html = await Client.GetStringAsync(url);  
        await using var streamWriter = 
	        new StreamWriter(@"c:\projects\result.html");  
        await streamWriter.WriteAsync(html);  
  
    }    
    
    public void Descargador(string url)  
    {        
	    var html = Client.GetStringAsync(url).Result;  
        using var streamWriter = new StreamWriter(@"c:\projects\result.html");  
        streamWriter.Write(html);  
    }    
}
```