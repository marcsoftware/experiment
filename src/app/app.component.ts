import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learn';
  math = Math;// hack since angular does not recognize Math on the html page,
  question :string;
  feedback :any;
 page_count=0;

  count=0;
 now;

 total_words=0;
 done_count=0;
  ans_key;


   dict=[`
   git : saves snapshots of project on one or more branching paths.
   Repository : currently active project folder
   staging area: place where changes are added before commiting
   commit : snapshot of changes
   branch : named pointer to a commit
   head : pointer to current branch
   remote : link to external repository

   git init
   git add .
   Git commit -m “message”
   git remote add origin URL
   git push -u origin master

    `,`
     java is a object oriented programming language.
       Features:
       platform independent : It can run on any platform that supports java.
                             compiler converts sourcecode to byte code,
                             then the jvm executes the byte code.
                             Each OS has its own JVM for executing byte code.
       Clear verbose syntax :
       multi-paradigm : is object oriented but supports imperative, generic, concurrent functional paradigms as well.
       Garbage collection : JVM performs automatic de-allocation of unused objects at runtime.
       Multithreading : allows concurrent and parallel execution of several parts of a java program
    `,`
    Need JRE java runtime environment  to run java applications.
    NEED JDK to compile java programs .
    The JDK adds compiler on top of the JRE standard libraries and JVM.

    Java source code has.java extension.
    bytecode has .class extension. javac converts to byte code.
    JVM executes bytecode
    or translates the java commands into low-level instructions of the operating system.

    All java programs run inside a container , and start and end with a main method.

    :Java access modifier keywords:
    public - the main method can be accessed from any method during the
    program's execution.
    static - the method can be invoked without creating an instance of the class that
     contains it, making it a global method.
     :return type keyword:
    void - the method doesn't return any value.
    ::
    args - String array that holds command line arguments.

    `,`
    Abstraction- By simplifying objects to a set of
    useful features, we hide irrelevant details, reduce complexity, and increase efficiency. Complicated
    real-world objects are reduced to simple representations

    Encapsulation - Objects should group together related variables and functions and be in complete control
     over them. So the state of an object should only change through the object itself. Also known
      as data hiding and no outside object or function should interfere.

    Inheritance -
    classes can reuse code from existing ones. This establishes a superclass-subclass (or parent-child)
    relationship where the derived classes inherit fields and methods from its parent.

    Polymorphism - With inheritance, an object of a derived class can be referenced as instances of its parent
     class. This provides flexibility when invoking inherited methods with varying implementations in derived classes.

    Scope : is based on location of the declaration.
    Static or class scoped -visible to all instances of a related class.
    Instance or object scoped - visible to only that object instance.
    Local or method scoped - visible only within a method.
    Block or loop scoped - visible only within a block statement.
    `,`
    Access modifiers
    private - accessible only within the context of that class
    default - accessible within the context of a package
    protected - accessible to the package, but also to derived child classes outside of the package
    public - accessible anywhere
    `,`
    Exception Handling
When something wrong occurs during execution, the current stack frame will throw an exception.
If the exception is not handled, or thrown up the stack to be handled elsewhere, the program will crash.
Good exception handling helps a program continue execution.
Common issues which can throw exceptions involve :
stack or heap memory overflow, an array iterating out of bounds, or an interrupted stream or thread.

Checked Exceptions are compile-time issues that must be handled or thrown before the compiler can
 build, such as IOException. Unchecked Exceptions occur at runtime, so the compiler cannot predict
 them and does not force them to be handled. Most unchecked exceptions extend RuntimeException, such as
 NullPointerException. Errors are serious issues and should not be handled, such as StackOverflowError.

 :Throws:
The throws keyword re-throws an exception up the stack to the method that called the throwing method.
If the exception is continually thrown and never handled, the compiler will be satisfied in the case
 of checked exceptions but any issues will still break the program.

    `,`
    :Finally:
      Try blocks can be followed by one finally block, and can either replace the mandatory single catch
      block or follow one or more catch blocks. They are always guaranteed to execute, even if no exceptions
      are thrown, and are useful for closing resources that may be left open in memory due to an interruption
      from a thrown exception.

    :Try-with-resources:
      Declaring and defining a resource - any object that implements AutoCloseable - within a pair of
      parenthesis after the try keyword removes the necessity of a finally block to close that resource.

    : InputStream/OutputStream -> BufferedReader/BufferedWriter :
        The JVM can connect to external datasources such as files or network ports. InputStream/OutputStream
        and its implementations stream this data as an array of bytes whereas Reader/Writer and its
        implementations wrap InputStream/OutputStream to stream data as a char array. BufferedReader/BufferedWriter
        wraps Reader/Writer to stream several characters at a time, minimizing the number of I/O operations needed.

     :Scanner:
        BufferedReader provides many convenient methods for parsing data. Scanner can achieve the same, but unlike
        BufferedReader it is not thread-safe. It can however parse primitive types and Strings with regular
        expressions. Scanner has a buffer as well but its size is fixed and smaller than BufferedReader by
        default. BufferedReader requires handling IOException while Scanner does not. Thus, Scanner is best
        used for parsing input into tokenized Strings.
    `,`
    Generics
    When passing objects into methods and data structures, a developer can overload or extend for its specific
     type or cast the object up and down its inheritance heirarchy. In contrast a generic type improves code
      reuse and type safety, reducing code by allowing methods and data structures to accept any type without
      risking dynamic runtime exceptions. Generic type parameters act as placeholders in a method signature
       while diamond operators specify the type for the compiler to enforce at compile time:

       Collections Framework
Java's collections framework implement common data structures for objects.
List is an ordered collection of elements. A user has the ability to place an element anywhere in the list.
 The elements are accessable by their index. Unlike Set, List typically allows for duplicate elements such
 that element1.equals(element2). In addition to duplicates, List allow for multiple null elements to be stored.
Set is a collection of non duplicate elements meaning there will never exist a situation where element1.
equals(element2). In addition to this, it is implied that there can only exist one null element due to
the no duplicates rule.
Queue is a collection of elements who in essence cannot be iterated, instead the Queue follows the
 FIFO (First In First Out) rule. When an element is added to the Queue it is placed at the back and
 when an element is pulled it is pulled from the from the front (index :0).
Deque extends Queue but augments the ability to insert and remove elements at either end. The name
 is short for "Double Ended Queue" and is pronounced "Deck".
Map is an interface which stores data with a key. A map cannot contain duplicate keys; each key
can map to at most one value. Map can be visualized like a dictionary where only one word is paired
 with one definition.
    `,`
    Threads
    A thread is a unit of program execution that runs independently from other threads. Java programs
     can consist of multiple threads of execution that behave as if they were running on independent CPUs.

     Extend Thread
     Implement Runnable
     Anonymous Runnable Class
     Runnable Lambda
    `,`
    Maven
    Opinionated project management tool for build automation, dependency management, and other actions.
     Once installed, use with
    the mvn command. Allows for a project to be IDE agnostic. See the official Maven project for documentation:
    http://maven.apache.org/index.html as well as the mvn repository to find available libraries:
    https://mvnrepository.com/

    maven build cycle
    validate compile test package verify install deploy

    commands
    mvn archetype:generate
    mvn compile
    mvn package
    mvn clean
    `,`
    SQL
    Terminology
    RDBMS Relational Database Management System, relational referring to relational data (i.e. tables).
    Schema Like packages/namespaces, groupings of tables expressing some database logical structure.
    SQL implementations There is PostgreSQL is an Enterprise Database like Oracle, SQL Server, but there are others like
    MySQL/MariaSQL as well as non relational SQL databases (NoSQL).
    Candidate Key A column that can uniquely identify a row (or entry) and thus is a potential candidate for a primary key.
    Composite Key A primary key consisting of multiple columns.
    Primary Key Unique (in that table), non-null candidate key.
    Foreign Key A key that points to another primary key of a row (either in another table, or the same).
    Multiplicity Refers to the relationship between linked tables. One-to-One (University, President),
    One-to-Many (University,
    Students), Many-to-Many (Students, Teachers). In 1:1, FKs will be within same table. 1:many,
    FKs will be in the other table.
    many:many, FKs will be in a junction/transition/join/lookup table.
    Referential Integrity Enforcing data relationships, changes reflected between foreign keys.
     No orphans, all child rows must
    have their parent rows deleted as well.
    Domain Integrity Column data is restricted to allowed range of allowed type.
    ERD Entity-Relational Diagram
    Alias The AS or IS keyword allows you to set a Table name or column name as a short variable.
    Normalization Dividing data into separate tables to reduce redundancy and improve query speed
    1st NF (Atomic values, No repeating Columns
    2nd NF (Remove Partial Dependencies)
    3rd NF (Remove Transitive Dependencies
      `,`
      Sublanguages
DCL Data Control Language, setting user permissions (GRANT, REVOKE)
DDL Data Definition Language, working with database structure (CREATE, ALTER, TRUNCATE, DROP) EX:
DML Data Manipulation Language, working with the rows of data itself (INSERT, UPDATE, DELETE) EX:
DQL Data Query Language, retrieving rows of data (SELECT). EX
TCL Transaction Control Language, managing transactions (COMMIT, ROLLBACK, SAVEPOINT)
`,`
types of joins
Types
Inner Join, selects records with matching values from TableA and TableB 1.
Left (Outer) Join, TableA primary, selects all records from A with matching values from B (non-matching values included as
null)
2.
Right (Outer) Join, TableB is primary, opposte of Left Join. 3.
Cross Join, Cartesian join of two tables, if TableA has 5 rows, and TableB has 3 rows, the cross join will have 15 rows 4.
Subquery is a query nested in the WHERE clause of a SELECT statement, in orde3r to further restrict the data returned. There
are correlated and non-correlated. Correlated subqueries depend on the outer query to exist, meaning they cannot execute
independently

Unions
UNION returns distinct rows present in either return set 1.
UNION ALL returns all rows in both sets (including duplicates) 2.
INTERSECT returns distinct rows present in both sets 3.
EXCEPT returns all rows present in first set but not in second

   Functions
Sequences Generate numeric sequence, mostl for creating/managing primary keys.
Views Virtual table that displays the results of a SELECT statement, lets you reuse and store complex queries
Indexes Physical ordering of a column or group of columns, having unique indexes
Aggregate Functions (AVG, MIN, MAX, SUM, COUNT) perform an action on an entire column
Scalar functions (LOWER, UPPER) operate on individual entries
Functions Custom function with 0 or many input parameters, but 0 or 1 output. DML is not allowed.
Stored Procedures Custom function with 0 or many input parameters, but 0 or many output parameters. DML allowed
    `,`done`];

  //=================================================================
  //
  //=================================================================

  ngOnInit() {


    this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }


  //=================================================================
  //
  //=================================================================
  //displays question to user
  //renders stuff on screen
  drawQuestion(){

      let regex = /ϯ[^ϯ]+ϯ|(\w)/g;
        this.now = this.ans_key.replace(regex, function(m, group1) {
          if (!group1) return m;
          else return "#";
      });

        this.drawProgress();
  }

  //=================================================================
  //
  //=================================================================
  drawProgress(){
      this.now=this.now.replace(/ϯ/g,'');
      this.total_words=this.now.match(/[^\ ]+/g).length;
      let blanks_count= this.now.match(/\#+/g).length;
      this.done_count=this.total_words-blanks_count;
  }


  //=================================================================
  //
  //=================================================================
  //show hint when user hit ?
  flag=false;
  hint(event:any){
        let user_input=event.target.value.trim();
        if(user_input===';'){
          this.now=this.ans_key;
          this.flag=true;
        }else{
          if(this.flag){
            this.flag=false;
              this.drawQuestion();
          }
        }
  }


  hardInput(event: any){

    let user_input=event.target.value.trim();

    user_input=user_input.replace(/[\.]+/g,"");
    console.log(user_input);
    if(user_input === ''){
      this.feedback='';

      return;
    }

    event.target.value='';
    var replace = "(\\W)("+(user_input)+")(\\W)";
    var re = new RegExp(replace,"gi");

    this.feedback=this.ans_key.search(re);

    if(this.feedback !== -1){
      this.feedback='yes';
    }else{
      this.feedback='no';
    }
      this.feedback+=' '+user_input;


    this.ans_key=this.ans_key.replace(re,'\$1ϯ\$2ϯ\$3');
    this.ans_key=this.ans_key.replace(/ϯ+/g,'ϯ');
    this.drawQuestion();
  }


  reveal(re: any){
      this.ans_key=this.ans_key.replace(re,' ϯ ');
      this.drawQuestion();
  }


  //do this everytime user enter correct input
  correctInput(event){
      this.feedback='';
      this.count++;
      event.target.value=''; //clear the users input box


      this.drawQuestion();
  }







  nextPage(){
    this.page_count++;
    this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }

  prevPage(){
      this.page_count--;
      this.ans_key=this.dict[this.page_count];
      this.drawQuestion();
  }

}


