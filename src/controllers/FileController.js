
export const recvFile = async (req, res) => {
    try {
        const {file} = req;
        if(file) {
            const fileStr = await JSON.parse(JSON.stringify(file));
            res.status(200).json({
                file: fileStr,
            })
        } else {
            res.status(404).json({
                status: "ko nhan duoc file",
            })
        }
    } catch(error) {
        res.status(500).json(error)
    }
}