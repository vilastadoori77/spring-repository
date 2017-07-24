package com.vilas.xmlproject.model;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class Customer {
	private String id;
	private String custName;
	private String custDept;
	
	
	private Customer(){}


	public Customer(String id, String custName, String custDept) {
		super();
		this.id = id;
		this.custName = custName;
		this.custDept = custDept;
	}


	public String getId() {
		return id;
	}


	public void setId(String id) {
		this.id = id;
	}


	public String getCustName() {
		return custName;
	}


	public void setCustName(String custName) {
		this.custName = custName;
	}


	public String getCustDept() {
		return custDept;
	}


	public void setCustDept(String custDept) {
		this.custDept = custDept;
	}
	
	

}
