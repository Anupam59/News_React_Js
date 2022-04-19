

class ApiUrl{
    static BaseURL="https://admin.anupamlu.xyz/api/";
    static TopLatestNews=this.BaseURL+"TopLatestNews";
    static LatestNews=this.BaseURL+"LatestNews";
    static NewsListCategoryEight(Category){
        return this.BaseURL+"NewsListCategoryEight/"+Category;
    }
    static NewsListCategoryAll(Category){
        return this.BaseURL+"NewsListCategoryAll/"+Category;
    }
    static NewsListCategory(Category){
        return this.BaseURL+"NewsListCategory/"+Category;
    }

    static NewsListCategoryLength(Category,Length){
        return this.BaseURL+"NewsListCategoryLength/"+Category+"/"+Length;
    }





    static NewsDetailsLoad(Id){
        return this.BaseURL+"NewsDetailsLoad/"+Id;
    }






    static NewsDetails(Id){
        return this.BaseURL+"NewsDetails/"+Id;
    }
}
export default ApiUrl;
