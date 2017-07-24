package com.vilas.springintegration.model;

public class Customer {
	
	private String firstName;
	private String lastName;
	private String custDept;
	
	public Customer(){}

	public Customer(String firstName, String lastName, String custDept) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.custDept = custDept;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getCustDept() {
		return custDept;
	}

	public void setCustDept(String custDept) {
		this.custDept = custDept;
	}

	@Override
	public String toString() {
		return "Customer [firstName=" + firstName + ", lastName=" + lastName + ", custDept=" + custDept + "]";
	}
	
	
	

}
