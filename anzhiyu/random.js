var posts=["2023/09/26/333/","2023/09/26/222/","2023/09/26/444/","2023/09/26/基础CTF-1/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};