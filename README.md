
**Gro Subgraph**
================

[Gro Protocol](https://www.gro.xyz/) is a DeFi yield aggregator that makes it easy to earn stablecoin yields with tranching & automation.

This subgraph dynamically tracks the interaction of users with Gro contracts in Avalanche mainnet to provide personal stats on:

*   Deposits, withdrawals, transfers and approvals of groDAI, groUSDC and groUSDT tokens at transaction level
    
*   Net amounts, current balance and net returns at aggregated level
    

Active deployments
------------------

### Hosted service:

*   [Ethereum Prod](https://thegraph.com/hosted-service/subgraph/sjuanati/gro-prod-eth) \[Production → full mainnet data\] <sup>(1)
    
*   [Ethereum Test](https://thegraph.com/hosted-service/subgraph/sjuanati/gro-test-eth) \[Development → sample mainnet data for devs\] <sup>(1)
    
*   [Avalanche Prod](https://thegraph.com/hosted-service/subgraph/sjuanati/gro-prod-avax) \[Production → full mainnet data\]
    
*   [Avalanche Test](https://thegraph.com/hosted-service/subgraph/sjuanati/gro-test-avax) \[Development → sample mainnet data for devs\]
    

(1) to be decommissioned in 2023 Q1

### Decentralised network:

*   Ethereum Prod \[Production → full mainnet data\]
    
*   [Ethereum Test](https://thegraph.com/studio/subgraph/gro-mainnet-test/) \[Development → sample mainnet data only for Gro devs\]
    

Setup
-----

1) Clone the Gro subgraph

```bash
git clone https://github.com/groLabs/gro-subgraph-avalanche.git
```

2) Install dependencies

```bash
yarn install
```

3) Run any of the below commands and [scripts](https://github.com/groLabs/gro-subgraph-avalanche/blob/main/package.json) to generate and deploy subgraphs in TheGraph platform:

```bash
# Ethereum Prod - hosted service
yarn eth-prod-hosted 
# Ethereum Test - hosted service
yarn eth-test-hosted
# Avalanche Prod - hosted service
yarn avax-prod-hosted
# Avalanche Test - hosted service
yarn avax-test-hosted
# Ethereum Prod - decentralised network
yarn eth-prod-studio
# Ethereum Test - decentralised network
yarn eth-test-studio
```

The Ethereum subgraph is located in another [repository](https://github.com/groLabs/gro-subgraph-mainnet) as it contains different products and smart contracts.

Key Entities
------------

**User**

It is the user wallet address that connects with most of the other entities such as totals, transfers or approvals.

**Totals**

Aggregated net balance as the basis to calculate the user’s current balance and net returns for groDAI, groUSDC and groUSDT (versions 1.0 and 1.7).

**Price**

Latest token prices for groDAI, groUSDC and groUSDT (versions 1.0 and 1.7).

**TransferTx**

Contains the following transactions depending on field `type`:

<table data-layout="wide" data-local-id="9ae48a4d-bebb-437c-8e6f-c6ad0a91293f" class="confluenceTable">
    <colgroup>
        <col style="width: 189.0px;">
        <col style="width: 343.0px;">
        <col style="width: 252.0px;">
        <col style="width: 176.0px;">
    </colgroup>
    <tbody>
        <tr>
            <th class="confluenceTh">
                <p><strong>Type</strong></p>
            </th>
            <th class="confluenceTh">
                <p><strong>Description</strong></p>
            </th>
            <th class="confluenceTh">
                <p><strong>Contract</strong></p>
            </th>
            <th class="confluenceTh">
                <p><strong>Event</strong></p>
            </th>
        </tr>
        <tr>
            <td class="confluenceTd">
                <p>deposit</p>
            </td>
            <td class="confluenceTd">
                <p>groDAI, groUSDC &amp; groUSDT deposits into Labs</p>
            </td>
            <td class="confluenceTd">
                <p>Labs 1.0 and 1.7</p>
            </td>
            <td class="confluenceTd">
                <p><code>LogDeposit</code></p>
            </td>
        </tr>
        <tr>
            <td class="confluenceTd">
                <p>withdrawal</p>
            </td>
            <td class="confluenceTd">
                <p>groDAI, groUSDC &amp; groUSDT withdrawals from Labs</p>
            </td>
            <td class="confluenceTd">
                <p>Labs 1.0 and 1.7</p>
            </td>
            <td class="confluenceTd">
                <p><code>LogWithdrawal</code></p>
            </td>
        </tr>
        <tr>
            <td class="confluenceTd">
                <p>transfer_in</p>
            </td>
            <td class="confluenceTd">
                <p>groDAI, groUSDC &amp; groUSDT transfers received</p>
            </td>
            <td class="confluenceTd">
                <p>Labs 1.0 and 1.7</p>
            </td>
            <td class="confluenceTd">
                <p><code>Transfer</code></p>
            </td>
        </tr>
        <tr>
            <td class="confluenceTd">
                <p>transfer_out</p>
            </td>
            <td class="confluenceTd">
                <p>groDAI, groUSDC &amp; groUSDT transfers sent</p>
            </td>
            <td class="confluenceTd">
                <p>Labs 1.0 and 1.7</p>
            </td>
            <td class="confluenceTd">
                <p><code>Transfer</code></p>
            </td>
        </tr>
    </tbody>
</table>

**ApprovalTx**

Contains approval transactions for groDAI, groUSDC and groUSDT in Labs 1.0 and 1.7.


Queries
-------

*   Personal stats
    

```graphql
{
  prices {
    groDAI_e_v1_0
    groUSDC_e_v1_0
    groUSDT_e_v1_0
    groDAI_e_v1_7
    groUSDC_e_v1_7
    groUSDT_e_v1_7
  }
  users(where: {id: "0x2ce1a66f22a2dc6e410d9021d57aeb8d13d6bfef"}) {
    address: id
    totals {
      value_added_groDAI_e_v1_0
      value_added_groUSDC_e_v1_0
      value_added_groUSDT_e_v1_0
      value_added_groDAI_e_v1_7
      value_added_groUSDC_e_v1_7
      value_added_groUSDT_e_v1_7
      value_added_total
      value_removed_groDAI_e_v1_0
      value_removed_groUSDC_e_v1_0
      value_removed_groUSDT_e_v1_0
      value_removed_groDAI_e_v1_7
      value_removed_groUSDC_e_v1_7
      value_removed_groUSDT_e_v1_7
      value_removed_total
      net_value_groDAI_e_v1_0
      net_value_groUSDC_e_v1_0
      net_value_groUSDT_e_v1_0
      net_value_groDAI_e_v1_7
      net_value_groUSDC_e_v1_7
      net_value_groUSDT_e_v1_7
      net_value_total
      net_amount_groDAI_e_v1_0
      net_amount_groUSDC_e_v1_0
      net_amount_groUSDT_e_v1_0
      net_amount_groDAI_e_v1_7
      net_amount_groUSDC_e_v1_7
      net_amount_groUSDT_e_v1_7
      # // The following fields must be calculated on the front-end side:
      # current_balance_groDAI_e_v1_0 = totals.net_amount_groDAI_e_v1_0 * prices.groDAI_e_v1_0
      # current_balance_groUSDC_e_v1_0 = totals.net_amount_groUSDC_e_v1_0 * prices.groUSDC_e_v1_0
      # current_balance_groUSDT_e_v1_0 = totals.net_amount_groUSDT_e_v1_0 * prices.groUSDT_e_v1_0
      # current_balance_groDAI_e_v1_7 = totals.net_amount_groDAI_e_v1_7 * prices.groDAI_e_v1_7
      # current_balance_groUSDC_e_v1_7 = totals.net_amount_groUSDC_e_v1_7 * prices.groUSDC_e_v1_7
      # current_balance_groUSDT_e_v1_7 = totals.net_amount_groUSDT_e_v1_7 * prices.groUSDT_e_v1_7
      # current_balance_total = current_balance_groDAI_e_v1_0 + current_balance_groUSDC_e_v1_0 
      #                       + current_balance_groUSDT_e_v1_0 + current_balance_groDAI_e_v1_7 
      #                       + current_balance_groUSDC_e_v1_7 + current_balance_groUSDT_e_v1_7
      # net_returns_groDAI_e_v1_0 = totals.current_balance_groDAI_e_v1_0 * totals.net_value_groDAI_e_v1_0
      # net_returns_groUSDC_e_v1_0 = totals.current_balance_groUSDC_e_v1_0 * totals.net_value_groUSDC_e_v1_0
      # net_returns_groUSDT_e_v1_0 = totals.current_balance_groUSDT_e_v1_0 * totals.net_value_groUSDT_e_v1_0
      # net_returns_groDAI_e_v1_7 = totals.current_balance_groDAI_e_v1_7 * totals.net_value_groDAI_e_v1_7
      # net_returns_groUSDC_e_v1_7 = totals.current_balance_groUSDC_e_v1_7 * totals.net_value_groUSDC_e_v1_7
      # net_returns_groUSDT_e_v1_7 = totals.current_balance_groUSDT_e_v1_7 * totals.net_value_groUSDT_e_v1_7
      # net_returns_total = totals.current_balance_total - net_value_total
    }
    core_deposits: transfers(where: {type: deposit}) {
      block
      timestamp
      hash
      token
      coinAmount
      usdAmount
    }
    core_withdrawals: transfers(where: {type: withdrawal}) {
      block
      timestamp
      hash
      token
      coinAmount
      usdAmount
    }
    core_transfers_in: transfers(where: {type: transfer_in}) {
      block
      timestamp
      hash
      token
      coinAmount
      usdAmount
    }
    core_transfers_out: transfers(where: {type: transfer_out}) {
      block
      timestamp
      hash
      token
      coinAmount
      usdAmount
    }
    core_approvals: approvals(where: {type: approval}) {
      block
      timestamp
      hash
      token
      spenderAddress
      coinAmount
      usdAmount
    }
  }
}

```

Enjoy it! 😁
