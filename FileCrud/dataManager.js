const libFs = require('fs')
const libPath = require('path')

const dataManager = {}


dataManager.dir = "data"


dataManager.createObject = (objectType, objectData, callBackFunction) => {
    const objectId = Date.now()
    libFs.writeFile(libPath.join(__dirname, dataManager.dir, objectType, `${objectId}.json`), JSON.stringify({ ...objectData, id: objectId }), callBackFunction, (error) => callBackFunction(error))
}

dataManager.readObject = (objectType, objectId, callBackFunction) => {
    libFs.readFile(libPath.join(__dirname, dataManager.dir, objectType, `${objectId}.json`), (error, data) =>
        callBackFunction(error ? false : JSON.parse(data))
    )

}

dataManager.deleteObject = (objectType, objectId, callBackFunction) => {
    libFs.unlink(libPath.join(__dirname, dataManager.dir, objectType, `${objectId}.json`), (error) =>
        callBackFunction(error)
    )

}


dataManager.updateObject = (objectType, objectId, objectData, callBackFunction) => {
    libFs.readFile(libPath.join(__dirname, dataManager.dir, objectType, `${objectId}.json`), (error, data) => {
        //got the data from existing file
        const updateData =

            libFs.writeFile(libPath.join(__dirname, dataManager.dir, objectType, `${objectId}.json`), JSON.stringify({
                ...JSON.parse(data),
                ...objectData
            }), (error) => callBackFunction(error))

    })

}

module.exports = dataManager