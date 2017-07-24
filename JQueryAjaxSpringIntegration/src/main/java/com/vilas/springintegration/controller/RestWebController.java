package com.vilas.springintegration.controller;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.vilas.springintegration.message.Response;
import com.vilas.springintegration.model.Customer;

@RestController
public class RestWebController {
	
	List<Customer> cust = new ArrayList<Customer>();
	//get all customers
	@RequestMapping(value="/getallcustomer", method=RequestMethod.GET)
	public Response getAllCustomers(){
		
		Response response = new Response("Done", cust);
		
		return response;		
	}
	
	//post the customer
	@RequestMapping(value="/postcustomer", method=RequestMethod.POST)
	public Response postCustomer(@RequestBody Customer customer){
		cust.add(customer);
		
		Response response = new Response("Done", customer);
		
		return response;
		
	}
	

}
