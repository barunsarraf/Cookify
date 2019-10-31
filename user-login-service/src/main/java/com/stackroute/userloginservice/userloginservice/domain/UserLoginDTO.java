package com.stackroute.userloginservice.userloginservice.domain;

import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Getter
@Setter

public class UserLoginDTO {
    private String username;
    private String password;
    private String name;
    private int age;
    private String gender;
    private String emailId;
    private String country;
    private String state;
    private String city;


    @Override
    public String toString() {
        return "UserLoginDTO{" +
                "username='" + username + '\'' +
                ", password='" + password + '\'' +
                ", name='" + name + '\'' +
                ", gender='" + gender + '\'' +
                ", emailId='" + emailId + '\'' +
                ", country='" + country + '\'' +
                ", state='" + state + '\'' +
                ", city='" + city + '\'' +
                '}';
    }
}
