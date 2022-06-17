---
title:  "Market Overview and Desired Specs"
date:   2022-06-15 00:00:01
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

This project aims to revisit the transition from manual labor to large industrial machines, using modern technological capabilities to recapture, democratize, and make the production method available for everyone.

<div class="overflow-scroll h-[75vh] prose-sm border-y-2 border-air-500 mt-16 -mx-4 md:mx-0">
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
                <td>Low Cost Jacquard Loom</td>
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
                    resulting in 6.46 needles per s
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
                    resulting in 1.78 needles per second
                </td>
            </tr>
            <tr>
                <td class="text-right">8</td>
                <td>Computer Controlled Loom</td>
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
                    1 needle per second
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
                <td>at least 10 needles per second, preferably 20-30 needles per second</td>
            </tr>
        </tbody>
    </table>
</div>

The table provides an overview of modern computer-assisted jacquard looms, aside large-scale industrial plants. The looms vary significantly in their commercial availability, their type (handloom/serial), technical details, price, size and form factor, spacing of warp thread, setting speed and power consumption.

We can divide the looms from the table into two groups: The two commercially available products and the personal or scientific projects. In comparison, the commercial products are real production tools. They are aimed at advanced home users and small production environments. This is especially evident in the density of the warps. With all other (non-commercial) projects, only very coarse fabrics can be produced. The commercially available looms can produce denser fabrics via insertable modules. Both looms could produce very fine velvet fabrics from silk. The big difference, however, is of course reflected in the price. The commercially available projects are priced far above the other projects and cost as much as a mid-range car. In addition to the basic price of the devices, the price per warp thread is also interesting - this shows how expensive the mechanism is. The other projects are found in the low three-digit price range.

There is also another classification by which you could sort the looms: The warp selection mechanism. The large-scale industrial products control the warp threads via thousands of actuators in parallel. This makes it possible to achieve the extremely high operating speed. The large quantity of actuators results in the high price of the products. Since an actuator is attached to each warp thread, the power requirement also increases with each additional warp thread. The two commercial products listed in the table (1 and 2) also fall into this category. Most non-commercial Jacquard looms also use such parallel control. The fact that the estimated construction price of these products is nevertheless quite low can be explained by the small number of actuators (width and warp density). In the internet I found some more models, but all in all they are very similar in construction. In the table, I have only listed Osloom (3) and the much smaller FabLoom 2.0 (5) and Doti (6) as examples to avoid redundancies.

In contrast, the serial selection method is much slower in operating speed. Using only two actuators, all warp threads can be selected one after the other. One actuator controls a carriage in the direction of the weft, while the other actuator selects each warp threads as the carriage passes by. The operating speed depends on the mechanism, the density of the warp threads and the width of the fabric. The density of the warp threads is also limited: One cannot select objects that are arbitrarily close together. To achieve a higher density, one must work with several stacked modules. With the parallel controlled mechanisms you have quite similar problems - due to the size of the actuators it is necessary to stack them one after the other to increase the warp density. The power consumption of these serial mechanisms is much lower due to the use of only two actuators. It remains the same no matter how wide or dense the fabric is.

The Weav3r loom is the only automatic loom on the list. It weaves completely independently. All others looms belong to the category of (computer controlled) hand looms. While the shed is formed automatically on these, a weaver must still insert the weft thread by hand and control the tension and thread density. A hand loom offers more design possibilities and room for improvisation. With a serial control of the warp threads, it would actually make sense to insert the weft automatically. The best example is Schaefer's loom: He has by far the slowest loom and relies on inserting the weft thread by hand. In his video, he doesn't show how long it really takes to set it. With such a long waiting time and the required presence of a person, the loom is certainly not suitable for real production of fabrics. If the loom was completely automatic, a fabric could be produced unattended over a long period of time despite the slow operating speed.

My loom is also to become a hand loom. Therefore it is one goal to make the selection mechanism of the warp threads as fast as possible. I also want to make the warp threads as dense as possible in a single module. I put the cost limit for my loom at 500€, a bit more expensive than the other non-commercial projects. I aim for the mechanism to be as cheap as possible.
