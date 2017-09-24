var contextMenuItem = {
	"id" : "searchText",
	"title" : "Search Loklak for \""+'%s'+"\"",
	"contexts" :["selection"]
};
chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
	if(clickData.menuItemId == "searchText" && clickData.selectionText){
		let url = "http://loklak.org/search?query="+clickData.selectionText ;
		chrome.tabs.create({url : url}); 
	}
})