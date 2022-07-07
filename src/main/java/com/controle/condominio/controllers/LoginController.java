package com.controle.condominio.controllers;

import com.controle.condominio.services.ParkingSpotService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
public class LoginController {
    @Autowired
    UserDetailsService userDetailsService;

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
    @RequestMapping("/")
    public String login(){
        return "login";
    }
}
