import User from "../models/Users.js";

export const createUser = async (req, res) => {
  try {
    const { name, age, email } = req.body;

    const user = await User.create({name, age, email});
    res.status(201).json(user);
    console.log("User created:", user);
  } catch (err) {
    // error code = 11000
    if (err.code === 11000) {
        return res.status(400).json({ error: "Email already exists" });
    }
    res.status(400).json({ error: err.message });


  }
};

export const getUsers = async (req, res) => {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
}

export const getUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        // user does not exist
        if (!user) {
            return res.status(404).json({ error: "User not found" });
           
        }
       res.json(user);
       console.log("User fetched:", user);
      
    } catch (err) {
        res.status(500).json({ error:"Invalid user ID" });
    }
}


export const updateUser = async (req, res) => {
    try {
        const updated = await User.findByIdAndUpdate(
            req.params.id,
            req.body,

            { new: true , runValidators: true}
        );


        // user does not exist
        if (!updated) {
            return res.status(404).json({ error: "User not found" });
           
        }

        console.log("User updated:", updated);

       res.json(updated);
    } catch (err) {
        res.status(500).json({ error:"Invalid user ID" });
    }
}


export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
         
    


        // user does not exist
        if (!user) {
            return res.status(404).json({ error: "User not found" });
           
        }
        
       res.json({message:"User deleted successfully"});
       console.log("User deleted:", user);
    } catch (err) {
        res.status(500).json({ error:"Invalid user ID" });
    }
}


