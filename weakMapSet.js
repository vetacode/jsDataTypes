let john = { name: 'John' };

delete john.name; //delete can only be used to delete the props not the obj
console.log(john); //{}

john = null; //removed the obj john from memory
console.log(john); //null
