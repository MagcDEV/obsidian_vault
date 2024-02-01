***

A class should depend on abstractions, not on concretions. This means that we should  use interfaces or abstract classes to define the dependencies between classes, rather than using concrete classes. This allows us to invert the control of the dependencies, so that the high-level modules do not depend on the low-level modules, but both depend on the abstractions. This makes the code more loosely coupled and easier to change. For example, a class that represents a book store should not depend on a specific database class, but on an abstract data access layer that defines the methods for accessing the data. This way,  we can change the database class without affecting the book store class.







