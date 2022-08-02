### Get Wallet Address
```javascript
getWalletAddress(): Promise<{
    algo: string,
    pubKey: Uint8Array,
    address: Uint8Array}[]>;
```
Returns the wallet address.

```javascript
const address  = await window.kryptic.getWalletAddress();
```

### Get Wallet Balance
```javascript
getWalletBalance(): Promise<{amount: string,denom: string}>;
```
Returns the wallet balance.

```javascript
const balance  = await window.kryptic.getWalletBalance();
```

### Get Wallet Viewing key
```javascript
getWalletViewingKey(contractAddress: string): Promise<Token>;
```
Returns an object with information about the token, with a `key` property.

```javascript
const viewingKey  = await window.kryptic.getWalletViewingKey('secret18vd8fpwxzck93qlwghaj6arh4p7c5n8978vsyg');
```

### Suggest token
```javascript
suggestToken(chainId: string, contractAddress: string): Promise<void>;
```
Request user permission to add a SNIP-20 token.

```javascript
 await window.kryptic.suggestToken('pulsar-2','secret12vy64457jysxf3x4hwr64425ztlauq98zchpgt');
```

### Get Offline Signer
```javascript
getSigner(): Promise<Signer>;
```
Returns an offline signer.

```javascript
const offlineSigner  = await window.kryptic.getSigner();
```


