var posts=["2023/09/29/Linux常用命令(1)-23.9.29/","2023/10/01/Linux常用命令(2)-23.10.1/","2023/10/13/SQL-lab靶场-23.10.13/","2023/10/10/TCP的三次握手-23.10.10/","2023/10/12/phpstudy8无法启..-23.10.12/","2023/10/12/内联汇编小结笔记-23.10.12/","2023/10/05/各类文件头尾总结-23.10.5/","2023/09/25/基础CTF-1-23.9.25/"];function toRandomPost(){pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);};