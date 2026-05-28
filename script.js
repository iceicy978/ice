// 交互1：导航栏滚动变色（JS特效）
window.addEventListener('scroll', function () {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 100) {
        nav.classList.add('bg-dark');
        nav.classList.remove('bg-danger');
    } else {
        nav.classList.add('bg-danger');
        nav.classList.remove('bg-dark');
    }
});

// 交互2：点击作品图片 → 模态框放大查看
const modal = new bootstrap.Modal(document.getElementById('imgModal'));
const modalImg = document.getElementById('modalImg');
const workImgs = document.querySelectorAll('.work-img');

workImgs.forEach(img => {
    img.addEventListener('click', function () {
        modalImg.src = this.src;
        modal.show();
    });
});

// 交互3：留言表单动态提交与渲染（表单验证 + 动态DOM）
const msgForm = document.getElementById('msgForm');
const msgList = document.getElementById('msgList');

msgForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const content = document.getElementById('content').value;

    // 创建留言
    const div = document.createElement('div');
    div.className = 'msg-item';
    div.innerHTML = `<h6>${name}</h6><p>${content}</p>`;
    msgList.prepend(div);

    // 清空表单
    msgForm.reset();
    alert('留言成功！');
});