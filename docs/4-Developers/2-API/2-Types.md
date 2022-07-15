
### Token
```javascript
type Token = {
  name: string,
  contractAddress: string,
  key: string,
  codeHash: string,
  isActive: boolean,
  value: string,
}
```

### Signer

```javascript
class Signer implements OfflineSigner {
    getAccounts(): Promise<{algo: string,pubKey: Uint8Array,address: Uint8Array}[]>
    signAmino(signerAddress: string,signDoc: StdSignDoc): Promise<AminoSignResponse>
}
```
