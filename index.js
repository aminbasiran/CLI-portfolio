#!/usr/bin/env node

import chalk from "chalk"
import chalkAnimation from "chalk-animation"
import inquirer from "inquirer"
import { about,projects,resume } from "./text/resources.js";


function sleep(ms) {
    return new Promise((r)=>{
        setTimeout(r,ms)
    })
}

async function welcome(){
    chalkAnimation.rainbow("Welcome To My Hub")

    await sleep(2000)

    console.log(`
        ${chalk.bgCyan("How to navigate")}
        This is a CLI tool I created to showcase my resume
        and as well as a fun side project!
    `)
   
}

async function options() {
    while (true) {
        const selections = await inquirer.prompt({
            name: "portfolio",
            type: "list",
            message: "What do you want to check about me?",
            choices: [
                "About me",
                "Resume",
                "Boring projects",
                "Go to notion",
                "Exit"
            ]
        });

        if (selections.portfolio === "Exit") {
            console.log("Exiting...");
            console.log("See you again!");
            process.exit(0); // Exit the loop if "Exit" is selected
        }

        switch (selections.portfolio) {
            case "About me":
                console.log(about);
                break;
            case "Resume":
                console.log(resume);
                break;
            case "Boring projects":
                console.log(projects);
                break;
            case "Go to notion":
                console.log("go to notion");
                break;
        }
    }
}

await welcome()
await sleep(1000)
await options()
