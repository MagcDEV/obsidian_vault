 Tags: [[Dotnet]], [[Csharp]] 
 ----
Is just an anonymous method do not have a access modifier, no name and no return statements

``` csharp
// here we use a lambda expresion as a Predicate in the FindAll method

Func<int, int> square = number => number * number;

Predicate<Book> isCheaperThan10Dollars = book => book.Price < 10; 


var bookRepository = new BookRepository();
var cheapBooks = bookRepository.GetBooks().FindAll(b => b.Price < 10); // we could use the isCheaperThan10Dollars Predicate that is a Generic

foreach (var book in cheapBooks)
{
    Console.WriteLine(book.Title);
}

public class Book(string title, int price)
{
    public string Title { get; set; } = title;
    public int Price { get; set; } = price;
}

public class BookRepository
{
    public List<Book> GetBooks()
    {
        return
        [
            new Book("Book 1", 5),
            new Book("Book 2", 7),
            new Book("Book 3", 17)
        ];
    }
}

```