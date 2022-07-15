### Change Account Event

```javascript
accountChange
```

When the user switches their account after the webpage has received some information, the webpage information may not match with the selected account which may cause issues in the interactions.

To prevent this, Kryptic emits a `accountChange` event to the webpage's window. You can request the new account information with this event listener.

```javascript
window.addEventListener("accountChange", () => {
    console.log("Kryptic account changed!")
})
```
### Change Chain Event

```javascript
chainChange
```

The same as above but when chain changes.

```javascript
window.addEventListener("chainChange", () => {
    console.log("Kryptic chain changed!")
})
```
