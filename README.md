# Classroom
Made with the [Tauri](https://tauri.app/) framework. It is the same concept as Election
just that it has [Rust](https://www.rust-lang.org/) in the backend. With [Angular](https://angular.io/) in the
frontend.


## Prequisites
* Follow this link to install Rust for relevant OS:
    * [macOS](https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-macos)
    * [Linus](https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-linux)
    * [Windows](https://tauri.app/v1/guides/getting-started/prerequisites#setting-up-windows)
* Install the [Angular CLI](https://angular.io/cli) otherwise it won't work.

#### All frontend code is in src/
#### All backend code is in src-tauri/
```bash
  $ npm install <-- install deps
  $ npm run tauri dev <-- start development server
  $ npm run tauri build <-- builds your application into your OS (/src-tauri/target/release).
  
```


    

## Work flow
This project is set up for a gitflow:ish workflow. Never push directly to main or development branches. Instead, clone/pull development branch, create a new feature-branch `git checkout -b feature/my-cool-changes` and push your changes in this branch.

When your new cool feuture is done, open a pull request towards the dev branch, and tag someone if you want a code review before merge.

**All work is to be done into dev branch main branch is only for release**

#### If you have questions regarding the code, reach out to me on Discord.