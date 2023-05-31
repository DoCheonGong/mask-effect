const btns = document.querySelectorAll("#navi li");
const panels = document.querySelectorAll("section article");

// btns에 반복을 돌면서
btns.forEach((el, index) => {
    // 각각의 navi li에 클릭 이벤트 부여
    el.addEventListener("click", () => {
        // 클릭했을 때 반복을 돌면서 모든 on 클래스를 없애고 (btns, panels)
        for (let i = 0; i < btns.length; i++) {
            btns[i].classList.remove("on");
            panels[i].classList.remove("on");
        }
        // 클릭한 index에만 on을 붙인다
        btns[index].classList.add("on");
        panels[index].classList.add("on");
    })
})