---
title:  "Market Overview and Desired Specs"
date:   2022-05-23 00:00:01
categories: funding, phase 1
badges:
 - class: badge-electronic
   name: phase 1
 - class: badge-magnet
   name: foundation
---


In this article, I would like to give an overview of similar solutions that already exist and how my project compares to them. For this classification, I would like to define specifications that my loom should be able to achieve (testable, quantifiable, verifiable).

<!--more-->

Weaving is considered to be the first technique for the production of textile fabrics and therefore belongs to the oldest artisan crafts of mankind. The history of weaving goes far beyond our historical records and findings. Needless to say, the production tools for fabrics have also become more and more advanced over thousands of years. The automated loom was one of the central technological breakthroughs and is considered as a symbol of the industrial revolution. It marked the transition from the age of manual craftsmanship to mass production. The Jacquard loom is also considered, through the use of punch cards, to be the first programmable device and the inspiration for the first computers. Modern industrial looms are almost completely automated and reach unimaginable speeds.

This project aims to revisit the transition from manual labor to large industrial machines, using modern technological capabilities to recapture, democratize, and make the production method available for everyone.

The table provides an overview of modern computer-assisted jacquard looms, aside large-scale industrial plants. The looms vary significantly in their
commercial availability, price, size and form factor, spacing of warp threads and setting speed.

<div class="w-full overflow-x-auto">
    <table class="prose-sm table-auto">
    <thead>
        <tr>
            <th>Name</th>
            <th>Manufacturer</th>
            <th>Website</th>
            <th>Type</th>
            <th>Technical</th>
            <th>Commercial Available / OSH</th>
            <th>Estimated Price Without Shipping and Taxes</th>
            <th>Form Factor</th>
            <th>Warp Density</th>
            <th>setting speed</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>TC2</td>
            <td>Digital Weaving Norway / Tronrud Engineering</td>
            <td><a href="https://digitalweaving.no/tc2-loom/">Link</a></td>
            <td>Parallel</td>
            <td>Heddle wires are lifted directly by a vacuum pump and custom build solenoids.</td>
            <td>Commercial available</td>
            <td>32000€ base loom without hooks modules<br>3450€ 220-hook module (15,68€ per hook)</td>
            <td>standalone<br>width: 122cm - 198cm<br>length: 171cm<br>height: 155cm</td>
            <td>module width: 36.83cm / 14.5”<br>max. stack of 8 modules with 220 hooks<br>results in max. 47.79 ends per cm or 180epi</td>
            <td>instant &lt;1s</td>
        </tr>
        <tr>
            <td>Jac3g</td>
            <td>AVL</td>
            <td><a href="https://avllooms.com/collections/looms/products/jacq3g">Link</a></td>
            <td>Parallel</td>
            <td>A solenoid on each heddle wire engages or disengages it with a lifter bar</td>
            <td>Commercial available</td>
            <td>16786.47€ base loom without hook modules<br>4484.8€ 120-hook module (37,37€ per hook)</td>
            <td>standalone<br>width: 114cm - 218cm<br>length: 167cm<br>height: 214cm</td>
            <td>The 30” loom can hold max. 7 modules resulting in 840 hooks total<br>According to the manufacturer a special mechanism can increase the epi up to a factor of 10 by making the tissue narrower.<br>In the widest form that results in max. 11 ends per cm or 28epi.<br>In the smallest form that results in max. 110 ends per cm or 280epi.</td>
            <td>instant &lt;1s</td>
        </tr>
            <tr>
            <td>OSLoom</td>
            <td>Margarita Benitez, Nathan Clark, <br>Chris Yanc, Makus Vogl, Ed Benett, <br>Gary Shimomura</td>
            <td><a href="http://osloom.org">Link</a></td>
            <td>Parallel</td>
            <td>Muscle Wire tied to each heddle wire engages or disengages it with a lifter bar</td>
            <td>Used to Become an Open Hardware Project.<br>Plans were never released.<br>Project apperently not continued</td>
            <td>Build cost estimated 800€</td>
            <td>standalone, estimated<br>width: 80cm<br>length: 160cm<br>height: 200cm</td>
            <td>hooks: 66<br>estimated width: 50cm<br>results in 1.32 ends per cm or 3.35epi</td>
            <td>estimated &lt;1s</td>
        </tr>
        <tr>
            <td>Low Cost Jacquard Loom</td>
            <td>Lea Albaugh, James McCann, Lining Yao, Scott Hudson</td>
            <td><a href="https://dl.acm.org/doi/10.1145/3411764.3445750">Link</a></td>
            <td>Serial</td>
            <td>A carriage with a solenoid pushing each bistable mechanisms attached to each heddle wire to to engages or disengages it with a lifter bar</td>
            <td>Not commercial available, CAD files and code available, license unclear</td>
            <td>Build costs under 200€</td>
            <td>Tabletop</td>
            <td>hooks: 42<br>estimated width: 42cm<br>results in 1 ends per cm or 2.54epi</td>
            <td>depending on the pattern<br>setting speed in the demonstration video video 6.5s<br>resulting in 6.46 needles per s</td>
        </tr>
        <tr>
            <td>FabLoom 2.0</td>
            <td>Edward Muñoz</td>
            <td><a href="http://archive.fabacademy.org/archives/2016/fablabpuebla/students/261/final-project.html">Link</a></td>
            <td>Parallel</td>
            <td>Hobby Servo Motors attached to each heddle directly</td>
            <td>Not commercial available, detailed build log, OSH? license unclear</td>
            <td>Build cost estimated 200€</td>
            <td>Tabletop</td>
            <td>hooks: 80<br>width: 20cm<br>results in 4 ends per cm or 10.16epi</td>
            <td>instant &lt;1s</td>
            </tr>
            <tr>
            <td>Doti</td>
            <td>Pamela Liou</td>
            <td><a href="http://dotilikestoweave.com/index">Link</a></td>
            <td>Parallel</td>
            <td>small linear actuators lift each heddle directly</td>
            <td>Not commercial available, Claims to be OSH, files and documentation never released, license unclear</td>
            <td>Build cost estimated 250€</td>
            <td>Tabletop</td>
            <td>hooks 16<br>estimated width: 35<br>results in 0.46 ends per cm or 1.16 epi</td>
            <td>instant &lt;1s</td>
        </tr>
        <tr>
            <td>Weav3r</td>
            <td>Jerry Nicholls</td>
            <td><a href="https://r.jander.me.uk/index.php/2018/07/22/weav3r-loom-update-photoshoot/">Link</a></td>
            <td>Serial</td>
            <td>A carriage with a motor moving pins to engage or disengage the heddle wires with a lifter bar</td>
            <td>Not commercial available, Nicholls wanted to release building instructions but never released</td>
            <td>?</td>
            <td>Tabletop</td>
            <td>hooks 32<br>estimated tissue width: 20cm<br>results in 1.6 ends per cm or 4.1epi</td>
            <td>setting speed in the demonstration video 18s<br>resulting in 1.78 needles per second</td>
        </tr>
            <tr>
            <td>Computer Controlled Loom</td>
            <td>Kurt Schaefer</td>
            <td><a href="https://retrotechjournal.com/2019/06/17/making-a-diy-computer-controlled-loom/">Link</a></td>
            <td>Serial</td>
            <td>A long rod with a rotating keyshaft moves eccentric disks to engage or disengage the heddle wire with a lifter bar</td>
            <td>Not commercial available, OSH (MIT license)</td>
            <td>Estimated build cost 300€</td>
            <td>Tabletop</td>
            <td>hooks 60<br>estimated tissue width 30cm<br>results in 2 ends per cm or 5.08epi</td>
            <td>setting speed in the demonstration video about <br>1 needle per second</td>
        </tr>
        <tr>
            <td>Jacques</td>
            <td>Norman Heck</td>
            <td><a href="https://festwertspeicher.github.io/jacques-loom/">Link</a></td>
            <td>Serial</td>
            <td>A carriage moving hooks with a pressurised air nozzle to engage or disengage heddle wires with a lifter bar</td>
            <td>Not commercial available, OSH (license to be defined)</td>
            <td>Planed build cost &lt;500€ for the loom with one module</td>
            <td>Tabletop</td>
            <td>planed with one module:<br>hooks 100 (parametric)<br>estimated tissue width: 40 (parametric)<br>results in 2.5 ends per cm or 6.35epi (fixed)<br><br>modules should be stackable to increase the epi</td>
            <td>planed at least 10 needles per second, preferably 20-30 needles per second</td>
        </tr>
    </tbody>
    </table>
</div>