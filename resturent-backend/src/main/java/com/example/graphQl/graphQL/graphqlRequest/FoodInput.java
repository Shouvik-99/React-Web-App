package com.example.graphQl.graphQL.graphqlRequest;


public class FoodInput {

    private String foodName;

    private String foodCategory;

    private long foodPrice;

    private long foodQuantity;

    private String foodType;

    private String foodImage;

    public FoodInput() {
    }

    public FoodInput(String foodName, String foodCategory, long foodPrice, long foodQuantity, String foodType, String foodImage) {
        this.foodName = foodName;
        this.foodCategory = foodCategory;
        this.foodPrice = foodPrice;
        this.foodQuantity = foodQuantity;
        this.foodType = foodType;
        this.foodImage = foodImage;
    }

    public String getFoodName() {
        return foodName;
    }

    public String getFoodCategory() {
        return foodCategory;
    }

    public long getFoodPrice() {
        return foodPrice;
    }

    public long getFoodQuantity() {
        return foodQuantity;
    }

    public String getFoodType() {
        return foodType;
    }

    public String getFoodImage() {
        return foodImage;
    }

}
