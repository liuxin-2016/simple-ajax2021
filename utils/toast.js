export function toast(msg) {
    var dom = document.createElement('div');
    dom.innerHTML = msg;
    dom.style.color = '#333';
    dom.style.padding = '6px 10px';
    dom.style.border = '1px solid #eee';
    dom.style.borderRadius = '8px';
    dom.style.width = 'max-content';
    dom.style.maxWidth = '90%';
    dom.style.minWidth = '120px';
    dom.style.height = 'max-content';
    dom.style.position = 'fixed';
    dom.style.left = '50%';
    dom.style.top = '50%';
    dom.style.transform = 'translate(-50%,-50%)';
    dom.style.background = 'rgba(0, 0, 0, .5)';
    dom.style.color = '#fff';
    dom.style.textAlign = 'center';
    dom.style.zIndex = '2021';
    document.body.appendChild(dom);
    setTimeout(function () { document.body.removeChild(dom) }, 3000)
}