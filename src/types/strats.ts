// TODO: Vault needed?
export class Vault {
    id: string
    active: boolean
    constructor(
        id: string,
        active: boolean,
    ) {
        this.id = id
        this.active = active
    }
}

export class Strategy {
    id: string
    vault: string
    strat_name: string
    strat_display_name: string
    vault_name: string
    vault_display_name: string
    coin: string
    protocol: string
    metacoin: string
    active: boolean
    order: number
    constructor(
        id: string,
        vault: string,
        strat_name: string,
        strat_display_name: string,
        vault_name: string,
        vault_display_name: string,
        coin: string,
        metacoin: string,
        protocol: string,
        active: boolean,
        order: number,
    ) {
        this.id = id
        this.vault = vault
        this.strat_name = strat_name
        this.strat_display_name = strat_display_name
        this.vault_name = vault_name
        this.vault_display_name = vault_display_name
        this.coin = coin
        this.metacoin = metacoin
        this.protocol = protocol
        this.active = active
        this.order = order
    }
}
