# AoE-2-Replay-Handler
Script to automate the process of unzipping and moving files downloaded off of AoE2.net into the replay folder.

How to use:
<b>Make sure you have node.js installed</b>
https://nodejs.org/en/

<b>Navigate to /aoe-2-replay-handler. </b>
If you don't know how to do this, you can use node.js command prompt.
![Alt text](https://i.imgur.com/s0zYmcF.png)


<b>#'npm install' in /aoe-2-replay-handler to install dependancies.</b>
Next you are going to want to go into arh.js and put your download path in between the quotes in downloads = ''
and the same with your Age of Empires savegame path into saveGame = ''

<b>#node arh.js</b>
while inside the aoe-2-replay-handler directory to run the program.

# Alternatively (.exe)

If you would prefer to run the program in a .exe -
Make sure you have the dependancies installed. Make sure you have your downloads and saveGame variables set.
You will need to repeat these steps if you forget to change the variables to your local download and saveGame folders.

We will be using pkg, if you don't have it you can get it with 
<b>#npm install -g pkg</b>
make sure you're still in the correct directory. (AoE-2-Replay-Handler)
<b>#pkg .</b>
This will generate an executable for linux, mac and windows.

If you're struggling with getting the program to work, have feedback, feature requests or questions, you can contact me on discord at Groot#4556.

# Example Use:
![Alt text](https://i.imgur.com/ie2Hh1l.png)
![Alt text](https://i.imgur.com/ZwRlsi8.png)


![Alt text](https://i.imgur.com/aUNd9Zc.png)
