package com.controle.condominio.repositories;

import com.controle.condominio.models.ApartamentModel;
import org.springframework.data.repository.CrudRepository;

import java.util.UUID;

public interface ApartamentModelRepository extends CrudRepository<ApartamentModel, UUID> {
}