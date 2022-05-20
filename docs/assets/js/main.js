---
include_in_search: false
layout: null
---
$(document).ready(function() {
    //search query
    $(document).on('keypress', '.td-search-input', function(e) {
        if (e.keyCode !== 13) {
            return
        }
        var query = $(this).val();
        var searchPage = "{{ site.url }}{{ site.baseurl }}/search/?q=" + query;
        document.location = searchPage;
        return false;
    });

    // show the searchbar if JS is enabled
    document.getElementById("searchbar").classList.remove("hidden");

    //permalinks paragraph
    var headers = ["h1", "h2", "h3", "h4"]
    $.each(headers, function (i, header) {
        $(header).each(function () {
            text = $(this).text();
            if (text != "") {
                if ($(this)[0].hasAttribute("id")) {
                    var href = $(this).attr("id");
                    $(this).append('<a class="headerlink no-prose" href="#' + href + '" title="Permanent link"> ¶</a>')
                }
            }
        });
    })

    // populate TOC
    $(document).ready(function () {

        function slugify(string) {
            return string
                .toString()
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[^\w\-]+/g, "")
                .replace(/\-\-+/g, "-")
                .replace(/^-+/, "")
                .replace(/-+$/, "");
        }

        var toc = $('#TOC');

        // TODO break down by h2 and h3 too?
        sections = $('article h2');
        $.each(sections, function (idx, v) {
            section = $(v);
            var div_id = $(section).attr('id');
            var div_text = section.text();

            // If we don't have an id, derive one from title
            if (!div_id) {
                div_id = slugify(div_text);
                section.attr("id", div_id)
            }

            // This is the part id
            var parent = $("#" + div_id)
            var content = '<li id="link_' + div_id + '"><a href="#' + div_id + '" title="' + div_text.split('¶')[0] + '" class="relative flex hover:text-air-500 leading-tight transition-colors py-1 pl-4 border-transparent hover:border-speed-500 border-l-2">' + div_text.split('¶')[0] + '</a></li>';
            $(toc).append(content);

            // Add section code to subnavigation
            var children = $('<ul></ul>')
            var contenders = $("#" + div_id).nextUntil("h1");
            $.each(contenders, function (idx, contender) {
                if ($(contender).is('h2') || $(contender).is('h3')) {
                    var contender_id = $(contender).attr('id');
                    var contender_text = $(contender).text();

                    if (!contender_id) {
                        contender_id = slugify(contender_text);
                        $(contender).attr("id", contender_id)
                    }

                    var content = '<li><a href="#' + contender_id + '" title="' + contender_text.split('¶')[0] + '" class="relative flex hover:text-air-500 transition-colors py-1 border-l border-l-2 pl-4 border-transparent hover:border-speed-500 leading-tight">' + contender_text.split('¶')[0] + '</a></li>';
                    children.append(content);
                }
            })
            $("#link_" + div_id).append(children);
        });
    })

    // Scroll To Top Button, when the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () { scrollFunction() };
    window.addEventListener("load", scrollFunction());

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("scrolltop").classList.add("md:flex");
        } else {
            document.getElementById("scrolltop").classList.remove("md:flex")
        }
    }

    // Burger menu
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const tocsubnav = document.getElementById("TOC");


    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (tocsubnav) {
        tocsubnav.addEventListener('click', function() {
            for (var j = 0; j < menu.length; j++) {
                menu[j].classList.toggle('hidden');
            }
        })
    }

});

