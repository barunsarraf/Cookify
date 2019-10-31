package com.stackroute.recommendationservice.domain;


import lombok.*;
import org.neo4j.ogm.annotation.Id;
import org.neo4j.ogm.annotation.NodeEntity;
@Data
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@NodeEntity
public class OperationDTO {
    private String username;
    private Recipe recipe;
    private String operation;
}