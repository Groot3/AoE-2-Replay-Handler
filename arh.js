// Age Of Empires 2 Replay Handler (ARH)
// 1/13/2021
// Groot
// 1.0.0

const fs = require('fs')
const keypress = require('keypress')
const unzipper = require('unzipper')
const origin = ''// Your default download folder for your browser
//i.e `C:\\Users\\(YOUR NAME)\\Downloads\\`
const goto = ''// Your AoE replay directory here. 
// i.e 'C:\\Users\\(YOUR NAME)\\Games\\Age of Empires 2 DE\\(NUMBERS)\\savegame\\'
const fileorigin = fs.readdirSync(origin)
const filegoto = fs.readdirSync(goto)

let count = 0
const replayFiles = []
const unzipFiles = []

keypress(process.stdin)

main()

function main() {
    console.log("Press F7 to move zip filves to the savegame folder")
    console.log("Press F8 to unzip AoE files in the savegame folder")
    //console.log("Press F9 to buffer files (required inbetween steps)")
    process.stdin.on('keypress', (ch,key) => {
        if (key.name == "f7") { // Move files to AoE folder
            for (file of fileorigin) {
                if (file.includes('AgeIIDE_Replay')) {
                    console.log(file)
                    replayFiles.push(file)
                }
            }
    
            for (file of replayFiles) {
                const path = origin+file
                //console.log("Path is:",path)
                fs.rename(path,(goto+file), (error) => {
                    if (error) throw error
                    count = count + 1
                    console.log(count +" file/s moved." + " " + path)
                })
            }
            return
        }
        if (key.name == "f8") { // Unzip files in AoE folder
            for (file of filegoto) {
                console.log(file)
                if (file.includes('.zip')) {
                    unzipFiles.push(file)
                }
            for (file of unzipFiles) {
                const path = goto+file
                count = count + 1
                fs.createReadStream(path)
                    .pipe(unzipper.Extract({path:goto}))
                console.log("Processing files.." + count)
            }
            }
            console.log("Files Unzipped.")
            return
        }
    })
    
    process.stdin.setRawMode(true)
    process.stdin.resume()
}
