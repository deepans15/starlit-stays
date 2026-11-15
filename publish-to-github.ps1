# Starlit Stays: send the latest game to GitHub (GitHub Pages updates about a minute later).
# Run from PowerShell:  & "C:\Users\deepa\Documents\StarlitStays\publish-to-github.ps1"
Set-Location "C:\Users\deepa\Documents\StarlitStays"
git add -A
git commit -m ("Update " + (Get-Date -Format "yyyy-MM-dd HH:mm"))
git push
Write-Host "Done. Your game will update at your GitHub Pages link in about a minute."
