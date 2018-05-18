
import { Injectable } from '@angular/core';

// injecting service into module
@Injectable()

export class PageService {

  constructor() { }
  	
	 pages = [
	  { _id: "321", name: "Post 1", websiteId: "456", description: "Lorem" },
	  { _id: "432", name: "Post 2", websiteId: "456", description: "Lorem" },
	  { _id: "543", name: "Post 3", websiteId: "456", description: "Lorem" }
	]
	//  adds the page parameter instance to the local pages array. The new page's websiteId is set to the websiteId parameter
	createPage(websiteId : string, page : object){
		page._id = Math.floor(Math.random() * Math.floor(1000000)).toString();
		page.websiteId = websiteId;
		this.pages.push(page);
		return page;
	}
	// retrieves the pages in local pages array whose websiteId matches the parameter
	findPageByWebsiteId(websiteId : string) {
		let result = [];
		for(let i =0; i < this.pages.length;i++){
			if(this.pages[i].websiteId === websiteId) {
			    result.push(this.pages[i]);
			}
		}

		return result;
	}

	//  retrieves the page in local pages array whose _id matches the pageId parameter
	findPageById(pageId : string) {
		for(let i= 0;i<this.pages.length;i++) {
			if(this.pages[i]._id === pageId)  {
				return this.pages[i];
			}
		}
	}

	//  updates the page in local pages array whose _id matches the pageId parameter
	updatePage(pageId : string, page: any) {
		let oldPage = this.findPageById(pageId);
		const index = this.pages.indexOf(oldPage);
		this.pages[index].name = page.name;
		this.pages[index].description = page.description;
	}

	//  removes the page from local pages array whose _id matches the pageId parameter
	deletePage(pageId : string) {
		let oldPage = this.findPageById(pageId);
		const index = this.pages.indexOf(oldPage);
		this.pages.splice(index, 1);
	}

}