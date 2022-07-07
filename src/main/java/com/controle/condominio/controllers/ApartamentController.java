package com.controle.condominio.controllers;

import com.controle.condominio.dtos.ParkingSpotDto;
import com.controle.condominio.models.ApartamentModel;
import com.controle.condominio.models.ParkingSpotModel;
import com.controle.condominio.repositories.ApartamentModelRepository;
import com.controle.condominio.services.ParkingSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@Controller
public class ApartamentController {
    @Autowired
    ApartamentModelRepository apartamentModelRepository;

    @Autowired
    ParkingSpotService parkingSpotService;

    @RequestMapping(value = "/dashboard", method = RequestMethod.GET)
    public String index(Model model)
    {
        model.addAttribute("registros", parkingSpotService.findAll());
        return "index";
    }

    @RequestMapping(value = "/dashboard", method = RequestMethod.POST)
    public String post(Model model)
    {
        model.addAttribute("registros", parkingSpotService.findAll());
        return "index";
    }
//    @GetMapping("formulario")
//    public String formulario(ApartamentModel apartamentModel) {
//
//        return "pedidos/formulario";
//    }
//    @RequestMapping(value = "/process", method = RequestMethod.POST)
//    public String index(@ModelAttribute @RequestBody @Valid ApartamentModel apartamentModel){
//        apartamentModelRepository.save(apartamentModel);
//        return "redirect:/dashboard";
//    }

}
