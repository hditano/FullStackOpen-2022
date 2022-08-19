const FindID = (name, data) => {
    return data.find((ele) => ele.name === name).id
}


const FindService = {
    FindID
}

export default FindService;