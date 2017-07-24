package com.vilas.xmlproject.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vilas.xmlproject.model.Customer;
import com.vilas.xmlproject.service.CustomerService;

@RestController
public class CustomerController {
	@Autowired
	CustomerService custservice;
	
	@RequestMapping(value="/all", method=RequestMethod.GET)
	public List<Customer> getAllCustomers()
	{
		
		return custservice.getAllCustomers();
		
		
		
	}
	
	
	@RequestMapping(value="/all/{id}", method=RequestMethod.GET)
	public Customer getCustomerById(@PathVariable("id") String id){
		return custservice.getCustomer(id);
		
	}
	
	@RequestMapping(value="/all", method=RequestMethod.POST)
	public void addCustomer(@RequestBody Customer customer){
		
		custservice.addCustomer(customer);
		
	}
	

}
