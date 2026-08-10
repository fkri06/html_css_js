#!/usr/bin/env node

const args = process.argv.slice(2);

const username = args[0];

async function getGithubActivity() {

    try {
        const response = await fetch(`https://api.github.com/users/${username}/events`);

        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        return result;

    } catch (err) {
        console.error(`${err.name}: ${err.message}`);
    }
}

function displayActivity(activityEvent, repository) {
    const activity = activityEvent.slice("Event");
    if (activity.toLowerCase().includes('push')) {
        console.log(`---> Push commits to ${repository}`);
    } else if (activity.toLowerCase().includes('pull')) {
        console.log(`---> Pull Requests to ${repository}`);
    } else if (activity.toLowerCase().includes('issues')) {
        console.log(`---> Opened a new issue in ${repository}`);
    } else {
        console.log(`---> ${activity} in ${repository}`);
    }
}

const result = await getGithubActivity();

console.log(`Recent activity from ${username}`);
result.forEach(element => {
    const activity = element["type"];
    const repo = element["repo"].name;

    displayActivity(activity, repo);

});
