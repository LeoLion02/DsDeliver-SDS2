package com.projeto.dsdeliver.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projeto.dsdeliver.entities.Order;


public interface OrderRepository extends JpaRepository<Order, Long> {
	

}
