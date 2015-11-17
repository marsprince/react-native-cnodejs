/**
 * Created by mars on 2015/11/17.
 */

exports.getCategory=function(category)
{
    let categoryDict={"ask":"提问","share":"分享","job":"招聘"}
    return categoryDict[category]?categoryDict[category]:category
}