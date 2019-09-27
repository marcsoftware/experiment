import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent {

   old_dict=[`
   < SOAP >
   (Simple Object Access Protocol)
Before REST, SOAP  was most popular kind of web service.
Unlike REST it defines a protocol for XML based communication across multiple transport protocols
(HTTP, SMTP, FTP).
This protocol is uniquely defined for each SOAP service by its WSDL xml file.
REST is platform independent being HTTP and JSON based.
SOAP is platform independent since is xml based.
The SOAP message is delivered in an XML envelope carried in the body of a transport
protocol like HTTP POST.
`,`
    < WSDL >
The Web Service Description Language
It is an XML document describing everything about a SOAP service.
It can be accessed on the endpoint of an exposed SOAP service with the ?wsdl query string.
The WSDL like a contract for the whole service.
it can generated be generated by a preconfigured WSDL file (contract-first)
or generated from source code (contract-last).

      : Important element tags include :
definition - the root element
types - any complex datatype used in document (not necessary if only simple types)
message - define data elements for each operation (method params, return values)
porttype - defines operations that can be performed and the messages involved
operation - abstract description of action supported by service
binding - specify protocol and data format for operations and messages
service - specify port address(es) of binding
port - specify single endpoint as address for binding
`,`
    < JAX-WS >
Java API for XML Web Services
is Java's standard library of annotations and classes that can expose a SOAP service.
It has standard implementations for annotations like @WebService, @WebMethod, and @WebParam among others,
as well as the Endpoint.publish() method that will host an annotated service and generate the WSDL.
It will use JAX-B to marshall Java objects into XML format and unmarshall them as well.

Soap Binding styles
When translating the WSDL binding element to a SOAP message, there are...
Model: Literal (DOCUMENT) vs Encoded (RPC)
DOCUMENT you define XML structure of message body (message-oriented)
Literal: contents conform to user-defined xsd
RPC request body must contain operation name and method parameters
Encoded: uses xsd datatypes but body doesn't need to conform to user-defined xsd
`,`
SOAP Message
A SOAP message is defined by the WSDL and carried inside an XML document called an envelope.
Envelope (mandatory), defines start/end of message
Header (optional), optional attributes to be used when processing message
Body (mandatory), XML data with message to be sent (only one allowed)
Fault (optional), describes errors that may have occurred when processing

Message Structure
[code example]
To generate a SOAP message and envelope, use the JDK's wsimport tool to create Java class files to communicate directly
with the service, or use a tool like Wizdler.

Faults
Fault blocks carry error messages of failed SOAP requests. Only one fault block is allowed per message. They are optional and
generally include an HttpBinding success code (Success: 200-299). Elements include:
[code example]
`,`
                      < Spring Framework >
Spring Framework is a highly modular Application Framework built upon an IoC Container.
It offers similar features and  can interface well with many other specifications such as JPA.
Spring can be configured and deployed without the need for an application server with only a few modules,
 or it can become a self-executing server in the form of a
Spring Boot project.
`,`
              < Inversion of Control (IoC) Container >
Spring implements inversion of control through its Core IoC Container, which manages object lifecycles and automatic
dependency injection. An object managed by the container, known as a Spring Bean, is instantiated, deployed when requested,
and destroyed automatically. Any dependencies required by the bean are also injected through constructor arguments, arguments
to a factory method, or properties set on the object instance after its construction. The IoC Container is known today as the
Application Context, and originally called the Bean Factory.

The goal of an IoC Container is to decouple execution from configuration (business logic from factory logic). By separating
these concerns, an application's code base becomes more modular, loosely coupled, with less focus on how code will be
implemented and more on its business logic.

The phrase 'inversion of control' refers to this process of configuring dependencies for a bean, rather than the bean controlling
the process for its own dependencies.
`,`
                          < Modules >
The IoC container is made up of the spring-core, spring-beans, and spring-context modules, but other dependent modules such as
spring-aop are commonly used as well. The container can be further extended with the inclusion of other Spring frameworks
such as spring-mvc, spring-data, spring-security, spring-cloud, and much more.
`,`
                                            < Configuration >
While Spring Boot consolidates many modules and follows a 'convention over configuration' approach, most Spring modules
can be individually configured either through an XML file or through Java annotations. Spring Boot can load properties files and
also offers native support for YAML.

Many modules provide their own preconfigured beans, but custom beans can also be configured by registering them in the XML
configuration file or through annotations which are then scanned by the container. Once all beans and configuration options are
gathered, an Application Context is created to act as the IoC container for a program.

The Application Context is an interface with several factories to build one according to the manner of configuration, such as
ClassPathXmlApplicationContext or FileSystemXmlApplicationContext for XML files, or XmlWebApplicationContext for
Spring MVC built on Tomcat. There is also AnnotationConfigApplicationContext for a configuration class.

`,`

          < BeanFactory vs ApplicationContext >
The Bean Factory was the original interface for Spring, and has been superceded by the more capable Application Context. Bean
Factory was a sophisticated implementation of the factory design pattern which lazily and programmatically instantiate beans as
singletons.
Application Context is an extension of the Bean Factory, eagerly instantiating beans and capable of defining several different
scopes besides singleton.
`,`
        < Bean Lifecycle >
Spring's container handles the lifecycle of a bean through a complex series of steps. In general, the setup phase involves
instantiation of the empty object, handling of its dependencies, initialization of properties and default values, and any custom
initialization methods before the bean is ready for use within the program. The teardown phase dereferences the bean when it
passes out of scope (or the container is itself shutdown), but also calls any custom destroy methods along the way.

Simplified Lifecycle:
1. Instantiate Bean
2. Populate Bean (Inject Dependencies)
3. Set awareness of context values
4. BeanPostProcessor
5. (Optional) Custom Init method
6. Bean is ready for use! (Bean Mitzvah)
7. destroy()/custom destroy method (when container is shut down)

As a rule, we do not need to interfere with the lifecycle, but Spring provides several callback methods to customize it in subtle
ways. We can implement the InitializingBean/DisposableBean interfaces and override their afterPropertiesSet/destroy methods,
or we can define our own custom init and destroy methods in XML configuration or through @PostConstruct/@PreDestroy
annotations.
`,`
< Bean Scopes >
A bean has several scopes, two of which are available to a basic Application Context while the rest are usually seen in a Spring
web program.

Scope Description
singleton (Default) — Scopes a single bean definition to a single object instance for each Spring IoC container.
prototype — Scopes a single bean definition to any number of object instances.
request   —  Scopes a single bean definition to the lifecycle of a single HTTP request.
That is, each HTTP request has its own instance of a bean from a single bean definition.
session — Scopes a single bean definition to the lifecycle of an HTTP Session.
application — Scopes a single bean definition to the lifecycle of a ServletContext.
websocket Scopes — a single bean definition to the lifecycle of a WebSocket.

The most important are Singleton and Prototype for most Spring applications. Singleton is the default scope where there is one
bean (of its kind) per container, which is best for stateless objects. This is not to be confused with a proper Java singleton which
has hardcoded scope within a class loader. A Singleton scoped bean is cached and returned whenever that named object is
requested.

Prototype scope can have any number of instances per bean definition, and instead of caching existing beans a new instance is
created for each bean request. This makes it ideal for stateful objects, but Spring no longer manages the full lifecycle for us
making it little different from calling the 'new' keyword ourselves.
`,`
<Bean Wiring>
Spring can inject beans as dependencies of other beans through Setter or Constructor Injection. Beans can be wired manually
through property element attributes in an XML configuration file or through annotations. Dependencies can be registered and
referenced either by its bean name or by its type.

By far the most popular and easiest method is 'Autowiring' where Spring will figure out a dependency 'automagically' based on
its Stereotype annotation.

< Stereotype Annotations >
Component is the most basic stereotype and will work for any and all Spring beans. More specific stereotypes such as
Service or Repository mostly add unique exception handling for those purposes but otherwise work the same way as Component.
`,`


< AOP - Aspect Oriented Programming >

In OOP, the unit of modularity is the object or class, but it doesn't resolve some issues of tightly coupled code that is only
tangentially related to your business logic:

Logging, Exception Handling, Configurations, Security/Validation, Transactions, Tests

In other words: cross-cutting concerns.
In AOP, the unit of modularity is the aspect, otherwise known as a cross-cutting concern. These are code snippets or statements
that can be injected into an application which is decoupled from the business logic.

`,`
< Spring AOP >

With Spring we can define aspects as a class that has several methods which will act as interceptors to other methods in our
application. These interceptors are known as advices which will take certain types of actions.

Advice: Action to be taken at Join Point
Join Point: Method where code will be injected
Pointcut: expression which specifies join points where advices will be applied
`,`
: Advice :
Action that occurs at the joinpoint which has several types:

Before: preceeds join point, can't interfere with the joinpoint unless exception is thrown
After - proceeds join point (After-Finally)
After-returning: proceeds normal execution of joinpoint
After-throwing proceeds if exeption is thrown
Around - the most powerful advice, acts both before and after, and requires that the developer calls JoinPoint.proceed() to
continue join point execution.

: Pointcut :
Each advice will have an expression next to their Advice annotation which determines what to listen for in the stack.

- Target: object or method being advised
- AOP Proxy from Spring AOP framework will intercept calls to target and delegate appropriate advice


: Examples code lines :
Execution of any public method
execution(public * *(..))
Execution of any method starting with 'set'
execution(* set*(..))
Execution of any method defined within AnimalService interface
execution(* com.revature.service.AnimalService.*(..))
Execution of any method defined within com.revature.demo package execution(* com.revature.demo.*.*(..))
Now in subpackage execution(* com.revature.demo..*(..))
Within a package
within(com.revature.demo.*)
`,`
< Spring Web MVC >

Spring's web framework is built on the Servlet API and deployed on its own embedded Servlet container. Centered around its
Dispatcher Servlet, Spring MVC handles much of the complexity of the request-response cycle.

< MVC Design Pattern >
Model: The data being passed, rendered, and manipulated
View: What will be displayed, usually as html
Controller: Handles logic, routing

`,`
< Spring MVC Request-Response Flow >


1 .Request sent to DispatcherServlet
2. DispatcherServlet calls HandlerMapping for help with request URI
3. HandlerMapping looks up the handler for the URI, a registered Controller which is returned to the DispatcherServlet and called
4. Controller is the entry-point for an event in and out of the rest of the program
5. Controller returns a View name & Model to the DispatcherServlet
6. DispatcherServlet consults ViewResolver to interpret View name as a template file and weave the Model into the response body
7. Response sent to client
`,`


< DispatcherServlet >

Spring MVC's front controller has its own WebApplicationContext,
 allowing it to handle more bean scopes than singleton and prototype.
  It manages Controllers, HandlerMapping, ViewResolver, and all other components

< HandlerMapping >
While configurable using RequestMappingHandlerMapping objects,
it can be simply enabled using a <mvc:@annotation-driven/> element tag in configuration,
 allowing for component scanning to automatically register all
@Controller and similar beans along with their mappings.
 It is responsible for routing requests to specific methods within these controllers.

< Controllers >
A @Controller stereotype annotation registers a class as a library of methods mapped to URI paths to handle requests.
Several related annotations help to further specify these requests and their expected responses.
@RequestMapping specifies the URI with attributes like value for the path and method for the HTTP verb,
and can be defined at the class or method level.
@GetMapping is a shorthand form of a @RequestMapping with GET assumed as its method.
 Also has siblings in @PostMapping and similar annotations.
@RequestParam can be used on method parameters to bind form or query attributes to arguments.
@PathVariable can be used on method parameters to bind URI path variables to arguments.
@ResponseBody tags a method (or all methods of a class) to write their return objects directly to the response body,
skipping the ViewResolver entirely.

< ViewResolver >
ViewResolvers handle server-side view resolution for static HTML/CSS/JS files, or rendering for dynamic templates like JSPs.
`,
`
--------------------------done done-----------------------------

`];

isHidden=false;
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

dict:any;

cycle_count=0;

  //=================================================================
  //
  //=================================================================

  ngOnInit() {
    this.http.get('assets/test.txt', { responseType: 'text' })
    .subscribe(data => {
      console.log(data);
    });

    this.dict=this.old_dict.join('\n').split('\n');
    this.dict= this.dict.filter(function (el) {

      return (el.match(/[a-z]/g));
    });

    this.page_count = parseInt(this.route.snapshot.paramMap.get("number"))-1;
    this.ans_key=' '+this.dict[this.page_count]+' ';

    this.drawQuestion();
  }

  constructor(private route: ActivatedRoute,private http: HttpClient) { }

  //=================================================================
  //
  //=================================================================
  //displays question to user
  //renders stuff on screen
  drawQuestion(){

      //hide words that are not surrounded with  ϯ
      let regex = /ϯ[^ϯ]+ϯ|(\w)/g;

        this.now = this.ans_key.replace(regex, function(m, group1) {
          if (!group1) return m;
          else return "#";
      });


        this.drawProgress();
        if(this.blanks_count==0){
          if(this.cycle_count==this.cycle_size){
            this.goaback();
          }else{
            this.nextPage(); //automatically go to next page
          }
        }


  }

  //=================================================================
  //
  //=================================================================
  blanks_count=0;
  drawProgress(){

      this.now=this.now.replace(/ϯ/g,'');
      this.total_words=(this.ans_key.match(/\w+/g).length);

      try{
         this.blanks_count= this.now.match(/\#+/g).length;
      }catch(e){
        this.blanks_count=0;
      }
      this.done_count=this.total_words-this.blanks_count;
  }


  //=================================================================
  //
  //=================================================================
  //show hint when user hit ?
  flag=false;
  hint(event:any){
        let user_input=event.target.value.trim();
        if(user_input===';'){
          this.now=this.ans_key.replace(/ϯ/g,'');
          this.flag=true;
        }else if(user_input===';;'){
          event.target.value='';
          this.flag=false;
              this.drawQuestion();
        }else{
          if(this.flag){
            this.flag=false;
              this.drawQuestion();
          }
        }
  }

  //=================================================================
  //
  //=================================================================
  hardInput(event: any){

    let user_input=event.target.value.trim();

    user_input=user_input.replace(/[\.]+/g,"");
    console.log(user_input);
    if(user_input === ''){
      this.feedback='';

      return;
    }


    var replace = "(\\W)("+(user_input)+")(\\W)";
    var re = new RegExp(replace,"gi");

    this.feedback=this.ans_key.search(re);

    if(this.feedback !== -1){
      event.target.value='';
      this.feedback='yes';
    }else{

      this.feedback='no';
    }
      this.feedback+=' '+user_input;


    this.ans_key=this.ans_key.replace(re,'\$1ϯ\$2ϯ\$3');
    this.ans_key=this.ans_key.replace(/ϯ+/g,'ϯ');
    this.drawQuestion();
  }

  //=================================================================
  //
  //=================================================================

  reset(){
    this.ans_key=' '+this.dict[this.page_count]+' ';
    this.drawQuestion();
    this.drawProgress();

  }

  //=================================================================
  //
  //=================================================================

  reveal(re: any){
      this.ans_key=this.ans_key.replace(re,' ϯ ');
      this.drawQuestion();
  }


  //=================================================================
  //
  //=================================================================

  //do this everytime user enter correct input
  correctInput(event){
      this.feedback='';
      this.count++;
      event.target.value=''; //clear the users input box


      this.drawQuestion();
  }

  //=================================================================
  //
  //=================================================================
remainder:any;
 drawRemainder(){
   this.remainder= this.dict.slice(this.page_count+1).join('\n');
 }

   //=================================================================
  //
  //=================================================================
  setZero(){
    this.cycle_count=0;
  }

  //=================================================================
  //
  //=================================================================
 cycle_size=4;
  nextPage(){
    this.cycle_count++;
    this.page_count++;

    if(this.cycle_count>this.cycle_size){
      this.cycle_count=this.cycle_size;
    }

    this.ans_key=' '+this.dict[this.page_count]+' ';
      this.drawQuestion();
      this.drawRemainder();
  }

  //=================================================================
  //
  //=================================================================
  prevPage(){
    this.cycle_count--;
    if(this.cycle_count<0){
      this.cycle_count=0;
    }
      this.page_count--;
      this.ans_key=' '+this.dict[this.page_count]+' ';
      this.drawQuestion();
      this.drawRemainder();
  }

  //=================================================================
  //
  //=================================================================
  //go back to start of cycle
  goaback(){
      if(!this.isHidden){
        this.cycle_count=0;
        this.page_count++;
        this.drawQuestion();
          return ;
      }
      this.page_count -=this.cycle_size;
      this.cycle_count=0;
      this.drawQuestion();
  }


  //=================================================================
  //
  //=================================================================
  nextCycle(){
    this.page_count+=(this.cycle_size-this.cycle_count)+1;
    this.cycle_count=0;
    this.reset();
    this.drawQuestion();
    this.drawRemainder();
  }
}


