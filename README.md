# Frontend

## Running the application

1. Download the code.
2. Install the dependencies: `npm install`
3. Run in the development mode: `npm run dev`

## Development
0. Follow the "running for frontend development" instructions at https://github.com/hire-a-senior/backend to quickly run backend (with one docker command, you do not need any db installation)
1. Fork the project. While forking, disable "Copy only main branch" option.
2. Ensure that you configured your ssh keys with github: https://docs.github.com/en/authentication/connecting-to-github-with-ssh
3. Download the forked project with ssh option.
4. Go to `develop` branch: `git checkout develop`. And run `npm install` in the root folder of the project.
5. If you are running linux or macos, give permission to execute husky pre-commit commands: `chmod +x .husky/pre-commit`. Nothing to worry, It runs eslint and prettier commands while committing.

6. Update the project to the latest version: `git pull`
7. Select an issue from the `issues` tab. Let everyone know you are working on this issue, add a comment to the issue and you will be assigned.
8. Create a new branch for this issue: `git checkout -b <issue-id>-<short-description>`
9. After you are done with the task, send the changes:

```bash
git add .
git commit -m "<issue-id>: <A short meaningful description>"
git push -u origin <branch-name>
```

After successfully pushed the changes to the issue branch, open a pull request from forked repo's new branch to this repo's `develop` branch(You can do it via github interface). Add a reviewer(for now @Mert18). That's it.
