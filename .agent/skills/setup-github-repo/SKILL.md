---
description: Sets up a GitHub repository remote and handles SSH authentication for the project.
---

# GitHub Repository Setup

This skill automates the process of connecting a local project to a GitHub repository, ensuring proper SSH authentication is in place.

## Process

1.  **Check Previous Remotes**
    - Run `git remote -v` to see if a remote is already configured.
    - If `origin` exists but is incorrect, remove it or rename it.

2.  **Add Remote**
    - Ask the user for the GitHub repository URL (SSH format preferred: `git@github.com:username/repo.git`).
    - Run `git remote add origin <url>`.

3.  **Check SSH Identity**
    - Run `ssh-add -l` to see if identities are loaded.
    - If "The agent has no identities", check `~/.ssh` for keys.
    - Run `ls -la ~/.ssh` to find relevant keys (e.g., `id_ed25519`, `id_rsa`).
    - Load the key: `ssh-add ~/.ssh/<key_name>`.

4.  **Verify Connection**
    - Run `git fetch origin`.
    - If successful, proceed.
    - If "Permission denied", double-check the key or ask the user to authenticate.

5.  **Push Code**
    - Check current branch: `git branch --show-current`.
    - Push and track: `git push -u origin <branch_name>`.

## Common Issues & Fixes

### Permission Denied (publickey)

- **Cause:** SSH agent has no keys or wrong key.
- **Fix:** Use `ssh-add` to load the correct key from `~/.ssh`.

### Remote Already Exists

- **Cause:** `origin` is already set.
- **Fix:** Use `git remote set-url origin <new_url>` or `git remote remove origin` before adding.
