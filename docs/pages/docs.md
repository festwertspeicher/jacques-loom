---
layout: page
title: Documentation
permalink: /docs/
---

Welcome to the {{ site.title }} Documentation pages! Here you can quickly jump to a 
particular page.

<div class="section-index">
    <hr class="border-2 border-air-500">
    {% for post in site.docs  %}        
    <div class="entry">
    <h5><a href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h5>
    <p>{{ post.description }}</p>
    </div>{% endfor %}
</div>
