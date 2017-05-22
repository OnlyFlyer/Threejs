/*
    expires属性可设置在页面缓存失效前
    页面被缓存的时间(分钟),response.e
    xpires=-1指示页面不会被缓存
*/
<%
    response.expires = -1
    response.write(time)
%>