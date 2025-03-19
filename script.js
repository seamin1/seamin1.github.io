// 模态框交互逻辑
const modal = document.getElementById('myModal');
const closeSpan = document.querySelector('.close');

// 搜索功能
const searchBtn = document.querySelector('.search-btn');
const searchInput = document.querySelector('.search-input');

searchBtn.addEventListener('click', function() {
    const keyword = searchInput.value.trim();
    if (keyword) {
        alert('搜索关键词：' + keyword);
        // 实际搜索逻辑可在此处添加
    } else {
        alert('请输入搜索内容');
    }
});

// 点击关闭按钮时关闭模态框
closeSpan.onclick = function() {
    modal.style.display = 'none';
}

// 点击模态框外部时关闭
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}