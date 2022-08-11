---
title:  "Market Overview and Desired Specs"
date:   2022-06-15 00:00:01
categories: phase 1
badges:
 - class: badge-electronic
   name: phase 1
 - class: badge-magnet
   name: foundation
---


This article contains an overview of similar solutions that already exist and how my project compares to them. For this classification, I would like to define targeted specifications that my loom should be able to achieve (testable, quantifiable, verifiable).

<!--more-->

Weaving is considered to be the first technique for the production of fabrics and therefore belongs to the oldest artisan crafts of humankind. The history of weaving goes far beyond our historical records and findings. The fabric production tools have also become increasingly advanced over the course of thousands of years. The automated weaving loom was one of the significant technological breakthroughs and is considered to be a symbol of the industrial revolution. It marked the transition from the age of manual craftsmanship to industrial mass production. Through the use of punch cards, the Jacquard loom is also considered to be the first programmable device and inspiration for the first computers. Modern industrial looms are almost completely automated and reach unimaginable unattainable speeds.

<div class="grid grid-cols-2 gap-4">
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/jacquard-loom.jpg" alt="Illustration of a mechanical Jacquard loom from 1862">
            <figcaption>
                Illustration of a mechanical Jacquard loom from 1862, Copyright <a href="https://wellcomecollection.org/works/rrqs9wgs">Wellcome Collection</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY 4.0</a>, edited
            </figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/modern-jacquard.jpg" alt="Photo of a modern Jacquard loom">
            <figcaption>
                Photo of a modern Jacquard loom, Copyright <a href="https://commons.wikimedia.org/wiki/File:New_Jacquard.jpg">Bouletheboss</a>, <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">CC BY 4.0</a>, edited
            </figcaption>
        </figure>
    </div>
</div>

This project aims to revisit the transition from manual labour to large industrial machines, using modern technological capabilities to recapture, democratize, and make the production method available for everyone.

The table provides an overview of modern computerized Jacquard looms, aside from large-scale industrial tools. The looms vary significantly in their commercial availability, type (handloom/serial), technical details, price, size and form factor, the density of warp threads and setting speed.

<div class="overflow-scroll h-[75vh] prose-sm border-y-2 border-air-500 my-16 -mx-4 md:mx-0">
    <table class="table-auto relative w-full">
        <thead class="sticky bg-white top-0 shadow-[0_2px_0px_0px_#0099ff]">
            <tr>
                <th class="text-right min-w-[35px]">ID</th>
                <th>Name</th>
                <th>Manufacturer</th>
                <th>Website</th>
                <th>Type</th>
                <th class="min-w-[250px]">Technical</th>
                <th class="min-w-[250px]">
                    Commercial Available /<br>
                    Open Source Hardware
                </th>
                <th class="min-w-[300px]">Estimated Price Without Shipping and Taxes</th>
                <th class="min-w-[200px]">Form Factor</th>
                <th class="min-w-[320px]">Warp Density</th>
                <th class="min-w-[250px]">setting speed</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-right">1</td>
                <td>TC2</td>
                <td>Digital Weaving Norway / Tronrud Engineering</td>
                <td><a href="https://digitalweaving.no/tc2-loom/">Link</a></td>
                <td>Handloom, parallel</td>
                <td>Heddle wires are lifted directly by a vacuum pump and custom electric valves</td>
                <td>Commercial available</td>
                <td>
                    32000€ base loom without hooks modules<br>
                    costs for the vacuum pump are not included<br>
                    3450€ 220-hook module (15,68€ per hook)
                </td>
                <td>
                    standalone<br>
                    width: 122&nbsp;cm - 198&nbsp;cm<br>
                    length: 171&nbsp;cm<br>
                    height: 155&nbsp;cm
                </td>
                <td>
                    modules with 220 hooks can be stacked<br>
                    resulting in max. 47.79 ends per cm or 180&nbsp;epi
                </td>
                <td>instant &lt;1s</td>
            </tr>
            <tr>
                <td class="text-right">2</td>
                <td>Jac3g</td>
                <td>AVL</td>
                <td><a href="https://avllooms.com/collections/looms/products/jacq3g">Link</a></td>
                <td>Handloom, Parallel</td>
                <td>A solenoid on each heddle wire engages or disengages it with a lifter bar</td>
                <td>Commercial available</td>
                <td>
                    16786.47€ base loom without hook modules<br>
                    4484.8€ 120-hook module (37,37€ per hook)
                </td>
                <td>
                    standalone<br>
                    width: 114&nbsp;cm - 218&nbsp;cm<br>
                    length: 167&nbsp;cm<br>
                    height: 214&nbsp;cm</td>
                <td>
                    modules with 120 hooks can be stacked<br>
                    A special mechanism increases the epi up to a factor of 10 by making the tissue narrower.<br>
                    In the widest form that results in max. 11 ends per cm or 28&nbsp;epi.<br>
                    In the smallest form that results in max. 110 ends per cm or 280&nbsp;epi.
                </td>
                <td>instant &lt;1s</td>
            </tr>
            <tr>
                <td class="text-right">3</td>
                <td>OSLoom</td>
                <td>
                    Benitez, Clark, Yanc,<br>
                    Vogl, Benett, Shimomura<br>
                </td>
                <td><a href="http://osloom.org">Link</a></td>
                <td>Handloom, Parallel</td>
                <td>Muscle Wire tied to each heddle wire engages or disengages it with a lifter bar</td>
                <td>
                    Successfull Kickstarter.<br>
                    Used to become OSH but<br>
                    plans were never released.<br>
                    Project not continued.
                </td>
                <td>Build cost estimated >1000€</td>
                <td>
                    standalone, estimated<br>
                    width: 80&nbsp;cm<br>
                    length: 160&nbsp;cm<br>
                    height: 200&nbsp;cm
                </td>
                <td>
                    hooks: 66<br>
                    estimated width: 50&nbsp;cm<br>
                    results in 1.32 ends per cm or 3.35&nbsp;epi
                </td>
                <td>estimated 2s</td>
            </tr>
            <tr>
                <td class="text-right">4</td>
                <td>Low-Cost Jacquard Loom</td>
                <td>Albaugh, McCann, Yao, Hudson</td>
                <td><a href="https://dl.acm.org/doi/10.1145/3411764.3445750">Link</a></td>
                <td>Handloom, Serial</td>
                <td>A carriage with a solenoid pushing each bistable mechanisms attached to each heddle wire to to engages or disengages it with a lifter bar</td>
                <td>Not commercial available, CAD files and code available, license unclear</td>
                <td>Build costs under 200€</td>
                <td>Tabletop</td>
                <td>
                    hooks: 42<br>
                    estimated width: 42&nbsp;cm<br>
                    results in 1 ends per cm or 2.54&nbsp;epi
                </td>
                <td>
                    depending on the pattern<br>
                    setting speed in the demonstration video video 6.5s<br>
                    resulting in 6.46 hooks per second
                </td>
            </tr>
            <tr>
                <td class="text-right">5</td>
                <td>FabLoom 2.0</td>
                <td>Edward Muñoz</td>
                <td><a href="http://archive.fabacademy.org/archives/2016/fablabpuebla/students/261/final-project.html">Link</a></td>
                <td>Handloom, Parallel</td>
                <td>Hobby Servo Motors attached to each heddle directly</td>
                <td>Not commercial available, detailed build log, OSH? license unclear</td>
                <td>Build cost estimated 200€</td>
                <td>Tabletop</td>
                <td>
                    hooks: 80<br>
                    width: 20&nbsp;cm<br>
                    results in 4 ends per cm or 10.16&nbsp;epi
                </td>
                <td>instant &lt;1s</td>
            </tr>
            <tr>
                <td class="text-right">6</td>
                <td>Doti</td>
                <td>Pamela Liou</td>
                <td><a href="http://dotilikestoweave.com/index">Link</a></td>
                <td>Handloom, Parallel</td>
                <td>small linear actuators lift each heddle directly</td>
                <td>Not commercial available, Claims to be OSH, files and documentation never released, license unclear</td>
                <td>Build cost estimated 250€</td>
                <td>Tabletop</td>
                <td>
                    hooks: 16<br>
                    estimated width: 35<br>
                    results in 0.46 ends per cm or 1.16&nbsp;epi
                </td>
                <td>instant &lt;1s</td>
            </tr>
            <tr>
                <td class="text-right">7</td>
                <td>Weav3r</td>
                <td>Jerry Nicholls</td>
                <td>
                    <a href="https://r.jander.me.uk/index.php/2018/07/22/weav3r-loom-update-photoshoot/">
                        Link
                    </a>
                </td>
                <td>Automatic Loom, Serial</td>
                <td>A carriage with a motor moving pins to engage or disengage the heddle wires with a lifter bar</td>
                <td>Not commercial available, Nicholls wanted to release building instructions but never released</td>
                <td>?</td>
                <td>Tabletop</td>
                <td>
                    hooks: 32<br>
                    estimated tissue width: 20&nbsp;cm<br>
                    results in 1.6 ends per cm or 4.1&nbsp;epi
                </td>
                <td>
                    setting speed in the demonstration video 18s<br>
                    resulting in 1.78 hooks per second
                </td>
            </tr>
            <tr>
                <td class="text-right">8</td>
                <td>WeaveMe</td>
                <td>Schaefer</td>
                <td><a href="https://retrotechjournal.com/2019/06/17/making-a-diy-computer-controlled-loom/">Link</a></td>
                <td>Handloom, Serial</td>
                <td>A long rod with a rotating key shaft moves eccentric disks to engage or disengage the heddle wire with a lifter bar</td>
                <td>Not commercial available, OSH (MIT license)</td>
                <td>Estimated build cost 300€</td>
                <td>
                    Tabletop<br>
                    Machine size twice the width of the fabric because of the moving rod
                </td>
                <td>
                    hooks: 60<br>
                    estimated tissue width 30&nbsp;cm<br>
                    results in 2 ends per cm or 5.08&nbsp;epi
                </td>
                <td>
                    setting speed in the demonstration video about <br>
                    1 hook per second
                </td>
            </tr>
            <tr>
                <td class="text-right">9</td>
                <td>Jacques</td>
                <td>Norman Heck</td>
                <td><a href="https://festwertspeicher.github.io/jacques-loom/">Link</a></td>
                <td>Handloom, Serial</td>
                <td>A carriage moving hooks with a pressurized air nozzle to engage or disengage heddle wires with a lifter bar</td>
                <td>Not commercial available, OSH (license to be defined)</td>
                <td>Planed build cost &lt;500€ for the loom with one module</td>
                <td>Tabletop</td>
                <td>
                    with one module:<br>
                    hooks: 100 (parametric)<br>
                    estimated tissue width: 40 (parametric)<br>
                    results in 2.5 ends per cm or 6.35&nbsp;epi (fixed)<br>
                    two modules can be stacked to double the epi<br>
                    <br>
                    modules should be stackable to increase the epi
                </td>
                <td>at least 10 hooks per second, preferably 20-30 hooks per second</td>
            </tr>
        </tbody>
    </table>
</div>

The looms listed in the table can be divided into two groups: Commercially available products and personal or scientific projects. The commercial looms mainly address advanced home users and small production environments. In comparison, the two commercial products can be considered real production tools, while the others are in a proof-of-concept state and unsuitable for producing functional textiles. This is especially evident in the density of the warp threads but also in the setting speed, rigidity and reliability of the machines. With non-commercial looms, only very coarse fabrics can be produced, while the other commercial looms can produce very dense silk fabrics. However, this immense difference also reflects in the price tag. The material costs of the non-commercial projects are located in the low three-digit price range. The commercially available looms are priced far above that and will cost about 50000€ (depending on the configuration). Besides the base price of these devices, the price per warp thread is also interesting - it shows how expensive the mechanism for selecting the warp threads really is.

My loom will be published under an open-source hardware license. It is still unclear whether it will reach market maturity and will be distributed commercially, as an assembly kit, for example. The material costs of my loom are higher than those of other non-commercial projects, but it should still be affordable and far lower in price than the commercial models. The higher price is justified by the fact that my loom can achieve more warp threads and, therefore, a greater fabric density; it will also be reliable and solid built.

<div class="grid grid-cols-2 gap-4">
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/tc2.jpg" alt="TC2 from Digital Weaving Norway">
            <figcaption>
                One of the two commercial available looms: TC2 from Digital Weaving Norway (1). It can produces very dense fabrics; <a href="https://digitalweaving.no/">Source and Copyright</a>; croped
            </figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/doti.jpg" alt="Photo of a modern Jacquard loom">
            <figcaption>
                One of the non-commercial looms: Doti by Pamela Liou (6). It produces only very coarse fabrics; <a href="http://dotilikestoweave.com/index">Copyright</a>; edited
            </figcaption>
        </figure>
    </div>
</div>

The looms can be further differentiated into two groups by looking at the warp selection mechanism. The large-scale industrial products control the warp threads via thousands of actuators moving simultaneously. This makes it possible to achieve an extremely high operating speed. The large quantity of actuators leads to the high price of the products. Since an actuator is attached to each warp thread, the power requirement also increases with each additional warp thread. The two commercial products listed in the table (1 and 2) fall into this category. Most non-commercial Jacquard looms also use similar parallel control mechanisms. The reason why the estimated construction price is nevertheless relatively low can be explained by the small reduced number of actuators (width and warp density). In the table, I have only listed Osloom (3), the much smaller FabLoom 2.0 (5) and Doti (6) as examples to avoid redundancies. A few more non-commercial Jacquard looms can be found online, but they are very similar in construction and not as technically advanced.

In contrast, the serial selection method only uses a few actuators to select the warp threads one after the other. The listed looms (4, 7, 8) use two actuators: one actuator controls a carriage in the direction of the weft, while the other actuator selects each warp thread as the carriage passes by. This method is much slower in operating speed and depends on the mechanism, the warp threads' density and the fabric's width. By eliminating thousands of actuators, this mechanism is comparatively inexpensive to implement. The power consumption of these serial mechanisms is also much lower due to the reduced number of actuators. It remains the same no matter how broad or dense the fabric is. The maximum density of the warp threads is also limited: one cannot select objects that are arbitrarily close together. One must work with several stacked selection carriage modules to achieve a higher density. With the simultaneously controlled mechanisms, you have quite similar problems. Due to the size of the actuators, it is necessary to stack several modules behind each other to increase the warp density at a certain point.

<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/parallel.jpg" alt="Commercial Jacquard Loom with parallel warp selection mechanism">
            <figcaption>
                AVL's Jacq3g (2) uses solenoids attached to every hook (heddle wire) for engageing or disengaging them with the lifting mechanism; Copyright AVL, <a href="https://www.manualslib.com/manual/1795217/Avl-Looms-Jacq3g.html?page=133#manual">taken from the Jacq3G Manual, page 133</a>
            </figcaption>
        </figure>
    </div>
    <div>
        <figure>
            <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/serial.png" alt="Low-Cost Jacquard Loom with a serial warp selection mechanism">
            <figcaption>
                Low-Cost Jacquard Loom (4) with a serial warp selection mechanism: A carriage with a single striker solenoid engages or disengages the heddles one after the other with the lifting mechanism.<a href="https://dl.acm.org/doi/10.1145/3411764.3445750">Source and Copyright </a>, edited
            </figcaption>
        </figure>
    </div>
</div>

My loom should also fit into this relatively new category of serial Jacquard looms. When I started thinking about low-cost Jacquard weaving, only one loom was available that used a serial selection mechanism. I immediately recognized the potential of this idea and thought about how one could further improve the setting speed and make a fully functional production tool with this approach. In the meantime, two more looms of this type were developed and have proven that it is possible to build a functional loom with this mechanism. However, all three projects have failed to produce what I consider acceptable speed, ease of use, decent fabric density and reliability. I'm confident that the serial selection mechanism can perform better; I'd like to increase my machine's setting speed and fabric density drastically. I would like to achieve a warp density of 2.5 ends per centimetre (4mm hook spacing) with one module. In addition, I would like to think ahead and implement the possibility of consecutively stacking multiple selection modules to further increase the density of the fabric in the future.

Weav3r (7) is the only automatic loom on the list; it can weave completely independently. All other looms belong in the category of (computer-controlled) hand looms. While the shed is formed automatically on these, a weaver must still insert the weft thread by hand and control the tension and weft density. This is not necessarily a disadvantage: the two commercially available looms (1, 2) also belong to the group of handlooms. A handloom offers more design possibilities and room for improvisation. It allows the work with materials that cannot be processed in an automated machine otherwise. However, with a serial control of the warp threads, it would make sense to insert the weft automatically. The best example is Schaefer's loom: He has by far the slowest actuation speed and relies on inserting the weft thread by hand. In his video, he doesn't show how long it really takes for the mechanism to form the shed. But you can see in the video that it's apparently very slow. With the required presence of an operator and such a long waiting time, this loom is certainly not suitable for actual production. If the loom was completely automatic, a fabric could be produced unattended over a longer timespan despite the slow operating speed. In the target group of home users, the operating speed is not significantly important when the loom can be left unattended.


<figure>
    <img src="{{ site.baseurl }}/assets/img/2022-06-15-market-overview/weav3r.jpg" alt="Weav3r Loom automatically passing the shuttle through the shed">
    <figcaption>
        Weav3r Loom (7) automatically passing the shuttle through the shed; Screenshot taken from <a href="https://www.youtube.com/watch?v=iqlxO5RYyGU">this Video</a>; Copyright by Jerry Nicholls.
    </figcaption>
</figure>

Because of the advantages mentioned above, I also want to develop a handloom. Another reason is that I don't want to work on another big tool component besides the warp selection mechanism at this stage of development. I can envision that the modular design will allow the weft to work automated at a later stage. Right now, developing a weft insertion method (using shuttles, projectiles, grippers, magnetic timing belts or nozzles) exceeds my time resources. Even though many solutions have been developed, the mechanism and its fine-tuning are, in fact, complicated: the thread tension and monitoring by a runout sensor is not an easy task. For multicoloured fabric, a colour changer is additionally necessary.

Due to my specification as a handloom, it is crucial to minimize the setting speed to prevent restricting the user and causing long delays. One goal is to optimize the warp thread selection mechanism for speed and reliability. It should work much faster than the other serial machines in the table. In my spreadsheet, I set the target of being able to select 10 hooks per second, although I would prefer to achieve the selection of 20 to 30 hooks per second. I currently expect to implement 100 hooks per module and, therefore, a maximum setting speed of 10 seconds. This is close to the limit of what is tolerable for the user and should be optimized in the future. One solution for reducing the users waiting time is an asynchronous preselection of the hooks. While the user is condensing the weft thread with the reed, the mechanism could already preselect the next row. This could make the mechanism feel instantaneous and responsive to the user's input.