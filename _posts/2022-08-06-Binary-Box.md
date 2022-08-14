---
published: true
layout: splash
tags: 
- hardware
- Raspberry Pi Pico
- laser cutter
---

# The Binary Box

This is the binary box. It's a simple hardware project to help teach and demonstrate differente binary representations of numbers.

![The top of the binary box](/images/BinaryBox/Front.jpg){: .align-center}

Making this binary box was inspired in part by Adam Millerchip's talk on binary numbers at Nerd Nite Kyushu.  [You can see a recording of the talk here.](https://www.youtube.com/watch?v=hl39l4emh9Q)

Before making the box, I had also agreed to host a group of school children at the Engineer Cafe and teach them something about computers. I figured binary numbers was an appropriate topic and the children would enjoy seeing a physical device rather than a representation on a screen.

## Goals

My main goal was to produce something immediate and tactile. When you toggle one of the switches the displayed number changes instantly and gives a good sense of connection between the eight "bits" and the number.

## The Hardware

Inside the box there are four parts: 8 switches to represent bits, a 7-segment display to show the number, dip switches to change the mode and a Raspberry Pi Pico to control everything.  The Raspberry Pi Pico is an excellent microcontroller to get started on. I picked one up at my local electronics shop for ¥500 (about 4 US dollars). It is easy to power from a battery or a USB power supply. You can write code in micropython. It also has many pins to connect lots of switches, LEDs, sensors and other peripherals.  


![The inside of the binary box](/images/BinaryBox/Inside.jpg){: .align-center}


## The Box
The box is made from laser cut 4mm plywood.  I created the box using the excellent [boxes.py](https://www.festi.info/boxes.py/) online tool.  Make sure you measure your material thickness carefully when cutting boxes! I recommend practicing with some small boxes before trying a large design.

The design from boxes.py is a plain box, so I added cutouts for the switches and display on the top.  Again, checking hole sizes to get a nice snug fit is key, so I produced this hole size test.


![Hole size test](/images/BinaryBox/HoleSizeTest.jpg){: .align-center}


I'm very lucky to have access to a laser cutter at the Fukuoka Engineer Cafe. In fact, the hardest part of the process is getting the sheets of plywood there on my bicycle. 


![Large boards on a Brompton](/images/BinaryBox/BromptonBoards.jpg){: .align-center}

## Writing the Software

The code is quite simple and straight-forward. It includes different modes for signed integers, unsigned integers, binary coded decimal and floating point. In writing the code I "cheated" and do a lot of conversions to strings/floats in micropython. I especially wanted my "integer with sign bit" mode to display a negative zero for demonstration purposes, which is not something programming languages usually do.  

