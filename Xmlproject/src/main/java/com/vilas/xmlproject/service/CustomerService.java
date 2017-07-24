package com.vilas.xmlproject.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vilas.xmlproject.model.Customer;

@Service
public class CustomerService {
	
	private List<Customer> customers = new ArrayList<Customer>(
			
			Arrays.asList(
							new Customer("cust001", "Vilas Tadoori", " Fitting"),
							new Customer("cust002","ZAK", "Reverse Swing"),
							new Customer("cust003", "SAT", "Fitter")					
					));
	
	
	
	public List<Customer> getAllCustomers(){
		
		return customers;
		
	}
	
	
	public Customer getCustomer(String id){
				
			return customers.stream().filter(t->t.getId().equals(id)).findFirst().get();
		
	}
	
	
	public void addCustomer(Customer customer){
		customers.add(customer);
	}
	
}



