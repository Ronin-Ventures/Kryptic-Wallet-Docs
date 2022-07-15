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

### Get Wallet Viewing keys
```javascript
getWalletViewingKeys(): Promise<Token[]>;
```
Returns an array with all tracked tokens, each one with a `key` property.

```javascript
const viewingKeys  = await window.kryptic.getWalletViewingKeys();
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


