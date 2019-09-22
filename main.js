const tabsContent = document.querySelectorAll(".tab-content-item");
const tabs = document.querySelectorAll(".tab-item");

function showContentTab(){
            removeContentTab();
            removeTabBorder();
    this.classList.add('tab-border');
       const currentTab = document.querySelector(`#${this.id}-content`);
             currentTab.classList.add('show');
}

function removeContentTab(){
    tabsContent.forEach(function(tab){
       tab.classList.remove('show');
    });
}

function removeTabBorder(){
    tabs.forEach(function (item) {
        item.classList.remove('tab-border');
    })
}

tabs.forEach(function (item) {
    item.addEventListener('click',showContentTab);
});