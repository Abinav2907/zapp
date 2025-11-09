# zapp

A small static web project containing a minimal front-end.

Owner: Abinav2907

## Description

This repository contains a simple web app with an HTML entrypoint and accompanying JavaScript and CSS.

## Files

- `index.html` — main HTML page
- `script.js` — client-side JavaScript
- `style.css` — styles

## Run locally

Open `index.html` in your browser. For a simple local server (recommended), from the project root run:

```powershell
# using Python 3 (if installed)
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

## Development

Edit `index.html`, `script.js`, and `style.css` as needed. Refresh the browser to see changes.

## Git / Push troubleshooting (403 permission denied)

If you see errors like:

```
remote: Permission to Abinav2907/zapp.git denied to M-ASWIN.
fatal: unable to access 'https://github.com/Abinav2907/zapp.git/': The requested URL returned error: 403
```

Try one of the following fixes:

1. Sign in with the correct GitHub account in your Git client or credential manager. On Windows, you can use the Git Credential Manager or sign in via `git`.

2. Use a Personal Access Token (PAT) instead of a password for HTTPS pushes. Create a PAT in GitHub settings and then run a push; when prompted for credentials, use your username and the PAT as password.

3. Switch to SSH-based remote to avoid HTTPS credential issues:

```powershell
# create SSH key (if you don't have one)
ssh-keygen -t ed25519 -C "your_email@example.com"
# start ssh-agent and add key
Start-Service ssh-agent; ssh-add $env:USERPROFILE\.ssh\id_ed25519
# copy the public key and add to GitHub (you'll need to paste it in GitHub settings)
Get-Content $env:USERPROFILE\.ssh\id_ed25519.pub | clip
# change remote to SSH
git remote set-url origin git@github.com:Abinav2907/zapp.git
```

4. Verify you have push permissions on the repository. If this repo belongs to someone else, ask them to add you as a collaborator or member with write access.

## License

No license specified. Add a license file if you want to make this project open-source.

## Notes

If you'd like, I can also commit the README and attempt to push, but the push will fail until your GitHub authentication is fixed. Let me know if you want me to create a commit and provide the commands to run locally.