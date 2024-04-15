const mongoose = require('mongoose')

//created object schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
})


//define which collection to use
const User = mongoose.model('users', userSchema)


async function MongoInsert() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')

        const newUser = new User({
            username: 'john_doe',
            email: 'john@example.com',
            password: 'password123'
        })

        await newUser.save()
    }
    catch (e) {
        console.log(e)
    }
    finally {
        //Disconnect from MongoDB
        mongoose.disconnect()
    }
}

async function MongoRead() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')
        const user = await User.findById("661d7be270424af04dbb907e")
        console.log(user)
    }
    catch (e) {
        console.log(e)
    }
    finally {
        //Disconnect from MongoDB
        mongoose.disconnect()
    }

}

async function MongoDelete() {

    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')

        const deleteUser = await User.findByIdAndDelete("661d7be270424af04dbb907e")

        if (deleteUser) {
            console.log('User deleted successfully:', deleteUser)
        } else {
            console.log('User not found')
        }
    }
    catch (e) {
        console.log(e)
    }
    finally {
        //Disconnect from MongoDB
        mongoose.disconnect()
    }
}

async function MongoUpdate() {
    try {
        await mongoose.connect('mongodb://localhost:27017/mydb')

        const updateUser = await User.findByIdAndUpdate("661d8b4f654aafb76be547b0", ({ username: "Darshan", email: "abc@abc.com" }), { new: true })

        if (updateUser) {
            console.log('User updated successfully:', updateUser)
        } else {
            console.log('User not found')
        }
    }
    catch (e) {
        console.log(e)
    }
    finally {
        //Disconnect from MongoDB
        mongoose.disconnect()
    }

}

//MongoInsert()
//MongoRead()
//MongoDelete()
//MongoUpdate()