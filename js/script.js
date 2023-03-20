// Copyright (c) 2023 Julien Lamoureux inc. All rights reserved
//
// Created by: Julien Lamoureux
// Created on: March 20 2023
// This file contains the JS functions for index.html

"use strict";

function enterClicked() {
// get the base of the triangle
  let base= parseFloat(document.getElementById("base").value)
	// get the height of the triangle
  let height= parseFloat(document.getElementById("height").value)


  // display the area to the user
  document.getElementById('Answer').innerHTML = "The area of the triangle is " +height*base*0.5+"cm<sup>2</sup>."
}
