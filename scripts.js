document.addEventListener('DOMContentLoaded', function() {
    // 获取所有导航链接
    const navLinks = document.querySelectorAll('.nav-links a');
    // 获取所有部分
    const sections = document.querySelectorAll('section');

    // 默认显示首页
    document.querySelector('#home').classList.add('active');
    document.querySelector('a[href="#home"]').classList.add('active');

    // 为每个导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // 移除所有active类
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // 添加active类到当前点击的链接和对应的部分
            this.classList.add('active');
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).classList.add('active');
        });
    });
});