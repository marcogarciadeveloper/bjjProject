package com.bjj.rest.webservices.restfulwebservices.HelloWorld;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorld {

    @GetMapping("/hello")
    public static String helloWorld(){
        return "HelloWorld";
    }

    @GetMapping("/helloWorldBean")
    public HelloWorldBean helloWorldBean(){
        return new HelloWorldBean("Hello World bean Marco Garcia");
    }

    @GetMapping("/helloWorldBean/{name}")
    public HelloWorldBean helloWorldBeanName(@PathVariable String name){
        HelloWorldBean helloWorldBean = new HelloWorldBean(String.format("Hello %s",name));
        return helloWorldBean;
    }
}
