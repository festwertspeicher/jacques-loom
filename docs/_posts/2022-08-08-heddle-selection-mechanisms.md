---
title:  "Heddle Selection Mechanisms"
date:   2022-08-08 00:00:01
categories: phase 2
badges:
 - class: badge-electronic
   name: phase 2
---


In a Jacquard loom, each warp thread can be raised or lowered individually. That is how the pattern and binding type is determined. The mechanism for selecting and raising or lowering the individual warp threads is the very heart of the Jacquard loom.
<!--more-->

In former times, this selection was done by punch cards. The punch cards determine whether a warp thread is raised or lowered. So-called heddles are preselected by the punch cards. Through each of these heddles runs one of the warp yarns. The pre-selected heddles are then raised or lowered together to form the shed. In modern computerized looms, punch cards are replaced by software. Today, the preselection of the warp threads works with the help of actuators. An electromechanical component (actuator) is attached to each heddle (each warp thread) for preselecting it. This makes the warp thread selection mechanism very large, expensive and has a high energy demand.

In my project, on the other hand, the pre-selection of the warp threads will work differently. A carriage will move across the warp threads, preselecting the heddles one after the other. This serial selection shall be much more cost and energy efficient.

The main task of this project will be the development of this meachnism. I have set requirements how fast and reliable the selection of the heddles should work and how close the heddles (how dense the fabric) should be selected with a carriage.

To start, I want to follow four starting points on how the mechanism could work. In the near future, I will complete this article with animated illustrations to explain the different ways the mechanism could work.

## 1. Actuator Pushes Heddles Into Position.

An actuator is mounted on the carriage that pushes the heddles forward.

One possibility for such an actuator would be a simple stepper motor or servo motor with a pin attached to its axis. This pin pushes the heddles into the preselection position when the shaft is turned. However, stepper motors reach their limits at the speeds I am aiming for. Several different motors need to be tested for that, or a step-up gearbox needs to be used.

Another option would be the use of a linear actuator with electromagnetic coil to push the heddles into their position. Examples are push-pull solenoids or voice coil actuators.

The control of such a mechanism must be very precise. If the actuator is in an incorrect position while the carriage is moving, it may collide with the neighboring heddles.

## 2. Compressed Air

One method of moving the heddles into position is the use of compressed air. Moving with compressed air is a non-contact and therefore low-wear way of selection. With other mechanisms, large wear effects can be expected in some cases, because the mechanism has to operate millions of times during the weaving process. 

A fine nozzle attached to the carriage directs the air flow to specific points so individual heddles are blown forward or let through untouched in their original position. A solenoid valve opens or limits the air flow of the nozzle for this purpose.

The heddles in the direct neighborhood shall not be affected by the air flow. The design of the carriage can limit this effect.

The air flow of the nozzle has an opening angle. It is most focused at the outlet, further back the air is fanned out. Due to the Bernoulli effect, air in the surrounding area is stimulated and reinforces this fanning out. The further the heddle is away from the nozzle, the more difficult it is to move it precisely using compressed air.

In approaches using compressed air, the solenoid valve could also be a limiting factor. The response times of the solenoid valves are limited and must be determined more precisely in a series of tests.

## 3. Channeling Compressed Air

In order to use compressed air more precisely, channels can be used into which air is injected. The principle can be cdompared to a blowpipe. Each heddle sits in its own channel. The passing carriage introduces air into this channel, or limits the air flow by activating the valve. The incoming air pushes the heddle forward in the channel like a piston. Due to the separated channels, the heddles can be positioned closer to each other, as the risk of mutual interference is eliminated.

## 4. Magnets

A series of electromagnets attached to the carriage pushing the heddles forward or resetting them to the start position.

