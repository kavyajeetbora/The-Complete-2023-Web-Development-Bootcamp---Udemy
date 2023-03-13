# Client-server architecture 

The client is the application which user interacts with and server is where the web application is stored, from where user can make an request for a service from the server. 

The client makes an http request 

# What is RESTful api?

REST stands for representation state transfer - it is a convention to build these http services

Here is a restfull api arcihtecture:
<img src ="https://content.altexsoft.com/media/2021/03/rest_api_works.png.webp" height="300"/>

## Main building blocks of REST API are:
1. Request: What are things we want from the server:

    CRUD Operations in REST API are equivalent to HTTP methods:
    - Create is POST
    - Read is GET
    - Update is PUT
    - Delete is Delete

<img src="restful convention.PNG" height="300"/>

    What are the components in request:
    - operation 
    - Endpoint: for example https://flipkart.com/api/customer may be an endpoint to list all customers in flipkart.com
    - Parameters/body
    - Headers: for example authentication data, keys etc

2. Response

Benefits of rest Api
- simple/standardised
- scalable and stateless (we dont have to worry about the data, what state it is in)
- High performance 

Here is a link to video explaning about the RESTfull api:
[![Video: What is restAPI](https://img.youtube.com/vi/lsMQRaeKNDk/0.jpg)](https://www.youtube.com/watch?v=lsMQRaeKNDk)