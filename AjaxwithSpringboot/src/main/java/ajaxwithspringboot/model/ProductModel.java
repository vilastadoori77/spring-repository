package ajaxwithspringboot.model;

import java.util.ArrayList;
import java.util.List;

public class ProductModel {
	
	public Product find(){
		
		return new Product("P001","Ponds Soap", 20);
		
	}
	
	public List<Product> findAll(){
		
		List<Product> products = new ArrayList<Product>();
		
		Product p1 = new Product("P001","Ponds Soap", 20);
		products.add(p1);
		Product p2 = new Product("P002","Cinthol", 25);
		products.add(p2);
		Product p3 = new Product("P003","Coke", 30);
		
		products.add(p3);
		
		return products;
		
	}

}
