package com.vilas.topics.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.vilas.topics.model.Topic;
import com.vilas.topics.service.TopicService;

@RestController
public class TopicController {
	
	@Autowired
	TopicService topicservice;
	
	//controller to get all the topics
	@RequestMapping(value="/all",method=RequestMethod.GET)
	public List<Topic> getAllTopics(){
		
		return topicservice.getAllTopics();
		
	}
	@RequestMapping(value="/all/{id}", method=RequestMethod.GET)
	public Topic getTopicId(@PathVariable("id")String id){
		
		return topicservice.getTopicById(id);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/all")
	public void addTopic(@RequestBody Topic topic){
		
		 topicservice.addTopic(topic);
		
	}
	
	@RequestMapping(value ="/all/{id}", method=RequestMethod.PUT)
	public void updateTopic(@PathVariable("id") String id,@RequestBody Topic topic){
		topicservice.updateTopic(id, topic);
		
		
	}
	
	
	@RequestMapping(value ="/all/{id}", method=RequestMethod.DELETE)
	public void deleteTopic(@PathVariable("id") String id ){
		topicservice.deleteTopic(id);
		
	}

}
