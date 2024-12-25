 Tags: [[Dotnet]], [[Csharp]] 
 ----
Events are mechanist for communication between objects, are used to build loosely coupled applications and help extending applications without the need to modify the existing ones (open / close principle).

``` csharp
var video = new Video { Title = "Video 1" };  
var videoEncoder = new VideoEncoder(); // publisher  
var mailService = new MailService(); // subscriber  
var messageService = new MessageService(); // another subscriber  
  
videoEncoder.VideoEncoded += mailService.OnVideoEncoded;  
videoEncoder.VideoEncoded += messageService.OnVideoEncoded;  
  
videoEncoder.Encode(video);  
  
public class MailService  
{  
    public void OnVideoEncoded(object source, VideoEventArgs args)  
    {        
    Console.WriteLine("MailService: Sending an email..." + args.Video.Title);  
    }
}  
  
public class MessageService  
{  
    public void OnVideoEncoded(object source, VideoEventArgs args)  
    {        
    Console.WriteLine("MessageService: Sending a text message..." + args.Video.Title);
    }
}  
  
public class VideoEventArgs : EventArgs  
{  
    public Video Video { get; set; }  
}  
  
public class Video  
{  
    public string Title { get; set; }  
}  
  
public class VideoEncoder  
{  
    // 1. Define a delegate  
    // 2. Define an event based on that delegate    // 3. Raise the event          
    // For simplicity, we can use the EventHandler delegate it comes in two flavors:  
    // EventHandler    // EventHandler<TEventArgs>    public event EventHandler<VideoEventArgs> VideoEncoded;  
    // public delegate void VideoEncodedEventHandler(object source, VideoEventArgs args);  
    // public event VideoEncodedEventHandler VideoEncoded;    public void Encode(Video video)  
    {        
	    Console.WriteLine("Encoding video...");        
	    Thread.Sleep(3000);        
	    Console.WriteLine(video.Title);                
	    OnVideoEncoded(video);  
    }        
    
    protected virtual void OnVideoEncoded(Video video)  
    {        if (VideoEncoded != null)            
			    VideoEncoded(this, new VideoEventArgs(){Video = video});    
	}
}

```