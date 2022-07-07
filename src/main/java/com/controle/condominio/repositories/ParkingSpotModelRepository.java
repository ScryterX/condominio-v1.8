package com.controle.condominio.repositories;

import com.controle.condominio.models.ParkingSpotModel;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ParkingSpotModelRepository extends CrudRepository<ParkingSpotModel, UUID> {
}