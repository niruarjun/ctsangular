npm install nodemon to run server automatically whenever you modify it keeps changing and runs the server
>to create apis using express is very easy
> to create package.json project 
MONGO
*first we have to create a data>db in c-local disk or anywhere
cmds
*)mongod
* mongo
*1 show dbs
*2use demo
*3show collections
*4db.createCollection("employees")
*5db.employees.insert("name":"sai")
*6 db.user.insert("name":"niru")it automatically creates tacble with name and insert data
*7 db.user.drop()-to drop a  particular collection(table)
*8  db.users.find()
{ "_id" : ObjectId("5e50ee137f120f7cc7266979"), "name" : "mark", "phone" : 9866367083 }
to view the data like select cmd in sql
9. db.stud.insert([{"name":"mark","phone":"24"},{"name":"reed","phone":"7777"}])
BulkWriteResult({
        "writeErrors" : [ ],
        "writeConcernErrors" : [ ],
        "nInserted" : 2,
        "nUpserted" : 0,
        "nMatched" : 0,
        "nModified" : 0,
        "nRemoved" : 0,
        "upserted" : [ ]
})
to insert multiple value
10.db.user.insertMany([{"name":"mark","phone":"2994"},{name:"marked","phone":"25555"}])
11.db.user.insertOne({"name":"mark","phone":"2994"})
12.db.user.save({_id:"1","name":"reddy"})
13. db.user.insert({"name":"sai","email":"ss@gmaiol","phone":"7777","address":{"house":"503","city":"NDL","COUNTRY":"INdia"}})
EMBEEDED DOCUMENT INSTEAD OF Joins
db.user.insert([{"name":"sai","email":"ss@gmaiol","phone":"7777","address":{"house":"503","city":"NDL","COUNTRY":"INdia"}},{"name":"sai","email":"ss@gmaiol","phone":"7777","address":{"house":"503","city":"NDL","COUNTRY":"INdia"}}])
15. db.user.find({name:"bv"}).pretty()
{
        "_id" : ObjectId("5e50f8d65a9bbed8fc2ba4f5"),
        "name" : "bv",
        "email" : "ss@gmaiol",
        "phone" : "7777",
        "address" : {
                "house" : "503",
                "city" : "NDL",
                "COUNTRY" : "INdia"
        }
}
16.> db.user.find({"address.COUNTRY":"USA"}).pretty();
{
        "_id" : ObjectId("5e50f9fc5a9bbed8fc2ba4f6"),
        "name" : "Dr.ARJUN",
        "email" : "ss@gmaiol",
        "phone" : "7777",
        "address" : {
                "house" : "503",
                "city" : "NDL",
                "COUNTRY" : "USA"
        }
}to FInd embeded docs
16. db.user.find({name:"Dr.ARJUN","address.COUNTRY":"USA"}).pretty()
{
        "_id" : ObjectId("5e50f9fc5a9bbed8fc2ba4f6"),
        "name" : "Dr.ARJUN",
        "email" : "ss@gmaiol",
        "phone" : "7777",
        "address" : {
                "house" : "503",
                "city" : "NDL",
                "COUNTRY" : "USA"
        }
}AND OPERATOR
17.OR OPERATOR

> db.user.find({$or:[{"name":"Dr.ARJUN"},{"address.COUNTRY":"INDIA"}]})