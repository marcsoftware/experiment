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
@Query(
  value = "SELECT * FROM Users u WHERE u.status = '?1'", 
  nativeQuery = true)
User findUserByStatusNative(Integer status);
    */
    @Query(value="select note from User where name = 'melcher' ORDER BY id DESC limit 1  ",nativeQuery=true)
    List<String> customGetNote();
}   
