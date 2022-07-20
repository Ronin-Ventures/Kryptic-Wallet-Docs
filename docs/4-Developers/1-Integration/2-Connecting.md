
To connect to kryptic wallet request any method available in [methods](/docs/Developers/API/Methods) page.
#### Example:
```javascript

window.onload = async () => {
    if (!window.kryptic) {
        alert("Please install kryptic extension");
    }

   const account = await window.kryptic.getWalletAddress();
};


```
