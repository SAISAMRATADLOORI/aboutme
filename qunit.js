function weightConverter(str) {
    const result = parseInt(str);
    if (result < 0){
        throw Error("weight cannot be negative");
    }
    else{
        return result*1000;
    }
 }

QUnit.test ("weightConverter", function(assert) {
    assert.equal(weightConverter(3),3000,"given weight 3kgs is converted to 3000 grams");
    assert.equal(weightConverter(5), 5000,"given weight 5kgs is converted to 5000 grams");
    assert.equal(weightConverter(2), 2000,"given weight 2kgs is converted to 2000 grams");
    assert.equal(weightConverter(7), 7000,"given weight 7kgs is converted to 7000 grams");
    assert.equal(weightConverter(4), 4000,"given weight 4kgs is converted to 4000 grams");
    assert.equal(weightConverter(-4),"invalid"); 
 });