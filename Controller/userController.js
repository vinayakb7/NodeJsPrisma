import prisma from "../DB/db.config.js"

export const createUser = async (req, res) => {
    const {name, email, password} = req.body

    const findUser = await prisma.user.findUnique({
        where : { email : email }
    })

    if(findUser){
        return res.json({ status : 400, message: "User already exists!" })
    }

    const newUser = await prisma.user.create({
        data : {
            name : name,
            email : email,
            password : password
        }
    })

    return res.json({ status : 200, data : newUser, message: "User Inserted!" })
}