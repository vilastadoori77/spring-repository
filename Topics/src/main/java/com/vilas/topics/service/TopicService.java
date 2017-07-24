package com.vilas.topics.service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;

import com.vilas.topics.model.Topic;

@Service
public class TopicService {
	//Arrays.asList produces immutable list and we need to produce a mutable as 
	//ArrayList<>(Arrays.asList());
	private List<Topic> topics = new ArrayList<>(Arrays.asList(
			
			new Topic("spring","Spring Framework", "Spring MVC"),
			new Topic("java","Java Framework", "Java 8.0"),
			new Topic("jpa","Hibernate", " JPA Hibernate")
			
			));
	
	//get all topics
	
	public List<Topic> getAllTopics(){
		
		return topics;		
		
	}
	
	
	
	//get topic by id
	
	public Topic getTopicById(String id){
		
		return topics.stream().filter(t->t.getId().equals(id)).findFirst().get();
		
	}
	
	
	//add the topic
	
	public void addTopic(Topic topic){
		
		topics.add(topic);
		
	}
	
	public void updateTopic(String id, Topic topic){
		
		for( int i =0; i<topics.size(); i++){
			 Topic t =topics.get(i);
			 if(t.getId().equals(id)){
				 topics.set(i, topic);
				 return;
			 }
		}
		
	}
	
	public void deleteTopic(String id){
		topics.removeIf(t->t.getId().equals(id));
	}

}
