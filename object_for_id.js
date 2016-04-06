Template.registerHelper("objectForId", function(collection, objectId){
    let literalCollection = eval(collection);
    return literalCollection.findOne({_id: objectId});
});
