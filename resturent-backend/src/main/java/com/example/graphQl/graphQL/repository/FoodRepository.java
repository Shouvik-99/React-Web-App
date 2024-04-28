package com.example.graphQl.graphQL.repository;

import com.example.graphQl.graphQL.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food, Long>{

}
