package com.example.accessingdatamysql;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

import com.example.accessingdatamysql.User;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface UserRepository extends CrudRepository<User, Integer> {
    
    @Query(value="select * from User",nativeQuery=true)
    List<User> getSpecial();



    /*

@Query("SELECT u FROM User u WHERE u.status = ?1 and u.name = ?2")
User findUserByStatusAndName(Integer status, String name);
    */
    @Query(value="select note from User where name = ?1 ORDER BY id DESC limit 1  ",nativeQuery=true)
    List<String> customGetNote(String name);


    @Query(value="select note from User u where u.name = ?1 ",nativeQuery=true)
    List<String> customTest(String name);
}   
