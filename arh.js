// Age Of Empires 2 Replay Handler (ARH)
// 1/13/2021
// Groot
// 1.1.0

const fs = require('fs')
const keypress = require('keypress')
const unzipper = require('unzipper')
const downloads = ''// Your default download folder for your browser
//i.e `C:\\Users\\(YOUR NAME)\\Downloads\\`
const saveGame = ''// Your AoE replay directory here. 
// i.e 'C:\\Users\\(YOUR NAME)\\Games\\Age of Empires 2 DE\\(NUMBERS)\\savegame\\'

const replayFiles = []
const unzipFiles = []

keypress(process.stdin)

let running = false
while (running == false) {
    running = true
    main(running)
}

function main(running) {
    let unzipCount = 0
    let moveCount = 0

    const downloadsFile = fs.readdirSync(downloads) 
    const saveGameFile = fs.readdirSync(saveGame)

    console.log("Press F7 to move zip filves to the savegame folder")
    console.log("Press F8 to unzip AoE files in the savegame folder")
    process.stdin.on('keypress', (ch,key) => {
        if (key.name == "f7") { // Move files to AoE folder
            for (file of downloadsFile) {
                if (file.includes('AgeIIDE_Replay')) { // Checks if file in downloads
                    // is default aoe2.net filename.
                    console.log(file)
                    replayFiles.push(file) // Stores fitting files in replayFiles
                }
            }
    
            for (file of replayFiles) { 
                const path = downloads+file // Set path to be read
                fs.rename(path,(saveGame+file), (error) => { // Rename each replayFile in path
                    if (error) throw error
                    moveCount = moveCount + 1
                    console.log(moveCount +" file/s moved." + " " + path)
                })
            } 
            //TODO: make this show up after files are moved.
            console.log(`Finished moving files.`)
            return main()
        }
        if (key.name == "f8") { // Unzip files in AoE folder
            for (file of saveGameFile) { 
                if (file.includes('.zip')) { // Checks for zip files in AoE savegame folder
                    //console.log(file)
                    unzipFiles.push(file) // Adds them to unzipFiles array
                }
            for (file of unzipFiles) { // Each .zip file
                const path = saveGame+file // Set path to be read
                unzipCount = unzipCount + 1
                fs.createReadStream(path) // Reads path of files containing .zip
                    .pipe(unzipper.Extract({path:saveGame})) // Unzips them to savegame folder
                console.log("Processing files.." + unzipCount)
            }
            }
            console.log("Files Unzipped.")
            return main()
        }
    })
    
    process.stdin.setRawMode(true)
    process.stdin.resume()
}
