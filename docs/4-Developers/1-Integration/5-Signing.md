
#### Example:
```javascript
import { SigningCosmosClient } from '@cosmjs/launchpad'

import {
    assertIsBroadcastTxSuccess,
    SigningStargateClient,
} from '@cosmjs/stargate'

let account = {}
window.onload = async () => {
    if (!window.kryptic) {
        alert("Please install kryptic extension");
    }

    account = await window.kryptic.getWalletAddress();

    // Get the signer
    const offlineSigner = await window.kryptic.getSigner();

    // Get all wallet accounts
    const accounts = await offlineSigner.getAccounts();

    const cosmJS = new SigningCosmosClient(
        "https://testnet-web-rpc.roninventures.io/",
        accounts.key,
        offlineSigner,
    );
};

window.addEventListener("accountChange", () => {
    alert("Kryptic account changed, please refetch the data...")
})

// Sign a TX
document.sendForm.onsubmit = () => {
    let recipient = document.sendForm.recipient.value;
    let amount = document.sendForm.amount.value;

    amount = parseFloat(amount);
    if (isNaN(amount)) {
        alert("Invalid amount");
        return false;
    }

    amount *= 1000000;
    amount = Math.floor(amount);

    (async () => {
        const offlineSigner = await window.kryptic.getSigner();
        const accounts = await offlineSigner.getAccounts();

        const client = await SigningStargateClient.connectWithSigner(
            "http://rpc.pulsar.griptapejs.com",
            offlineSigner
        )

        const amountFinal = {
            denom: 'uscrt',
            amount: amount.toString(),
        }
        const fee = {
            amount: [{
                denom: 'uscrt',
                amount: '5000',
            }, ],
            gas: '200000',
        }

        const memo = "Test"
        const result = await client.sendTokens(account[0].address, recipient, [amountFinal], fee, memo)

        if (result.code !== undefined &&
            result.code !== 0) {
            alert("Failed to send tx: " + result.log || result.rawLog);
        } else {
            alert("Succeed to send tx:" + result.transactionHash);
        }
    })();

    return false;
};

```
