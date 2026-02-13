const User = require("../model/UserModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d"
  });
};

exports.signup = async (req,res)=>{
  try{
    const {username,email,password} = req.body;

    const exists = await User.findOne({email});
    if(exists) return res.status(400).json({message:"User exists"});

    const user = await User.create({username,email,password});

    const token = createToken(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:3*24*60*60*1000
    });

    res.json({message:"Signup success"});

  }catch(err){
    console.log("Signup Error:", err);
    res.status(500).json({message:"Signup failed"});
  }
};

exports.login = async (req,res)=>{
  try{
    const {email,password} = req.body;

    const user = await User.findOne({email});
    if(!user) return res.status(400).json({message:"Invalid email"});

    const match = await bcrypt.compare(password,user.password);
    if(!match) return res.status(400).json({message:"Invalid password"});

    const token = createToken(user._id);

    res.cookie("token",token,{
      httpOnly:true,
      maxAge:3*24*60*60*1000
    });

    res.json({message:"Login success"});

  }catch(err){
  console.log("Signup Error:", err);
  res.status(500).json({message:"Signup failed"});
}
};

exports.checkAuth = (req, res) => {
  try {
    if (req.cookies && req.cookies.token) {
      return res.json({ loggedIn: true });
    } else {
      return res.json({ loggedIn: false });
    }
  } catch (err) {
    return res.json({ loggedIn: false });
  }
};

