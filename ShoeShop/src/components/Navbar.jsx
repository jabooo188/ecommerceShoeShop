
import React from "react";

function NavBar (){
    return (
        <nav class="navbar navbar-expand-lg">
            <div class="container-fluid">
              
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Login</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Register</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Products</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Categories <i class="bi bi-chevron-down"></i></a>
                    </li>
                    
                   
                </ul>
                <a  class="navbar-brand" href="/"><img width="50px" src="./src/assets/image-logo.png" alt="logo ss" /></a>
                <form class="d-flex" role="search">
                    <input class="form-control me-2 rounded-pill" type="search" placeholder="Search" aria-label="Search"></ input>
                    <button width="50px" height="50px" className="btn bg-body-tertiary rounded-circle btn-outline-dark" type="submit">
                        <i class="bi bi-search"></i>
                    </button>
                </form>
                <button width="50px" height="50px" className="btn bg-body-tertiary rounded-circle btn-outline-dark m-2" type="submit">
                    <i class="bi bi-person"></i>
                </button>
               
                </div>
            </div>
        </nav>
    )
}

export default NavBar
