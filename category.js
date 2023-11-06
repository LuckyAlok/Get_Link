const toggleBtn = document.querySelector('.toggle_btn')
    const toggleBtnIcon = document.querySelector('.toggle_btn i')
    const dropDownMenu = document.querySelector('.dropdown_menu')

    toggleBtn.onclick = function () {
        dropDownMenu.classList.toggle('open')
        const isOpen = dropDownMenu.classList.contains('open')

        toggleBtnIcon.classList = isOpen
            ? 'fa-solid fa-xmark'
            : 'fa-solid fa-bars'
    }
   const bindCarouselEvents = (containerId) => {
        const wrapper = document.getElementById(containerId);
        const btn_left = wrapper.getElementsByClassName('btn-left')[0]
        const btn_right = wrapper.getElementsByClassName('btn-right')[0]
        const content = wrapper.getElementsByClassName('carousel-content')[0]
        const content_scroll_width = content.scrollWidth;
        let content_scoll_left = content.scrollLeft;
        if (btn_right) {
            btn_right.addEventListener('click', () => {
                content_scoll_left += 224;
                if (content_scoll_left >= content_scroll_width) { 
                    content_scoll_left = content_scroll_width;
                }
                content.scrollLeft = content_scoll_left;
            });
        }
        if (btn_left) {
            btn_left.addEventListener('click', () => {
                content_scoll_left -= 224;
                content.scrollLeft = content_scoll_left;
            });
        }

        // scroll binding
        content.addEventListener('scroll', () => {
            let scrollLeft = Math.ceil(content.scrollLeft)
            let contentScrollWidth = content.scrollWidth
            let contentWidth = content.clientWidth
            let rightEdge = (contentScrollWidth - contentWidth)
            if (scrollLeft >= rightEdge) {
                btn_right.style.display = "none"
            } else if (scrollLeft < rightEdge) {
                btn_right.style.display = "block"
            }

            if (scrollLeft == 0) {
                btn_left.style.display = "none"
            } else if (scrollLeft > 0) {
                btn_left.style.display = "block"
            }

            content_scoll_left = scrollLeft
        });
    }

    // javascript for scroll on click
    window.addEventListener('DOMContentLoaded', function(){
        bindCarouselEvents('case-related-prod-wrapper')
    });

    const bindCarouselEvent = (containerId) => {
        const wrapper = document.getElementById(containerId);
        const btn_lef = wrapper.getElementsByClassName('btn-lef')[0]
        const btn_righ = wrapper.getElementsByClassName('btn-righ')[0]
        const content = wrapper.getElementsByClassName('carousel-conten')[0]
        const content_scroll_width = content.scrollWidth;
        let content_scoll_left = content.scrollLeft;
        if (btn_righ) {
            btn_righ.addEventListener('click', () => {
                content_scoll_left += 224;
                if (content_scoll_left >= content_scroll_width) { 
                    content_scoll_left = content_scroll_width;
                }
                content.scrollLeft = content_scoll_left;
            });
        }
        if (btn_lef) {
            btn_lef.addEventListener('click', () => {
                content_scoll_left -= 224;
                content.scrollLeft = content_scoll_left;
            });
        }

        };