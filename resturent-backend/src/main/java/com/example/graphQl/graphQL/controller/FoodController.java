package com.example.graphQl.graphQL.controller;

import com.coxautodev.graphql.tools.GraphQLSubscriptionResolver;
import com.example.graphQl.graphQL.exception.ResourceNotFoundException;
import com.example.graphQl.graphQL.graphqlRequest.FoodInput;
import com.example.graphQl.graphQL.model.Food;
import com.example.graphQl.graphQL.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class FoodController implements GraphQLSubscriptionResolver {

    @Autowired
    private FoodRepository foodRepository;

    // get all Foods
    @GetMapping("/foods")
//    @QueryMapping("allFoods")
    public List<Food> getAllFoods(){
        return foodRepository.findAll();
    }

//     create Food rest api
    @PostMapping("/foods")
//    @MutationMapping("createFood")
    public Food createFood(@RequestBody FoodInput foodInput) {
        final Food food = new Food();
        food.setFoodName(foodInput.getFoodName());
        food.setFoodCategory(foodInput.getFoodCategory());
        food.setFoodPrice(foodInput.getFoodPrice());
        food.setFoodQuantity(foodInput.getFoodQuantity());
        food.setFoodType(foodInput.getFoodType());

        return foodRepository.save(food);
    }

    // get Food by id rest api
    @GetMapping("/foods/{id}")
//    @QueryMapping("getFood")
    public Food getFoodById(@PathVariable Long id) {
        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food not exist with id :" + id));
        return food;
    }

    // update Food rest api
    @PutMapping("/foods/{id}")
//    @MutationMapping("updateFood")
    public Food updateFood(@PathVariable Long id, @RequestBody Food foodInput){
        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food not exist with id :" + id));

        food.setFoodName(foodInput.getFoodName());
        food.setFoodCategory(foodInput.getFoodCategory());
        food.setFoodPrice(foodInput.getFoodPrice());
        food.setFoodQuantity(foodInput.getFoodQuantity());
        food.setFoodType(foodInput.getFoodType());

        Food updatedFood = foodRepository.save(food);
        return updatedFood;
    }

    // delete Food rest api
//    @MutationMapping("deleteFood")
    @DeleteMapping("/foods/{id}")
    public Food deleteFood(@PathVariable Long id){
        Food food = foodRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Food not exist with id :" + id));

        foodRepository.delete(food);
        return food;
    }

}
